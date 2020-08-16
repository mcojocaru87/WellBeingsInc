import { Component, Input } from "@angular/core";
import { Product } from "src/app/core/models/product";

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
})

export class ListContainerComponent {
  @Input() product: Product;
}
