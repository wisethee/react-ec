import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

// Router
import { BrowserRouter } from 'react-router-dom';

// Root Component
import App from './app/app';

// Providers
import { AppUserProvider } from './app/core/contexts/user.context';
import { AppProductsProvider } from './app/core/contexts/products.context';
import { AppCartProvider } from './app/core/contexts/cart.context';

const root = ReactDOM.createRoot(
  document.getElementById('app-root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <AppUserProvider>
        <AppProductsProvider>
          <AppCartProvider>
            <App />
          </AppCartProvider>
        </AppProductsProvider>
      </AppUserProvider>
    </BrowserRouter>
  </StrictMode>
);
