import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    outline: none;

  }

  *::selection {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.light};
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    max-width: 100%;
    overflow-x: hidden;
    transition: all .3s ease;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  ul {
    margin: 0;
    padding: 0;

    li {
      margin: 0;
      padding: 0;
      list-style: none;
    }
  }
`;
