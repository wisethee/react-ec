import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

// Router
import { BrowserRouter } from 'react-router-dom';

// Root Component
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('app-root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
