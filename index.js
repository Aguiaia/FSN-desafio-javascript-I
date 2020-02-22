const alunosDaEscola=[
    {nome:"Henrique",
    notas:[],
    cursos:[],
    faltas:5},
    
    {nome:"Edson",
    notas:[],
    cursos:[],
    faltas:2},

    {nome:"Bruno",
    notas:[10,9.8,9.6],
    cursos:[],
    faltas:0},
    
    {nome:"Guilherme",
    notas:[10,9.8,9.6],
    cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],
    faltas:0},
    
    {nome:"Carlos",
    notas:[],
    cursos:[],
    faltas:0},
    
    {nome:"Lucca",
    notas:[10,9.8,9.6],
    cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],
    faltas:0}
];

function adicionarAluno(novoAluno){
    alunosDaEscola.push({nome: novoAluno,
    notas:[], 
    cursos: [], 
    faltas: 0})
    console.log(`Aluno ${novoAluno} adicionado com sucesso!`)
    }

function listarAlunos(){
    console.log(`
    ----------------------------------------
                LISTA DE ALUNOS         
    ----------------------------------------`)
    for (let aluno of alunosDaEscola) {
        console.log(
    `    Nome: ${aluno.nome} 
    Notas: ${aluno.notas}
    Faltas: ${aluno.faltas}`)
    for (let curso of aluno.cursos) {console.log(
    `    Cursos: ${curso.nomeDoCurso}, Data da Matrícula: ${curso.dataMatricula}`)}
    console.log(
    `    ----------------------------------------`)
    }
}


function buscarAluno (name) {
    let alunoFiltrado = alunosDaEscola.filter((aluno) => {
        return aluno.nome === name})
    if (alunoFiltrado.length > 0) {
        for(let i=0; i < alunoFiltrado.length; i++){
        console.log(`
        Encontramos o que você procurava!
        Nome: ${alunoFiltrado[i].nome}
        Notas: ${alunoFiltrado[i].notas}
        Cursos: ${alunoFiltrado[i].cursos}
        Faltas: ${alunoFiltrado[i].faltas}`)}
    } else {
        console.log(`Não encontramos o aluno ${name} em nossos registros`)
    }
} 

function matricularAluno(nome, curso){
    let alunoMatriculado = alunosDaEscola.filter((aluno) => {
        if (aluno.nome === nome) {
            aluno.cursos.push({nomeDoCurso: curso, dataMatricula: new Date})
        }
    })
    console.log(`Aluno ${nome} matriculado em ${curso}`)
   }

   function aplicarFalta(nome){
       let alunoFaltante = alunosDaEscola.filter((aluno) => {
           if (aluno.nome === nome) {
               let faltasnovas = aluno.faltas + 1
               console.log(`Agora o aluno ${nome} tem ${faltasnovas} faltas`)
           }
       })
    }
    
    function aplicarNota(nome, nota){
        let alunonota = alunosDaEscola.filter((aluno) => {
            if (aluno.nome === nome) {
                aluno.notas.push(nota)
            }
        })
        console.log(`A nota ${nota} foi adicionada ao aluno ${nome}`)
       }

    function aprovarAluno(nome){
        let alunoaprovado = alunosDaEscola.filter((aluno) => {
            if (aluno.nome === nome) {
                let soma = aluno.notas.reduce(function (acumulador, umaNota) {
                    return acumulador + umaNota
                })
                let media = soma / aluno.notas.length
                if (media >= 7 && aluno.faltas <= 3) {
                    console.log(`Aluno ${nome} foi aprovado!`)
                } else {
                    console.log(`Aluno ${nome} foi reprovado!`)
                }
            }

        })
    }