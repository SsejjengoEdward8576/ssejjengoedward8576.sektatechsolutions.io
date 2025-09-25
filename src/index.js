import React from 'react';
import { createRoot } from 'react-dom/client';

// Import global Bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import the router
import AppRouter from './router';

// Render the router as the main app
const root = createRoot(document.getElementById('root'));
root.render(<AppRouter />);
