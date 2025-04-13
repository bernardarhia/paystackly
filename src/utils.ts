export function formatQueryParams(params?: Record<string, any>): string {
  let formattedQueryString: string = "";
  const query = new URLSearchParams(params as any);
  if (params && Object.keys(params).length) {
    formattedQueryString = `?${query}`; 
  }
  return formattedQueryString;
}
export function transformToCamelCase(input: string) {
  return input.replace(/^[A-Z]/, (match) => match.toLowerCase());
}
export const roundAmount = (amount: number): number => {
  return Number((amount * 100).toFixed(0));
}
