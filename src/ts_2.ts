try {
  const array = []; // 빈 배열 선언 시 never[]로 추론
  array.push('hello');
} catch (error) {
  error;
}

// 느낌표 : null이나 undefined가 아님에 전재산 걸 수 있음, 그러나 사용 자제할 것 / 대신 if를 사용하면 좋음
// const head = document.querySelector('#head');
const head = document.querySelector('#head');
if (head) {
  head.innerHTML = 'hello world';
  console.log(head);
}
