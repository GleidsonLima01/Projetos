import { Produto } from 'src/core';
export declare class ProdutoController {
    obterProdutos(): Promise<Produto[]>;
    obterProdutosPorId(id: string): Promise<Produto | null>;
}
