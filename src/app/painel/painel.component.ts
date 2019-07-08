import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from '../models/frase.model';
import { FRASES } from './frase-mock';
import { Coracao } from '../models/coracao.model';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit,OnInit,OnDestroy {

  public frases : Frase[] = FRASES;
  public resposta : string = "";

  public progresso : number = 0;

  public rodada : number = 0;
  public fraseRodada : Frase = this.frases[this.rodada];

  public tentativas : number = 3;

  @Output() public encerrarJogo : EventEmitter<string> = new EventEmitter();

  constructor() { 
    this.atualizaRodada(); 
  }

  ngOnInit() {
    

  }

  ngOnDestroy(){
    
  }

  atualizaResposta(value : Event){
     this.resposta = ((<HTMLInputElement>value.target).value);
  }

  verificaResposta(){
    if(this.resposta == this.frases[this.rodada].frasePtBr){
      this.rodada++;
      alert("Correto");
      this.progresso += (100 / this.frases.length);
      if(this.rodada === 4){
        this.encerrarJogo.emit("Fim de jogo, você ganhou !");
      }
      this.atualizaRodada();
    }else{
      alert("Errado");
      
      this.tentativas--;
      if(this.tentativas == -1){
        this.encerrarJogo.emit("derrota");
      }
    } 
  }

  atualizaRodada(){
    this.fraseRodada = this.frases[this.rodada];
    this.resposta = "";
  }

}
