import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-checkout",
  templateUrl: "checkout.html"
})
export class CheckoutPage {
  basket: string;
  amount: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ngOnInit() {
    this.basket = this.navParams.get("name");
    this.amount = this.navParams.get("price");
  }

  exitStore() {
    this.navCtrl.popToRoot();
  }
}
