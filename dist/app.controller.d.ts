import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getTeste(): string;
    getFindListById(params: any): any;
    getbyId(params: any): string;
    getbyId2(id: string): string;
    postNome(nome: string): string;
    postNome2(nome: string): string;
}
