import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top-left corner of the viewport
  }, [pathname]); // Trigger on each path change
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return null;
};

export default ScrollToTop;
