import { Component, Injectable, OnInit } from "@angular/core";

class ProductModel {
  sku!: string;
  name!: string;
  price!: number;
}

interface CartItem {
  product: ProductModel;
  quantity: number;
}

@Injectable()
export class CartExtService {
  
  calculateTotal(): number {
    // call external datasource
    return Math.random() * 100;
  }
  addToCart(): void {
    // logic here
  }
}

@Injectable({
  providedIn: 'root',
  useClass: CartExtService
})
export class CartService {
  selectedProducts: CartItem[] = [];
  calculateTotal(): number {
    return this.selectedProducts.reduce((total, item) => (item.product.price * item.quantity) + total, 0);
  }
  addToCart(): void {
    // logic here
  }
}
@Component({
  selector: 'di-index',
  template: '<label>Open console log for more Dependency injection </label>'
})
export class Product implements OnInit{
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    console.log(this.cartService.calculateTotal())
  }
  
}


