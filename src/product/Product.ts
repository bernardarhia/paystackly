import { Http } from "../core/Http";
import {
  BaseProduct,
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
}
