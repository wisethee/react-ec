import { ThemeProvider } from 'react-jss';
import GlobalStyles from './core/styles/global.styles';
import { lightTheme } from './core/themes/light.theme';

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <div>App works!</div>
    </ThemeProvider>
  );
};

export default App;
