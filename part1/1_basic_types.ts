const a: number = 5;
const b: string = '5';
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: any = 123; // any: 아무거나 다 됨, 최대한 사용 자제
const g: 5 = 5;
const h: true = true;

function add1(x: number, y: number): number {
  return x + y;
}

const add2: (x: number, y: number) => number = (x, y) => x + y;

const obj: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 };

const arr1: string[] = ['123', '456'];

const arr2: Array<number> = [123, 456, 789];

const arr3: [number, number, string] = [123, 234, 'abc'];
