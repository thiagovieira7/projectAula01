import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('teste')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getTeste(): string {
    return this.appService.getTeste();
  }

  @Get('/find/:id')
  getFindListById(@Param() params) {
    return this.appService.getFindListById(params.id);
  }

  @Get(':id')
  getbyId(@Param() params) {
    return this.appService.getById(params.id);
  }

  @Get('/id/:id')
  getbyId2(@Param('id') id: string) {
    return this.appService.getById(id);
  }

  @Post('/nome/:nome')
  @HttpCode(201)
  postNome(@Param('nome') nome: string): string {
    return this.appService.postNome(nome);
  }

  @Post('/nome2/')
  @HttpCode(201)
  postNome2(@Body() nome: string): string {
    return this.appService.postNome(nome);
  }
}
