import { Injectable } from '@angular/core';
import { Link } from '../domain/link';

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  links: Link[] = [
    { name: 'Tienda', url: '/tienda' },
    { name: 'Contacto', url: '/contacto' },
    { name: 'Nosotros', url: '/nosotros' }
  ];
  redes: Link[] = [
    { name: 'Instragram', url: '/' },
    { name: 'Facebook', url: '/' }
  ];
  getLinks(): Link[] {
    return this.links;
  }
  getRedes(): Link[] {
    return this.redes;
  }
  constructor() {
  }
}
