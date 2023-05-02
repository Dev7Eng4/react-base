import React from 'react';

interface Animal {
  name: string;
  age: number;
}

interface Product {
  name: string;
  category: string;
  price: number;
}

interface Props {
  item: Animal | Product;
}

type RBG = [red: number, green: number, blue: number];
type Color = { value: RBG | string };

// use satisfies to color can use method of string or RBG
const color = { value: 'red' } satisfies Color;

type NumberOrString = number | string;
type OnlyNumber = Exclude<NumberOrString, string>;
type OnlyString = Extract<NumberOrString, string>;

const add = (a: number, b: number) => {
  return a + b;
};
type AddReturnType = ReturnType<typeof add>;
type AddParamsType = Parameters<typeof add>;

async function fetchData(): Promise<string> {
  return 'string';
}
type ResolvedAsyncResult = Awaited<ReturnType<typeof fetchData>>;

const TypeRule = ({ item }: Props) => {
  return <div>TypeRule</div>;
};

export default TypeRule;
