import { BasePaystackResponse, BaseResponse } from "../types";

export abstract class BasePlan {
  abstract list(query: any): Promise<any>;
  abstract create(payload: any): Promise<any>;
  abstract fetch(param: PlanIdParam): Promise<FetchPlanResponse>;
  abstract update(
    param: PlanIdParam,
    payload: PlanPayload
  ): Promise<PlanUpdateResponse>;
}

export interface PlanIdParam {
  /* Plan's ID or code */
  id_or_code: string;
}

export interface PlanPayload {
  /* Name of plan */
  name: string;
  /* Amount should be in the subunit of the supported currency */
  amount: number;
  /*Interval in words. Valid intervals are hourly, daily, weekly, monthly,quarterly, biannually (every 6 months), annually */
  interval:
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "quarterly"
    | "biannually"
    | "annually";

  /* A description for this plan */
  description?: string;
  /* Set to false if you don't want invoices to be sent to your customers */
  send_invoices?: boolean;
  /* Set to false if you don't want text messages to be sent to your customers */
  send_sms?: string;
  /* Currency in which amount is set */
  currency?: string;
  /* Number of invoices to raise during subscription to this plan. Can be overridden by specifying an invoice_limit while subscribing. */
  invoice_limit?: number;
}

export type PlanUpdateResponse = BasePaystackResponse;

export type IPlan = {
  subscriptions: unknown[];
  integration: number;
  domain: string;
  name: string;
  plan_code: string;
  description: null | string;
  amount: number;
  interval: string;
  send_invoices: boolean;
  send_sms: boolean;
  hosted_page: boolean;
  hosted_page_url: null | string;
  hosted_page_summary: null | string;
  currency: string;
  id: number;
  createdAt: string;
  updatedAt: string;
};

export type FetchPlanResponse = BaseResponse<IPlan>;
