import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ProductCategory} from "../common/product-category";

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  private baseUrl = 'http://localhost:8080/api/v1/categories';

  constructor(private httpClient: HttpClient) { }

  getProductCategoryList(): Observable<ProductCategory[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response.content)
    );
  }

}

interface GetResponse{
  content: ProductCategory[];
}
