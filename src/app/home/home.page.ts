import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cars: any;
  filtro: string = '';

  constructor(private httpClient: HttpClient) {
    this.cars = this.httpClient.get('https://raw.githubusercontent.com/pmacsal2707/DatosJSON/refs/heads/master/datos.json');
  }

}