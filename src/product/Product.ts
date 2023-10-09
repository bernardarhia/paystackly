import { Http } from "../core/Http";
import {
  BaseProduct,
  FetchProductResponse,
  ProductIdParama,
  ProductUpdatePayload,
  ProductUpdateResponse,
} from "./types";

export class Product extends BaseProduct {
  private endpoint = "/product";

  async update(
    param: ProductIdParama,
    payload: ProductUpdatePayload
  ): Promise<ProductUpdateResponse> {
    return Http.put<ProductUpdatePayload, ProductUpdateResponse>(
      `${this.endpoint}/${param.id}`,
      payload
    );
  }

  async fetch(param: ProductIdParama): Promise<FetchProductResponse> {
    return Http.get<FetchProductResponse>(`${this.endpoint}/${param.id}`);
  }
}
