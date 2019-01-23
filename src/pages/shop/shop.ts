import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { CheckoutPage } from "../checkout/checkout";

@IonicPage()
@Component({
  selector: "page-shop",
  templateUrl: "shop.html"
})
export class ShopPage {
  constructor(public navCtrl: NavController) {}

  toCheckout(data: { name: string; price: number }) {
    this.navCtrl.push(CheckoutPage, data);
  }

  leaveStore() {
    this.navCtrl.pop();
  }
}
