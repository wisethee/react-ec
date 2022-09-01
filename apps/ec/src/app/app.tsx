import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

// Redux
import { useDispatch } from 'react-redux';
import { userActions } from './core/store/reducers/user/user.reducer';

// Firebase
import { User } from 'firebase/auth';
import {
  createUserDocument,
  onAuthStateChangedListener,
} from './core/utils/firebase/firebase.utils';

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
import AppCart from './routes/cart/cart.component';
import AppHome from './routes/home/home.component';
import AppNotFound from './routes/not-found/not-found.component';
import AppShop from './routes/shop/shop.component';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: User) => {
      if (user) {
        createUserDocument(user);
      }
      dispatch(userActions.setCurrentUser({ user }));
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <AppNav />

      <Routes>
        <Route path="/" element={<AppMain />}>
          <Route path="/" element={<AppHome />} />
          <Route path="/auth" element={<AppAuth />} />
          <Route path="/shop/*" element={<AppShop />} />
          <Route path="/cart" element={<AppCart />} />
          <Route path="*" element={<AppNotFound />} />
        </Route>
      </Routes>

      <AppFooter />
    </ThemeProvider>
  );
};

export default App;
