import Payable from "../Payable";
import { PaymentMethod } from "../PaymentMethod";
import PaymentOperationsProvider from "../PaymentOperationsProvider";
import ExternalPaymentProcessingAdapter from "../adapters/ExternalPaymentProcessingAdapter";

export default class PaymentManager implements PaymentOperationsProvider {
  constructor(private ExternalPaymentProcessingAdapter: ExternalPaymentProcessingAdapter) {}

  // this method sends a charge command to the external payment provider
  public makePayment(payable: Payable, paymentMethod: PaymentMethod): string {
    return this.ExternalPaymentProcessingAdapter.charge(payable, paymentMethod);
  }

  // this method sends a refund command to the external payment provider
  public cancelPayment(paymentId: string): boolean {
    return this.ExternalPaymentProcessingAdapter.refund(paymentId);
  }
}
