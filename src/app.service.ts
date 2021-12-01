import { Injectable } from '@nestjs/common';
const lista = [];
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTeste(): string {
    return 'nosso teste';
  }

  getById(id) {
    return `O ID Passado foi: ${id}`;
  }

  postNome(nome) {
    lista.push(nome);
    return `cadastrado com sucesso`;
  }
}
