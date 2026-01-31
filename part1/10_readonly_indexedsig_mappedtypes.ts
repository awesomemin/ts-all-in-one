interface Human {
  readonly name: string;
  age: number;
}

const seongmin: Human = {
  name: 'Oh Seongmin',
  age: 25,
};
// 에러 발생. readonly는 수정 불가능
// seongmin.name = 'Kim Seongmin';

// 모든 value가 숫자 타입이어야 함
type A = { [key: string]: number };
const a: A = {
  nice: 3,
  hello: 10,
  // perfect: 'real',
};

type Items = 'candy' | 'chocolate' | 'jelly';
type Stocks = { [key in Items]: number };
const stocks: Stocks = {
  candy: 5,
  chocolate: 12,
  jelly: 99,
};
