function add<T extends number | string>(x: T, y: T): T {
  return x + y;
}

add(1, 2); // 3
add('1', '2'); // 12

// add('1', 2); 에러
// add(1, '2'); 에러
