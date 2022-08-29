import { Route, Routes } from 'react-router-dom';

// Jss
import { ThemeProvider } from 'react-jss';
import { lightTheme } from './core/themes/light.theme';
import GlobalStyles from './core/styles/global.styles';

// Layout
import AppFooter from './core/layout/footer/footer.component';
import AppMain from './core/layout/main/main.component';
import AppNav from './core/layout/nav/nav.component';

// Routes
import AppAuth from './routes/auth/auth.component';
import AppHome from './routes/home/home.component';
import AppNotFound from './routes/not-found/not-found.component';
import AppShop from './routes/shop/shop.component';

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <AppNav />

      <Routes>
        <Route path="/" element={<AppMain />}>
          <Route path="/" element={<AppHome />} />
          <Route path="/auth" element={<AppAuth />} />
          <Route path="/shop" element={<AppShop />} />
          <Route path="*" element={<AppNotFound />} />
        </Route>
      </Routes>

      <AppFooter />
    </ThemeProvider>
  );
};

export default App;
