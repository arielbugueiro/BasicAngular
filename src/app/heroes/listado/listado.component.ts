import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Iroman', 'Goku', 'Thor', 'Hulk']
  heroeBorrado : string[] = [];

  borrarHeroe() : void{
    this.heroeBorrado = this.heroes.splice(0,1);
  }
}
