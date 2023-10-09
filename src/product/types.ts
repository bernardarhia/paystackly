import { BaseResponse } from "../types";

export abstract class BaseProduct {
  abstract create(payload: any): Promise<any>;
  abstract list(query: any): Promise<any>;
  abstract fetch(param: any): Promise<any>;
  abstract update(
    param: ProductIdParama,
    payload: ProductUpdatePayload
  ): Promise<ProductUpdateResponse>;
}

export interface ProductUpdatePayload {
  /* Name of product */
  name: string;
  /* A description for this product */
  description: string;
  /* Price should be in the subunit of the supported currency */
  price: number;
  /* Currency in which price is set */
  currency: string;

  /*Set to true if the product has unlimited stock. Leave as false if the product has limited stock*/
  unlimited?: boolean;
  /* Number of products in stock. Use if unlimited is false*/
  quantity?: number;
}

export interface ProductIdParama {
  /* Product ID */
  id: string;
}

export type ProductUpdateResponse = BaseResponse<{
  digital_assets: unknown[];
  integration: number;
  name: string;
  description: string;
  product_code: string;
  price: number;
  currency: string;
  quantity: number;
  quantity_sold: null | number;
  type: string;
  files: null | unknown[];
  file_path: null | string;
  is_shippable: boolean;
  shipping_fields: {
    delivery_note: string;
  };
  unlimited: boolean;
  domain: string;
  active: boolean;
  features: null | unknown | unknown[];
  in_stock: boolean;
  metadata: Object;
  slug: string;
  success_message: string;
  redirect_url: string;
  split_code: string;
  notification_emails: null | string[];
  minimum_orderable: number;
  maximum_orderable: null | number;
  low_stock_alert: boolean;
  stock_threshold: null | number;
  expires_in: null | string;
  id: number;
  createdAt: string;
  updatedAt: string;
}>;
