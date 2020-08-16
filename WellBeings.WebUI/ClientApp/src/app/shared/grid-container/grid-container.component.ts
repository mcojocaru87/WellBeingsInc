import { Component, Input } from "@angular/core";
import { Product } from "src/app/core/models/product";

@Component({
  selector: 'app-grid-container',
  templateUrl: './grid-container.component.html',
})

export class GridContainerComponent {
  @Input() product: Product;
}
