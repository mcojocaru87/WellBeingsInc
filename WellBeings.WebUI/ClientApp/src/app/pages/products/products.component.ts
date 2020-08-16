import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/core/models/product";
import { ProductService } from "src/app/core/services/product.service";
import { faBars, faTh } from '@fortawesome/free-solid-svg-icons';
import { Pager } from "src/app/core/models/pager";
import { PagerService } from "src/app/core/services/pager.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  products: Product[] = [];
  cachedProducts: Product[] = [];
  faBars = faBars;
  faTh = faTh;
  displayMode: number = 1;
  pagedProducts: Product[] = [];
  pager: Pager = null;
  sortOptions: any[] = [];
  selectedSortByOption: string;
  searchQueryValue: string;
  failedToLoadProducts: boolean;
  errorMessage: string = '';
  loading: boolean;

  constructor(private readonly productService: ProductService, private readonly pagerService: PagerService) {
    this.selectedSortByOption = "name";
  }

  ngOnInit() {
    this.sortOptions = [
      { key: "name", value: "Sort By Name" },
      { key: "price", value: "Sort By Price" }
    ];

    this.getProducts();
  }

  getProducts() {
    this.loading = true;
    this.productService.getProducts().subscribe(
      products => {
        if (products && products.length) {
          this.cachedProducts = products;
          this.products = products;

          this.products.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });

          this.setPage(1);
          this.loading = false;
        }
      },
      (error: HttpErrorResponse) => {
        this.failedToLoadProducts = true;
        this.errorMessage = error.message;
        console.error(error);
        this.loading = false;
      }
    );
  }

  onDisplayModeChange(mode: number): void {
    this.displayMode = mode;
  }

  setPage(page: number): void {
    if (this.pager && (page < 1)) {
      return;
    }

    this.pager = this.pagerService.getPager(this.products.length, page);

    this.pagedProducts = this.products.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  sortBy() {
    if (this.selectedSortByOption) {
      switch (this.selectedSortByOption) {
        case "name":
          this.products.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
          break;
        case "price":
          this.products.sort((a, b) => {
            return a.price - b.price;
          });
          break;
      }

      this.setPage(1);
    }
  }

  searchProducts(value: string) {
    if (!value) {
      this.products = this.cachedProducts;
    } else {
      this.products = this.cachedProducts.filter(p => p.name.toLowerCase().indexOf(value.toLowerCase()) > - 1);
    }

    this.setPage(1);
  }
}
