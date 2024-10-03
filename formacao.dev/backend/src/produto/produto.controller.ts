import { Controller, Get, Param } from '@nestjs/common';
import { Produto, produtos } from 'src/core';

@Controller('produtos')
export class ProdutoController {
    @Get()
    async obterProdutos(): Promise<Produto[]> {
      //await this.esperarSegundos(2)
        return produtos.map((produto) => ({
          ...produto,
          especificacoes:{destaque:produto.especificacoes.destaque}  
        }));
    }

    @Get(':id')
    async obterProdutosPorId(@Param('id') id: string): Promise<Produto | null >{
      const produto = produtos .find((produto) => produto.id === +id)
      return produto ?? null;
    }

    /*
    esperarSegundos(segundos: number): Promise<void> {
      return new Promise((resolve) => {
        setTimeout(resolve, segundos * 1000);
      })
    }
    */
}
