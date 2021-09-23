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

export interface APIFibonacciHistoryRequest {
  head: number;
  tail: number;
  maxTailingRows: number;
}

export interface APIFibonacciHistoryResponse {
  history: APIFibonacciNumberMeta[];
  availableTail: number;
  resultCode: APIFibonacciResultCodes
}
