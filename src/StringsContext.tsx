import React from 'react';
import { createContext } from 'react';

const StringsContext = createContext({});

export interface StringsContextProviderProps {
  data: Record<string, any>;
}

export function StringContextProvider(
  props: React.PropsWithChildren<StringsContextProviderProps>,
) {
  return (
    <StringsContext.Provider value={props.data}>
      {props.children}
    </StringsContext.Provider>
  );
}

export function useStringsContext(): Record<string, any> {
  return React.useContext(StringsContext);
}
