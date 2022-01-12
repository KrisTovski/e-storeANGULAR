import { Component, OnInit } from '@angular/core';
import {ProductCategory} from "../../common/product-category";
import {ProductService} from "../../services/product.service";
import {ProductCategoryService} from "../../services/product-category.service";

@Component({
  selector: 'app-category-list-grid',
  templateUrl: './category-list-grid.component.html',
  styleUrls: ['./category-list-grid.component.css']
})
export class CategoryListGridComponent implements OnInit {

  categories: ProductCategory[] = [];

  constructor(private productCategoryService: ProductCategoryService) { }

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts() {
    this.productCategoryService.getProductCategoryList().subscribe(
      value => {
        this.categories = value;
      }
    )
  }

}
