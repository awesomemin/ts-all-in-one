declare function forEach(arr: number[], callback: (el: number) => void): void;

let target: number[] = [];
forEach([1, 2, 3], (el) => target.push(el)); // callback이 number 리턴하는데 (타입 상 void) 에러가 안 뜸
