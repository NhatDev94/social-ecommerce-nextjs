import { Customer } from "./CustomerType";

export type Product = {
  id: number;
  customer: Customer;
  created_at: string;
  description: string;
  total_like: number;
  total_comment: number;
  total_share: number;
  image_url: string;
};
