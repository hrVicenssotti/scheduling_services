import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {},
    typography: {
        allVariants: {
            fontFamily: '"Roboto Flex", "sans-serif"',
            textRendering: 'optimizeLegibility',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            fontSynthesis: 'none',
            lineHeight: '1.5',
        },
    },
});
