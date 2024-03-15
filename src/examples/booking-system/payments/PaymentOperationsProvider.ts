import Person from "../persons/person";
import Payable from "./Payable";
import { PaymentMethod } from "./PaymentMethod";

export default interface PaymentOperationsProvider {
  makePayment(person: Person, payable: Payable,
    paymentMethod: PaymentMethod): string;
  cancelPayment(paymentId: string): boolean;
}
