import { useState, useCallback } from 'react';

function useToggle(initialState = false) {
  const [value, setValue] = useState(initialState);

  const toggle = useCallback(() => {
    setValue(!value);
  }, [value]);

  return [value, toggle];
}

export default useToggle;