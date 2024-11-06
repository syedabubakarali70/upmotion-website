import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
// Create a context
const DelayContext = createContext();

// Provider component
const DelayProvider = ({ children }) => {
  const [delay, setDelay] = useState(2.5); // delay for hero section

  return (
    <DelayContext.Provider value={{ delay, setDelay }}>
      {children}
    </DelayContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDelay = () => {
  const context = useContext(DelayContext);
  if (!context) {
    throw new Error("useDelay must be used within a DelayProvider");
  }
  return context;
};

DelayProvider.propTypes = {
  children: PropTypes.node,
};

export default DelayProvider;
