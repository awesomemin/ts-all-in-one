// union 예시
function add(x: string | number, y: string | number): string | number {
  return x + y;
}
add(1, 2);
add('1', '2');
add(1, '2');

// intersection 예시
type A = string & number; // A는 never가 됨

type B = { hello: 'world' } & { zero: 'cho' };
const b: B = {
  hello: 'world',
  zero: 'cho',
};
