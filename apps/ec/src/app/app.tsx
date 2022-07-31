import { ThemeProvider } from 'react-jss';
import { lightTheme } from './core/themes/light.theme';

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <div>App works!</div>
    </ThemeProvider>
  );
};

export default App;
