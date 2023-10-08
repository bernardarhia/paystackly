export abstract class BaseDedicatedVirtualAccount {
  abstract create(payload: any): Promise<any>;
  abstract assign(payload: any): Promise<any>;
  abstract list(payload: any): Promise<any>;
  abstract fetch(params: any): Promise<any>;
  abstract queryAccount(params: any): Promise<any>;
  abstract deactivate(params: any): Promise<any>;
  abstract splitTransaction(payload: any): Promise<any>;
  abstract removeSplitTransaction(payload: any): Promise<any>;
  abstract fetchBankProviders(): Promise<any>;
}
