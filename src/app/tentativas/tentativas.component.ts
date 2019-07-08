import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Coracao } from '../models/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit,OnChanges {

  coracoes : Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ];

 @Input() public tentativas : number;


  constructor() {

   }

  ngOnChanges(){
    if(this.tentativas != this.coracoes.length){
      let indice = this.coracoes.length - this.tentativas;
      this.coracoes[indice - 1].cheio = false;
    }
  }

  ngOnInit( ) {
    
  }

}
