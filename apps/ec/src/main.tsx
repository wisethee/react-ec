import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

// Router
import { BrowserRouter } from 'react-router-dom';

// Root Component
import App from './app/app';

// User Provider
import { AppUserProvider } from './app/core/contexts/user.context';

const root = ReactDOM.createRoot(
  document.getElementById('app-root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <AppUserProvider>
        <App />
      </AppUserProvider>
    </BrowserRouter>
  </StrictMode>
);
