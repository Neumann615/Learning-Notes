function add(x, y) {
  return x + y;
}

const b = add(2, 3);
console.log(b);

// 下一行eslint 所有的规则都失效
// eslint-disable-next-line
console.log(add(1, 2))
