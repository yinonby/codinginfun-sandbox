import Customer from "../persons/Customer";
import Payable from "./Payable";
import { PaymentMethod } from "./PaymentMethod";

export default interface PaymentOperationsProvider {
  makePayment(customer: Customer, payable: Payable,
    paymentMethod: PaymentMethod): string;
  cancelPayment(paymentId: string): void;
}
