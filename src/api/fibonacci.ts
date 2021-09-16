import {APIFibonacciResultCodes} from "./result-codes.enum";

export interface APIFibonacciNumberMeta {
  requestId: number;
  timestamp: string;
  ipAddress: string;
  number: number;
  fibonacci: number;
}

export interface APIFibonacciNumberRequestResponse {
  result: APIFibonacciNumberMeta;
  resultCode: APIFibonacciResultCodes
}

export interface APIFibonacciHistoryRequest {
  before: number;
  after: number;
}

export interface APIFibonacciHistoryResponse {
  history: APIFibonacciNumberMeta[];
  resultCode: APIFibonacciResultCodes
}
