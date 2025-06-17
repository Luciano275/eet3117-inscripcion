'use client'

import { useState, use, createContext } from "react";

interface IBelongContext {
  isBelong: boolean;
  setBelong: (value: boolean) => void;
}

const BelongContext = createContext<IBelongContext>({
  isBelong: false,
  setBelong: () => {}
});

export const useBelong = () => use(BelongContext);

export default function BelongProvider({ children }: { children: React.ReactNode }){
  const [isBelong, setIsBelong] = useState(false);

  const setBelong = (value: boolean) => {
    setIsBelong(value);
  };

  return (
    <BelongContext value={{ isBelong, setBelong }}>
      {children}
    </BelongContext>
  );
};