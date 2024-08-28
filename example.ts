function soma(x: number, y: number){
    return x + y;
}

async function acesso(url: string){
    return await fetch(url)
}

type Ano = number

type disciplina = {
    nome: string,
    semestre: number
}

type Aluno = {
    nome: string,
    idade: number,
    aulas: Array<{disciplina}>
}