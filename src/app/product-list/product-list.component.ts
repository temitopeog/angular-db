import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { Subscription, delay } from 'rxjs';
import { SplitioService } from '../app.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent  implements OnInit, OnDestroy, AfterViewInit  {
  products = products;
  uid: string = '';
  private sub: Subscription = new Subscription;
  updateSubscription: Subscription = new Subscription;
  callSplitSubscription: Subscription = new Subscription;
  featureFlag = ""; // ADD THE NAME OF YOUR FEATURE FLAG
  response: any;

  constructor(private route: ActivatedRoute, private splitioService: SplitioService, private cartService: CartService) {
    this.onUpdate();
   }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.uid = (+params['id']).toString(); // converts 'id' to a string
      this.splitioService.initClient(this.uid);
   });
  }

  ngAfterViewInit(): void {
    this.callSplit();
  }

  callSplit(){
    this.callSplitSubscription = this.splitioService.sdkReady().pipe(delay(200)).subscribe({
      next: () => { this.response = this.splitioService.getTreatmentWithConfig(this.uid, this.featureFlag)
    },
      error: (errr) => { console.log(errr)}
    })
  }

  onUpdate(){
    this.updateSubscription = this.splitioService.sdkUpdate().subscribe({
      next: () => { this.response = this.splitioService.getTreatmentWithConfig(this.uid, this.featureFlag)
    },
      error: (errr) => { console.log(errr)}
    })
  }

  share(productName: string) {
    window.alert('You shared: ' + productName);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
    this.updateSubscription.unsubscribe();
    this.callSplitSubscription.unsubscribe();
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/