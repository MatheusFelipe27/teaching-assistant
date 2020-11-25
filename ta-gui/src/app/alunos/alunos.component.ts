import { Component, OnInit } from '@angular/core';
import { Turma } from '../../../../common/turma';
import { AlunoService } from './alunos.service';
import { Matricula } from '../../../../common/matricula';
import { Aluno } from '../../../../common/aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  nomeTurma: string = ""
  turma: Turma
  matriculas: Matricula[] = []
  monitores : Aluno[] = []
  header: String[] = []
  metas: String[] = []
  clickedBtm = false

  constructor(private alunoService: AlunoService) { }
  ngOnInit() {

  }

  criarAluno(a: Aluno): void {

  }


  carregarMatriculas() {

    //Chamando autoavaliacao.service que faz a req pro server para pegar a turma indicada pelo usuário
    this.alunoService.getTurma(this.nomeTurma).subscribe(

      (a) => {

        this.turma = new Turma()
        console.log(this.turma)
        this.matriculas = this.turma.getMatriculas()
      },
      (msg) => { alert(msg.message); }
    )

    this.header = ["Nome", "CPF", "Email", "Monitor"]
    this.clickedBtm = true

  }

  carregarMonitores() {

    //Chamando autoavaliacao.service que faz a req pro server para pegar a turma indicada pelo usuário
    this.alunoService.getTurma(this.nomeTurma).subscribe(

      (a) => {

        this.turma = new Turma()
        console.log(this.turma)
        this.matriculas = this.turma.getMatriculas()
        this.monitores = this.turma.getMonitores()
      },
      (msg) => { alert(msg.message); }
    )

    this.header = ["Nome", "CPF", "Email", "Monitor"]
    this.clickedBtm = true

  }


}
