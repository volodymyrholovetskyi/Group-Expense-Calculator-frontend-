import {Currency} from "./currency";

export interface Event {
  id: number;
  name: string;
  dateTime: string;
  currency: Currency;

}
