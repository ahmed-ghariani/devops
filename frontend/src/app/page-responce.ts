import { Question } from "./question";

export interface PageResponce {
  totalElements: number;
  totalPages: number;
  size: number;
  content: Array<Question>;
  number: number;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}
