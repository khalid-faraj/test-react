import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function DashboardScriptsLoader() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      const script = document.createElement('script');
      script.src = '/dist/js/pages/dashboard.js';
      script.async = true;

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [location.pathname]);

  return null;
}

export default DashboardScriptsLoader;
