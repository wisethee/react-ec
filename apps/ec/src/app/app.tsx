import { Route, Routes } from 'react-router-dom';

// Jss
import { ThemeProvider } from 'react-jss';
import { lightTheme } from './core/themes/light.theme';
import GlobalStyles from './core/styles/global.styles';

// Layout
import AppFooter from './core/layout/footer/footer.component';
import AppMain from './core/layout/main/main.component';
import AppNav from './core/layout/nav/nav.component';

// Feat
import AppAuth from './feat/auth/auth.component';
import AppHome from './feat/home/home.component';
import AppNotFound from './feat/not-found/not-found.component';

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <AppNav />

      <Routes>
        <Route path="/" element={<AppMain />}>
          <Route path="/" element={<AppHome />} />
          <Route path="/auth" element={<AppAuth />} />
          <Route path="*" element={<AppNotFound />} />
        </Route>
      </Routes>

      <AppFooter />
    </ThemeProvider>
  );
};

export default App;
