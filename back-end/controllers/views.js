const mongoose = require('mongoose');
const View = mongoose.model('View');

exports.createView = async (req, res) => {
    
    const viewData = {
        ...req.query,
        viewDate: Date.now()
    }

    const view = new View(viewData);
    
    try {
        const newView =  await view.save();
        return res.json(newView);
    } catch (error) {
        return  res.status(422).send(error.message);    
    }


}