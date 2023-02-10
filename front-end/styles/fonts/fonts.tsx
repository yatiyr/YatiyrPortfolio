/**
 * Yatiyr
 */

// Global styles are applied using this component
import { Global }        from "@emotion/react";

// Font styles
import { JetBrainsMono } from "styles/fonts/jetBrainsMono";
import { SourceCodePro } from "styles/fonts/sourceCodePro";
import { Inconsolata }   from "styles/fonts/inconsolata";
import { Montserrat }    from "styles/fonts/montserrat";
import { UbuntuMono }    from "styles/fonts/ubuntuMono";
import { OpenSans }      from "styles/fonts/openSans";
import { Ubuntu }        from "styles/fonts/ubuntu";
import { Inter }         from "styles/fonts/inter";

const Fonts = () => (
  <>
    <Global styles={JetBrainsMono}/>
    <Global styles={SourceCodePro}/>
    <Global styles={Inconsolata}/>
    <Global styles={Montserrat}/>
    <Global styles={UbuntuMono}/>
    <Global styles={OpenSans}/>
    <Global styles={Ubuntu}/>
    <Global styles={Inter}/>
  </>
);

export default Fonts;