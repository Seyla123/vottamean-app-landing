import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import CustomProvider from './components/layout/CustomProvider.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CustomProvider>
      <App />
    </CustomProvider>
  </StrictMode>
);
