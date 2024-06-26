import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactUs from './ContactUs';
const MainPage = lazy(() => import('./MainPage'));
const AppPage = lazy(() => import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Suspense fallback={<div className='loader-container'><div className="loader"></div></div>}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/rvsf" element={<AppPage />} />
      </Routes>
      </Suspense>
    </Router>
  </React.StrictMode>
);
reportWebVitals();
