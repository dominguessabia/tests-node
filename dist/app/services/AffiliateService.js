"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _AffiliateRepository = require('../repositories/AffiliateRepository'); var _AffiliateRepository2 = _interopRequireDefault(_AffiliateRepository);


 async function findAllStudents() 
{
    return await _AffiliateRepository2.default.findAll();
} exports.findAllStudents = findAllStudents;

 async function checkIsStudentByCpf(cpf) 
{    
    let student = await _AffiliateRepository2.default.findByCpf(cpf);

    if (student.length > 0) {
        return true;
    }

    // @TODO: Criar regra de Aluno Veterano

    return false;
} exports.checkIsStudentByCpf = checkIsStudentByCpf;

 async function registerStudent(body) 
{
    return await _AffiliateRepository2.default.create(body);
} exports.registerStudent = registerStudent;