interface Profile {
  name: string;
  age: number;
  married: boolean;
}

const awesome: Pick<Profile, 'name' | 'age'> = {
  name: 'seongmin',
  age: 25,
};

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

const awesomemin: Omit<Profile, 'married'> = {
  name: 'seongmin',
  age: 25,
};

type NameAge = Exclude<keyof Profile, 'married'>;

type MyOmit<T, S extends keyof any> = Pick<T, Exclude<keyof T, S>>;
const seongmin: MyOmit<Profile, 'married'> = {
  name: 'seongmin oh',
  age: 25,
};
