import { useState, useEffect } from 'react';

import history from 'utils/history';

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  const { scrollWidth, scrollHeight } = document.body;

  return {
    width,
    height,
    scrollWidth,
    scrollHeight,
  };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  const handleResize = () => {
    setWindowDimensions(getWindowDimensions());
  };

  useEffect(() => {
    handleResize('Pathname Changed');
  }, [history.location.pathname]);

  useEffect(() => {
    window.addEventListener('resize', handleResize('Resize'));
    return () => {
      window.removeEventListener('resize', handleResize('Resize'));
    };
  }, []);

  useEffect(() => {
    window.addEventListener('DOMContentLoaded', handleResize('ContentLoaded'));
    return () => {
      window.removeEventListener(
        'DOMContentLoaded',
        handleResize('ContentLoaded'),
      );
    };
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
