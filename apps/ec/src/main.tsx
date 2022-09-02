import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

// Router
import { BrowserRouter } from 'react-router-dom';

// Root Component
import App from './app/app';

// Redux Provider & store
import { Provider } from 'react-redux';
import store from './app/core/store/store';

// Context API Providers
import { AppCartProvider } from './app/core/contexts/cart.context';

const root = ReactDOM.createRoot(
  document.getElementById('app-root') as HTMLElement
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppCartProvider>
          <App />
        </AppCartProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
