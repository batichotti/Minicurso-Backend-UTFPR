function soma(x: number, y: number): number{
    return x + y;
}

async function acesso(url: string): Promise<Response>{
    return await fetch(url);
}

type Ano = number

type Disciplina = {
    nome: string,
    semestre: number
}

// type Aluno = {
//     nome: string,
//     idade: number,
//     aulas: Array<{disciplina}>
// }

interface IAluno {
    nome: string,
    idade: number,
    aulas: Array<{Disciplina}>
}

class Aluno implements IAluno{
    nome: string;
    idade: number;
    aulas: { Disciplina: any; }[];
    aprovar(): void{
        console.log("Aprovado")
    }
    reprovar(): void{
        console.log("Aprovado")
    }
}

class AlunoV2 implements IAluno{
    nome: string;
    idade: number;
    aulas: { Disciplina: any; }[];
}
