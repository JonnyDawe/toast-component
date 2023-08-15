import React from "react";
import { ToastContext } from "../ToastProvider/ToastProvider";
import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts, dismissToast } =
    React.useContext(ToastContext);


  if ((toasts ?? []).length === 0) {
    return null;
  }

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map((toast) => {
        return (
          <li key={toast.uuid} className={styles.toastWrapper}>
            <Toast
              variant={toast.variant}
              handleDismiss={() => {
                dismissToast(toast.uuid);
              }}
            >
              {toast.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
