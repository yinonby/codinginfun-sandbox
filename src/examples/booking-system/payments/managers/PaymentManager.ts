import Person from "../../persons/person";
import GiftCard from "../../products/Book";
import Payable from "../Payable";
import { PaymentMethod } from "../PaymentMethod";
import PaymentOperationsProvider from "../PaymentOperationsProvider";
import ExternalPaymentProcessingAdapter from "../adapters/ExternalPaymentProcessingAdapter";

export default class PaymentManager implements PaymentOperationsProvider {
  private readonly giftCards: GiftCard[] = []

  constructor(private ExternalPaymentProcessingAdapter: ExternalPaymentProcessingAdapter) {}

  // this method sends a charge command to the external payment provider
  public makePayment(person: Person, payable: Payable,
    paymentMethod: PaymentMethod): string {
    if (paymentMethod.paymentMethodName === "credit-card") {
      return this.ExternalPaymentProcessingAdapter.charge(person, payable,
        paymentMethod);
    } else {
      return "";
    }
  }

  // this method sends a refund command to the external payment provider
  public cancelPayment(paymentId: string): boolean {
    return this.ExternalPaymentProcessingAdapter.refund(paymentId);
  }

}
