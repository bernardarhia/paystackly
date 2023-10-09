export abstract class BasePlan {
  abstract list(query: any): Promise<any>;
  abstract create(payload: any): Promise<any>;
  abstract fetch(param: any): Promise<any>;
  abstract update(param: any): Promise<any>;
}
