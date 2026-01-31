type World = 'world' | 'hell';
const a: World = 'world';

type Greeting = `hello ${World}`; // 템플릿 리터럴 타입
const c: Greeting = 'hello hell'; // c는 "hello world" 또는 "hello hell"

function rest(...args: string[]) {
  console.log(args);
}

rest('1', '2', '3');

const tuple: [string, number] = ['abc', 10];
tuple[2]; // 에러 발생
tuple.push('hello'); // 이거는 못 막아줌 (타입스크립트 바보)
