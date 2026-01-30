function a(x: string): number {
  return +x;
}

a('1'); // 1

type B = (x: string) => number | string;

// a는 string을 받아서 number를 반환하는 함수
// b는 string을 받아서 number나 string을 반환하는 함수
// 따라서 a보다 b가 넓음 -> a를 b에 대입 가능
const b: B = a;
