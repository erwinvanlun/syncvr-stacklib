import {APIFibonacciResultCodes} from "./result-codes.enum";

export interface APIFibonacciNumberMeta {
  requestId: number;
  timestamp: string;
  ipAddress: string;
  number: number;
  fibonacci: number;
}

export enum APIFibonacci {
  base = 'fibonacci',
  calc = '',
  history = 'history'
}

export interface APIFibonacciNumberRequestResponse {
  result: APIFibonacciNumberMeta;
  resultCode: APIFibonacciResultCodes
}

export interface APIFibonacciHistoryRequest{
  range: {
    before: number
    after: number;
  };
}

export interface APIFibonacciHistoryResponse {
  history: APIFibonacciNumberMeta[];
  resultCode: APIFibonacciResultCodes
}
