// src/__tests__/index-test.js
const babel = require('@babel/core');
const plugin = require('../build/index.js').default;

it('条件语句块', () => {
  const example = `
  const foo = 1;
  if (foo) console.log(foo);
  `
  const {code} = babel.transform(example, {plugins: [plugin]});
  expect(code).toMatchSnapshot();
});

it('函数内部', () => {
  const example = `
  const foo = 1;
  function aaa(){
    console.log(foo)
  };
  `
  const {code} = babel.transform(example, {plugins: [plugin]});
  expect(code).toMatchSnapshot();
});

it('多层函数内部', () => {
  const example = `
  const foo = 1;
  function aaa(){
    function aaa(){
      console.log(foo)
    };
  };
  `
  const {code} = babel.transform(example, {plugins: [plugin]});
  expect(code).toMatchSnapshot();
});

it('类方法内部', () => {
  const example = `
  class A{
    getData(){
      console.log(1111)
    }
  }
  `
  const {code} = babel.transform(example, {plugins: [plugin]});
  expect(code).toMatchSnapshot();
});
