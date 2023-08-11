import { GlobalStyles as GlobalThemeStyles } from '@mui/material';

export default function GlobalStyles() {
  return (
    <GlobalThemeStyles
      styles={{
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box !important',
          fontSize: '14px',
        },
        html: {},
        body: {
          fontFamily: "'Public Sans', Roboto, sans-serif",
          fontWeight: 400,
        },
        img: {
          display: 'block',
          maxWidth: '100%',
        },
        a: {
          textDecoration: 'none',
        },
        // '::-webkit-scrollbar': {
        //   width: '8px',
        // },
        // '::-webkit-scrollbar-track': {
        //   background: '#fff',
        // },
        // '::-webkit-scrollbar-thumb': {
        //   background: '#dbdbdb',
        //   borderRadius: '8px',
        // },
        // '::-webkit-scrollbar-thumb:hover': {
        //   background: '#2b2b2b',
        // },
      }}
    />
  );
}
