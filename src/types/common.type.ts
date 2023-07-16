import React from 'react';

export interface IChildren {
  children: React.ReactNode;
}

export type IFunc = () => void;
export type IProFunc<T> = () => Promise<T>;
export type IVoidProFunc = () => Promise<void>;
