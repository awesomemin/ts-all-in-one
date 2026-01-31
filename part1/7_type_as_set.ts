type 넓음 = string | number;
type 좁음 = string;

type A = { name: string };
type B = { age: number };

type AandB = A & B;
type AorB = A | B;

const and: AandB = { name: 'awesome', age: 25 };
const or: AorB = { name: 'seongmin' };

const x: AandB = or; // 넓은 타입을 좁은 타입에 대입할 수는 없음
const y: AorB = and; // 좁은 타입은 넓은 타입에 대입 가능
