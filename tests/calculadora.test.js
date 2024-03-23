const calculadora = require('../models/calculadora.js');

test("somar 2+2 deveria retornar 4", () => {
  expect(calculadora.somar(5, 100)).toBe(105);
})