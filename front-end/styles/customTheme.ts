import { theme as chakraTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";

const fonts = {
    ...chakraTheme.fonts,
    body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    heading: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
};

const breakpoints = createBreakpoints({
    sm: "10em",
    slmd: "33em",
    lmd: "41em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
});

const overrides = {
    ...chakraTheme,
    fonts,
    breakpoints,
    fontWeights: {
        normal: 300,
        medium: 600,
        bold: 700
    },
    fontSizes: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
        "4xl": "36px",
        "5xl": "48px",
        "6xl": "64px"
    },
};

const customTheme = extendTheme(overrides);

export default customTheme;