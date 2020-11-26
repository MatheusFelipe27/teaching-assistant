import express = require('express');
import bodyParser = require("body-parser");
import { Turma } from '../common/turma';
import {Aluno} from '../common/aluno';
import {CadastroDeAlunos} from './cadastrodealunos'; 
import {Turmas} from './turmas'
import {Matricula} from '../common/matricula'

var taserver = express();
const turmas: Turmas = new Turmas()
var cadastro: CadastroDeAlunos = new CadastroDeAlunos();

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
taserver.use(allowCrossDomain);

taserver.use(bodyParser.json());

taserver.get('/alunos', function (req: express.Request, res: express.Response) {

})

//recebe um identificador de turma e retorna a mesma
taserver.get('/turmas', function (req: express.Request, res: express.Response){

})

taserver.post('/monitores', function (req: express.Request, res: express.Response){
    const descricao: string = <string> req.body.descricao;
    var pegarturma = turmas.getTurma(descricao)
    var matricula: string = <string> req.body.matricula;
    const cpf: string = <string> req.body.cpf
    var pegarmatricula =pegarturma.getMatricula(cpf)
    var monitor: Aluno = <Aluno> req.body.monitor;
    pegarmatricula.setMonitor(monitor)

})
//recebe um identificador de turma e de aluno e retorna uma matricula
taserver.get('/matriculas', function (req: express.Request, res: express.Response){

})

taserver.get('/turma/:descricao', function (req: express.Request, res: express.Response){
    var turmas = new Turmas();
    let turma = new Turma();
    turma = turmas.getTurma(req.params.descricao)
    console.log(req.params.descricao)
    res.send(turma)
    //res.send(JSON.stringify(cadastro.getAlunos()));
})

var server = taserver.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
  
function closeServer(): void {
    server.close();
}
  
export { server, closeServer }