import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  
  // @Input() personaje : Personaje [] = []

    get personajes(){
      return this.dbzService.personajeGet;
    }

    constructor ( private dbzService : DbzService){}
}
