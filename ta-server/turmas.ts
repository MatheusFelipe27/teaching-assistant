import { Turma } from '../common/turma';
import {Matricula} from '../common/matricula'
import {Aluno} from '../common/aluno';

export class Turmas {
    turmas: Turma[ ] = [ ]


    cadastrarTurma(turma: Turma): Turma{
        return null;
    }

    removerTurma(descricao: string): Turma{
        return null;
    }

    atualizarTurma(turma: Turma): Turma{
        return null;
    }
    
    compararTurmas(turmas: Turma []): any{
        return null;
    }

    getTurma(descricao: string): Turma{
        if(descricao=="ESS 2018.1"){
            var turma = new Turma()
            turma.descricao = "ESS 2018.1"
            console.log(turma.descricao)
            var matricula1 = new Matricula();
            var matricula2 = new Matricula();
            var matricula3 = new Matricula();
            var aluno1 = new Aluno();
            var aluno2 = new Aluno();
            var aluno3 = new Aluno();
            aluno1.nome = "Macaulay macaule";
            aluno1.cpf = "111";
            aluno1.email = "macaulay@gmail.com";
            matricula1.aluno = aluno1;
            aluno2.nome = "Jose Maria";
            aluno2.cpf = "222";
            aluno2.email = "josem@gmail.com";
            matricula2.aluno = aluno2;
            aluno3.nome = "Seu Sebastiao";
            aluno3.cpf = "333";
            aluno3.email = "seuseba@gmail.com";
            matricula3.aluno = aluno3;
            turma.matriculas.push(matricula1);
            turma.matriculas.push(matricula2);
            turma.matriculas.push(matricula3);
            var monitor1 = new Aluno();
            var monitor2 = new Aluno();
            var monitor3 = new Aluno();
            monitor1.nome = "Irmão do Gas";
            monitor2.nome = "Juridica de PE";
            monitor3.nome = "Pipico do santa";
            turma.monitores.push(monitor1);
            turma.monitores.push(monitor2);
            turma.monitores.push(monitor3);

            return turma;
    
        }
        return null;
    }
}