import { Component, OnInit } from "@angular/core";
import { Retailer } from "src/app/core/models/retailer";

@Component({
  selector: 'app-retailers',
  templateUrl: './retailers.component.html'
})

export class RetailersComponent implements OnInit {
  retailers: Retailer[] = [];
  ca_retailers: Retailer[] = [];
  us_retailers: Retailer[] = [];

  constructor() {
    this.retailers = [
      new Retailer("Retailer Store #1", "www.retailerstore1.ca", "Some quick example text to build on the card title and make up the bulk of the card's content.", "CA"),
      new Retailer("Retailer Store #2", "www.retailerstore2.ca", "Some quick example text to build on the card title and make up the bulk of the card's content.", "CA"),
      new Retailer("Retailer Store #3", "www.retailerstore3.ca", "Some quick example text to build on the card title and make up the bulk of the card's content.", "CA"),
      new Retailer("Retailer Store #4", "www.retailerstore4.ca", "Some quick example text to build on the card title and make up the bulk of the card's content.", "CA"),
      new Retailer("Retailer Store #5", "www.retailerstore5.ca", "Some quick example text to build on the card title and make up the bulk of the card's content.", "US"),
      new Retailer("Retailer Store #6", "www.retailerstore6.ca", "Some quick example text to build on the card title and make up the bulk of the card's content.", "US"),
      new Retailer("Retailer Store #7", "www.retailerstore7.ca", "Some quick example text to build on the card title and make up the bulk of the card's content.", "US"),
      new Retailer("Retailer Store #8", "www.retailerstore8.ca", "Some quick example text to build on the card title and make up the bulk of the card's content.", "US"),
    ];
  }

  ngOnInit() {
    this.getCanadianRetailers();
    this.getUSRetailers();
  }

  getCanadianRetailers() {
    this.ca_retailers = this.retailers.filter(r => r.location === 'CA');
  }

  getUSRetailers() {
    this.us_retailers = this.retailers.filter(r => r.location === 'US');
  }
}
