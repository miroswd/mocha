const assert = require("assert")

const sumValue = (a,b) => {
  return a+b;
}

const subValue = (a,b) => {
  return a-b;
}

describe('Operações matemáticas', () => {
  it('Soma', () => {
    const sum = sumValue(1,1)
    const expect = 2
    assert.deepEqual(sum,expect)
  })

  it('Subtração', () => {
    const sub = subValue(2,1)
    const expect = 1
    assert.deepEqual(sub, expect)
  })
})