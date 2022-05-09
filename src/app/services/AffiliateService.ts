import AffiliateRepository from "../repositories/AffiliateRepository";


export async function findAllStudents(): Promise<any> 
{
    return await AffiliateRepository.findAll();
}

export async function checkIsStudentByCpf(cpf: number): Promise<boolean> 
{    
    let student = await AffiliateRepository.findByCpf(cpf);

    if (student.length > 0) {
        return true;
    }

    // @TODO: Criar regra de Aluno Veterano

    return false;
}

export async function registerStudent(body: any): Promise<string> 
{
    return await AffiliateRepository.create(body);
}