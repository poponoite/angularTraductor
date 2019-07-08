export class Coracao{

    constructor(
        public cheio : boolean, 
        public urlCoracaoCheio : string = '../assets/coracao_cheio.png',
        public urlCoracaoVazio : string = '../assets/coracao_vazio.png'
    ){}  

    exibeCoracao(){
        if (this.cheio) {
            return this.urlCoracaoCheio;
        } else {
            return this.urlCoracaoVazio;
        }
    }
    
}