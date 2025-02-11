// use-toggle.js
import React from 'react';

function useToggle(initialValue = false) {
  if (typeof initialValue !== 'boolean') {
    console.warn('Invalid type for useToggle');
  }

  const [value, setValue] = React.useState(
    initialValue
  );

  const toggleValue = React.useCallback(function (newval) {
    setValue((currentValue) => newval ?? !currentValue);
  }, []);

  return [value, toggleValue];
}

export default useToggle;