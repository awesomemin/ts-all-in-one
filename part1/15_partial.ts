interface Profile {
  name: string;
  age: number;
  married: boolean;
}

const seongmin: Profile = {
  name: 'seongmin',
  age: 25,
  married: true,
};

const seongminAnonymous: Partial<Profile> = {
  age: 25,
  married: true,
};

type MyPartial<T> = {
  [P in keyof T]?: T[P];
};
