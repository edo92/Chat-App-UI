import { useEffect } from 'react';

export const useOnClickOutside = (
  ref,
  handler,
  events,
) => {
  if (!events) events = [`mousedown`, `touchstart`];
  const detectClickOutside = (event) => {
    if (
      ref.current &&
      !ref.current.contains(event.target)
    ) {
      handler('outside');
      return;
    }
    handler('inside');
    return;
  };
  useEffect(() => {
    for (const event of events)
      document.addEventListener(
        event,
        detectClickOutside,
      );
    return () => {
      for (const event of events)
        document.removeEventListener(
          event,
          detectClickOutside,
        );
    };
  });
};
