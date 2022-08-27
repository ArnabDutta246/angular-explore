import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Products } from '../data/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  //============[Get All Products]===============
  GetAllProducts() {
    return from(Products);
  }
}
