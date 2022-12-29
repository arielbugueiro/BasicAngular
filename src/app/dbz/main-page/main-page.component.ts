import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import { concatWith } from 'rxjs';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {

  nuevoPersonaje : Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  constructor () {}
}
