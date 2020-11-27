import { Component, OnInit } from '@angular/core';
import { BuscaService } from './busca.service';



@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {

  personajes: any = [];
  
    constructor(buscaServ: BuscaService) {
      
      buscaServ.getTodos()
               .subscribe(
                 users => this.personajes = users)

      }

  ngOnInit(): void {
  }

}
