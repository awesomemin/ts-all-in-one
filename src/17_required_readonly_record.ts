interface Profile {
  name?: string;
  age?: number;
  married?: boolean;
}

const seongmin1: Required<Profile> = {
  name: 'oh seongmin',
  age: 25,
  married: true,
};

type MyRequired<T> = {
  [Key in keyof T]-?: T[Key];
};

const seongmin2: Readonly<Profile> = {
  name: 'oh seongmin',
};
// 에러 발생 (readonly라서)
// seongmin2.name = 'kim seongmin';

type MyReadonly<T> = {
  readonly [Key in keyof T]: T[Key];
};

const a: Record<string, number> = { a: 3, b: 5, c: 7 };

type MyRecord<K extends keyof any, V> = {
  [key in K]: V;
};

type A = string | null | undefined | boolean | number;
type B = NonNullable<A>;
