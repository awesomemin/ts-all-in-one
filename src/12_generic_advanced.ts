interface Arr<T> {
  forEach(callbackfn: (value: T) => void): void;
  map<S>(callbackfn: (value: T) => S): S[];
  filter<S extends T>(callbackfn: (value: T) => value is S): S[];
}

const a: Arr<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
a.forEach((val) => console.log(val));
const convertedToStr = a.map((val) => val.toString());

const b: Arr<number | string> = [1, '2', 3, 4, '5', '6'];
const strs = b.filter((val) => typeof val === 'string');
