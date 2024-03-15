import Person from "../../persons/person";
import Payable from "../Payable";
import { PaymentMethod } from "../PaymentMethod";

export default interface ExternalPaymentProcessingAdapter {
  charge(person: Person, payable: Payable,
    paymentMethod: PaymentMethod): string;
  refund(paymentId: string): boolean;
}
