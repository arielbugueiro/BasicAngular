import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Injectable()
export class DbzService{

    private _personajePadre: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        }
      ];

      get personajeGet() : Personaje[] {
        return [...this._personajePadre]
      }

      agregarPersonaje( argument: Personaje){
        this._personajePadre.push(argument)
      }
}