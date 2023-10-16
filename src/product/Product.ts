import { Http } from "../core/Http";
import { BaseQuery } from "../types";
import { formatQueryParams } from "../utils";
import {
  BaseProduct,
  FetchProductResponse,
  ListProductsResponse,
  ProductCreateResponse,
  ProductIdParama,
  ProductPayload,
  ProductUpdateResponse,
} from "./types";

export class Product extends BaseProduct {
  private endpoint = "/product";

  async update(
    param: ProductIdParama,
    payload: ProductPayload
  ): Promise<ProductUpdateResponse> {
    return Http.put<ProductPayload, ProductUpdateResponse>(
      `${this.endpoint}/${param.id}`,
      payload
    );
  }

  async fetch(param: ProductIdParama): Promise<FetchProductResponse> {
    return Http.get<FetchProductResponse>(`${this.endpoint}/${param.id}`);
  }

  async list(query: BaseQuery): Promise<ListProductsResponse> {
    const formattedQuery = formatQueryParams(query);
    return Http.get<ListProductsResponse>(`${this.endpoint}${formattedQuery}`);
  }

  async create(payload: ProductPayload): Promise<ProductCreateResponse> {
    return Http.post<ProductPayload, ProductCreateResponse>(
      `${this.endpoint}`,
      payload
    );
  }
}
