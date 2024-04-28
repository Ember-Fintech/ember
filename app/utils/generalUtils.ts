export const debounce = (func, delay) => {
    let timeoutId: any;
  
    return (...args: [any]) => {
      clearTimeout(timeoutId);
  
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };