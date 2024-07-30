import Person from "../../persons/person";
import Payable from "../Payable";
import { CreditCard } from "../PaymentMethod";

export default interface ExternalPaymentProcessingAdapter {
  chargeCard(person: Person, payable: Payable,
    creditCard: CreditCard): string;
  refund(externalPaymentId: string): void;
}
