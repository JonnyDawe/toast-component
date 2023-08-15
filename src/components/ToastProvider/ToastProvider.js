import React from "react";
import useKeyDown from "../../hooks/use-key-down";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const createToast = React.useCallback(({ message, variant }) => {
    setToasts((currentToasts) => {
      return [
        ...currentToasts,
        {
          message,
          variant,
          uuid: crypto.randomUUID(),
        },
      ];
    });
  }, []);

  const dismissToast = React.useCallback((id) => {
    setToasts((currentToasts) => {
      return currentToasts.filter((toast) => toast.uuid !== id);
    });
  }, []);

  const dismissAllToasts = React.useCallback((id) => {
    setToasts(() => {
      return [];
    });
  }, []);

  useKeyDown("Escape", dismissAllToasts);

  return (
    <ToastContext.Provider
      value={{
        toasts,
        createToast,
        dismissToast
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
