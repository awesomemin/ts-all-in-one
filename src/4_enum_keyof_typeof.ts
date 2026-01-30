const enum EDirection {
  Up,
  Down,
  Left,
  Right,
}

const a = EDirection.Up;
const c = EDirection.Left;

const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

function walk(dir: EDirection) {}

type Direction = (typeof ODirection)[keyof typeof ODirection];
function run(dir: Direction) {}

walk(EDirection.Left);
run(ODirection.Right);

// keyof 사용법
const obj = { a: 'hello', b: 'awesome', c: 123 } as const;
type Key = keyof typeof obj; // "a" | "b" | "c"
type Values = (typeof obj)[keyof typeof obj]; // "hello" | "awesome" | 123
