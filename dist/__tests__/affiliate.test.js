"use strict";var _AffiliateService = require('../app/services/AffiliateService');

describe('Testing SERVICE AFFILIATE', () => {

  test('function findPersonByCpf', async () => {
    let response = await _AffiliateService.checkIsStudentByCpf.call(void 0, 12345678909);
    expect( response ).toBe(true);
  });

  test('function registerStudent', async () => {
    let data = {
      "cpf": 12345611893311,
      "name": "TESTES",
      "email": "email@teste.com",
      "telefone": 11999999999,
      "como_soube": "SABER EM REDE"
    };
    
    let response = await _AffiliateService.registerStudent.call(void 0, data);
    expect( response ).toBe("Registro feito!");
  });
  

});
