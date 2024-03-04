import Payable from "../Payable";
import { PaymentMethod } from "../PaymentMethod";
import PaymentProcessingProvider from "../PaymentProcessingProvider";
import ExternalPaymentAdapter from "../adapters/ExternalPaymentAdapter";

export default class PaymentManager implements PaymentProcessingProvider {
  constructor(private externalPaymentAdapter: ExternalPaymentAdapter) {}

  // this method sends a charge command to the external payment provider
  public makePayment(payable: Payable, paymentMethod: PaymentMethod): string {
    return this.externalPaymentAdapter.charge(payable, paymentMethod);
  }

  // this method sends a refund command to the external payment provider
  public cancelPayment(paymentId: string): boolean {
    return this.externalPaymentAdapter.refund(paymentId);
  }
}
