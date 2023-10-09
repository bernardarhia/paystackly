export abstract class BaseProduct {
  abstract create(payload: any): Promise<any>;
  abstract list(query: any): Promise<any>;
  abstract fetch(param: any): Promise<any>;
  abstract update(param: any, payload: any): Promise<any>;
}
