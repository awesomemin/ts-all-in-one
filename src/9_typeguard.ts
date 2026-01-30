function numOrStr(a: number | string) {
  if (typeof a === 'number') {
    a.toFixed(1); // a가 number라는 것이 확정
  } else {
    a.charAt(3); // a가 string이라는 것이 확정
  }
  // if (typeof a === 'boolean') {
  //   a.toString();
  // }
}

function numOrNumArr(a: number | number[]) {
  if (Array.isArray(a)) {
    a.concat(4);
  } else {
    a.toFixed(3);
  }
}
numOrNumArr(123);
numOrNumArr([1, 2, 3]);

class A {
  aaa() {}
}

class B {
  bbb() {}
}

function aOrB(param: A | B) {
  if (param instanceof A) {
    param.aaa();
  } else {
    param.bbb();
  }
}

interface Cat {
  meaw: () => void;
}

interface Dog {
  bark: () => void;
}

// custom type guard
function isCat(target: Cat | Dog): target is Cat {
  if ('meaw' in target) return true;
  else return false;
}

function pet(target: Cat | Dog) {
  if (isCat(target)) {
    target.meaw();
  } else {
    target.bark();
  }
}
