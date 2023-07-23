import { getRequestData } from "../constants";
import { BulkChargeListsQuery, BulkChargeListsReponse, BulkChargesPayload, BulkChargesResponse } from "../types";
import { sendRequest } from "../utils";
import querystring from "querystring";

export class BulkCharges {
    async initilize(data: BulkChargesPayload[]): Promise<BulkChargesResponse>{
        return await sendRequest<BulkChargesResponse>(
            getRequestData("POST", null, data).createBulkCharge,
          );
    }
    async list(query: BulkChargeListsQuery): Promise<BulkChargeListsReponse>{
        let formattedQueryString: string;

        if (query && Object.keys(query).length) {
          formattedQueryString = `?${querystring.stringify(query as any)}`;
        }
        return await sendRequest<BulkChargeListsReponse>(
            getRequestData("GET", formattedQueryString).listBulkCharges,
          );  
    }
}
