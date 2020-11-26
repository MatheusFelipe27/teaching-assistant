import { Injectable }    from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';
import { Aluno } from '../../../../common/aluno';

import { Turma } from '../../../../common/turma';

@Injectable()
export class AlunoService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private taURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  postMonitor(descricaoTurma: string, cpfdoAluno: string, cpfdoMonitor: Aluno): Observable<any> {
    const tudo ={
      descricao: descricaoTurma,
      cpf: cpfdoAluno,
      monitor: cpfdoMonitor
    }
    console.log("chegou no get do service")
    return this.http.post<any>(this.taURL + `/monitores/`, tudo, {headers: this.headers})
              .pipe(
                  retry(2)
              );
  }
  getTurma(turma: string): Observable<Turma> {
    console.log("chegou no get do service")
    return this.http.get<Turma>(this.taURL + `/turma/${turma}`)
              .pipe(
                  retry(2)
              );
  }

}