const { describe, test, expect } = require('@jest/globals');

const somar =  require('../src/app.js');
const saudacao = require('../src/modulo.js');

describe('Testes para a função saudacao', () => {
  test('Deve retornar uma saudação correta', () => {
    const resultado = saudacao('Usuário');
    expect(resultado).toBe('Olá, Usuário!');
  });
});

test('soma 1 + 2 para igual a 3', () => {
  expect(somar(1, 2)).toBe(3);
});

test('soma 10.000 + 90.000 para igual a 100000', () => {
  expect(somar(10000, 90000)).toBe(100000);
});

test('soma 10 + 90 para igual a 100', () => {
  expect(somar(10, 90)).toBe(100);
});

test('soma -1 + 1 para igual a 0', () => {
  expect(somar(-1, 1)).toBe(0);
});

test('soma 10 + 90 para igual a 100', () => {
  expect(somar(10, 90)).toBe(100);
});