import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
class HttpClient {
  private axiosInstance: AxiosInstance;
  readonly PAYSTACK_ENDPOINT = "https://api.paystack.co";

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: this.PAYSTACK_ENDPOINT,
    });
  }
  public setBaseURL(baseURL: string): void {
    this.axiosInstance.defaults.baseURL = baseURL;
  }

  public setAuthorization(token: string) {
    this.axiosInstance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${token}`;
  }
  public async get<Response>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<Response> {
    try {      
      const response: AxiosResponse<Response> = await this.axiosInstance.get(
        url,
        config
      );
      return response.data;
    } catch (error: any) {
        return this.processErrorResponse(error);
    }
  }

  private processErrorResponse(error: any) {
    if(!error) return null;
    if(error && error.response && error.response?.data) {
        return error.response.data

    }
    throw new Error("There was an error processing your request")
  }

  public async post<RequestBody, Response>(
    url: string,
    data?: RequestBody,
    config?: AxiosRequestConfig
  ): Promise<Response> {
    try {
      const response: AxiosResponse<Response> = await this.axiosInstance.post(
        url,
        data,
        config
      );
      return response.data;
    } catch (error: any) {
     return this.processErrorResponse(error);
    }
  }

  public async put<RequestBody, Response>(
    url: string,
    data: RequestBody,
    config?: AxiosRequestConfig
  ): Promise<Response> {
    try {
      const response: AxiosResponse<Response> = await this.axiosInstance.put(
        url,
        data,
        config
      );
      return response.data;
    } catch (error: any) {
        return this.processErrorResponse(error);
    }
  }

  public async delete<RequestBody, Response>(
    url: string,
    data?: RequestBody
  ): Promise<Response> {
    try {
      const response: AxiosResponse<Response> = await this.axiosInstance.delete(
        url,
        {
          data,
        }
      );
      return response.data;
    } catch (error: any) {
        return this.processErrorResponse(error);
    }
  }
}

export const Http = new HttpClient();
