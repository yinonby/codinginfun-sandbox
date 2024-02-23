import Payable from "../Payable";
import { PaymentMethod } from "../PaymentMethod";
import ExternalPaymentAdapter from "../adapters/ExternalPaymentAdapter";
import PaymentManagementProvider from "./PaymentManagementProvider";

export default class PaymentManager implements PaymentManagementProvider {
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
