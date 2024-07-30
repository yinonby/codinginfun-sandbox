import Customer from "../../../persons/Customer";
import GiftCard from "../../../products/Book";
import Payable from "../../Payable";
import { CreditCard, PaymentMethod } from "../../PaymentMethod";
import ExternalPaymentProcessingAdapter from "../../external-adapters/ExternalPaymentProcessingAdapter";
import PaymentOperationsProvider from "../PaymentOperationsProvider";

type PaymentDetails = {
  externalPaymentId: string,
  isCanceled: boolean,
}

export class PaymentManagerError extends Error {}

export default class PaymentManager implements PaymentOperationsProvider {
  private readonly giftCards: GiftCard[] = []
  private paymentDetailsMap: Map<string, PaymentDetails> =
    new Map<string, PaymentDetails>;

  constructor(private externalPaymentProcessingAdapter: ExternalPaymentProcessingAdapter) {}

  // this method sends a charge command to the external payment provider
  public makePayment(customer: Customer, payable: Payable,
    paymentMethod: PaymentMethod): string {
    // for now the system only supports credit-card methods
    if (paymentMethod instanceof CreditCard) {
      const externalPaymentId: string =
        this.externalPaymentProcessingAdapter.chargeCard(
          customer, payable, paymentMethod);
      const paymentId: string = generateUniqueId();
      const paymentDetails: PaymentDetails = {
        externalPaymentId: externalPaymentId,
        isCanceled: false,
      }
      this.paymentDetailsMap.set(paymentId, paymentDetails);
      return paymentId;
    } else {
      throw new PaymentManagerError("Unsupported payment method: " + typeof paymentMethod);
    }
  }

  // this method sends a refund command to the external payment provider
  // if a payment with the given id is not found, or was already canceled,
  // an error is thrown
  public cancelPayment(paymentId: string): void {
    const paymentDetails: PaymentDetails | undefined =
      this.paymentDetailsMap.get(paymentId);
    if (! paymentDetails) {
      throw new PaymentManagerError("Payment not found, paymentId: " + paymentId);
    }
    if (paymentDetails.isCanceled) {
      throw new PaymentManagerError("Payment already canceled, paymentId: " + paymentId);
    }

    // send refund command
    this.externalPaymentProcessingAdapter.refund(
      paymentDetails.externalPaymentId);

    // update payment status
    paymentDetails.isCanceled = true;
    this.paymentDetailsMap.set(paymentId, paymentDetails);
  }

}

function generateUniqueId(): string {
  return "xxxx-xxxx-xxx-xxxx".replace(/[x]/g, function (c) {
    const r = Math.random() * 16 | 0, v = c == "x" ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}