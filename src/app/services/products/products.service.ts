import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Categories } from '../data/categories';
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
  //============[Get All Categories]===============
  GetAllCategories() {
    return from(Categories);
  }
}
