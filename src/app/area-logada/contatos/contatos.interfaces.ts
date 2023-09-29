export interface Contatos {
    id: number;
    nome: string;
    cpf: number;
    banco: number;
    ag: number;
    cc: number;
};

  // caso tenha um grupo de tipagens/dados
// export interface Contatos {
//     id: number;
//     nome: string;
//     cpf: number;
//     dadosBancarios: {
//         banco: number;
//         ag: number;
//         cc: number;
//     }
// };