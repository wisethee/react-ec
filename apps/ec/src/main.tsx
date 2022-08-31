import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

// Router
import { BrowserRouter } from 'react-router-dom';

// Root Component
import App from './app/app';

// Providers
import { AppUserProvider } from './app/core/contexts/user.context';
import { AppCategoriesProvider } from './app/core/contexts/categories.context';
import { AppCartProvider } from './app/core/contexts/cart.context';

const root = ReactDOM.createRoot(
  document.getElementById('app-root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <AppUserProvider>
        <AppCategoriesProvider>
          <AppCartProvider>
            <App />
          </AppCartProvider>
        </AppCategoriesProvider>
      </AppUserProvider>
    </BrowserRouter>
  </StrictMode>
);
