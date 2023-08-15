import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";
import { ToastContext } from "../ToastProvider/ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [message, setMessage] = React.useState("");
  const { createToast } = React.useContext(ToastContext);



  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf></ToastShelf>

      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          createToast({message,variant})
          setMessage("");
          setVariant(VARIANT_OPTIONS[0]);
        }}
        className={styles.controlsWrapper}
      >
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
              className={styles.messageInput}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((mode) => {
              return (
                <label key={mode} htmlFor={`variant-${mode}`}>
                  <input
                    id={`variant-${mode}`}
                    type="radio"
                    name="variant"
                    value={mode}
                    checked={mode === variant}
                    onChange={(event) => {
                      setVariant(event.target.value);
                    }}
                  />
                  {mode}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
