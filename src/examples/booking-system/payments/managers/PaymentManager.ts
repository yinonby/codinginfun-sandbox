import Customer from "../../persons/Customer";
import GiftCard from "../../products/Book";
import Payable from "../Payable";
import { CreditCard, PaymentMethod } from "../PaymentMethod";
import PaymentOperationsProvider from "../PaymentOperationsProvider";
import ExternalPaymentProcessingAdapter from "../adapters/ExternalPaymentProcessingAdapter";

type PaymentDetails = {
  stripePaymentId: string,
  isCanceled: boolean,
}

export default class PaymentManager implements PaymentOperationsProvider {
  private readonly giftCards: GiftCard[] = []
  private paymentDetailsMap: Map<string, PaymentDetails> =
    new Map<string, PaymentDetails>;

  constructor(private ExternalPaymentProcessingAdapter: ExternalPaymentProcessingAdapter) {}

  // this method sends a charge command to the external payment provider
  public makePayment(customer: Customer, payable: Payable,
    paymentMethod: PaymentMethod): string {
    // for now the system only supports credit-card methods
    if (paymentMethod instanceof CreditCard) {
      const stripePaymentId: string =
        this.ExternalPaymentProcessingAdapter.chargeCard(
          customer, payable, paymentMethod);
      const paymentId: string = generateUniqueId();
      const paymentDetails: PaymentDetails = {
        stripePaymentId: stripePaymentId,
        isCanceled: false,
      }
      this.paymentDetailsMap.set(paymentId, paymentDetails);
      return paymentId;
    } else {
      throw new Error("Unsupported payment method: " + typeof paymentMethod);
    }
  }

  // this method sends a refund command to the external payment provider
  // if a payment with the given id is not found, or was already canceled,
  // an error is thrown
  public cancelPayment(paymentId: string): void {
    const paymentDetails: PaymentDetails | undefined =
      this.paymentDetailsMap.get(paymentId);
    if (! paymentDetails) {
      throw new Error("Payment not found, paymentId: " + paymentId);
    }
    if (paymentDetails.isCanceled) {
      throw new Error("Payment already canceled, paymentId: " + paymentId);
    }

    // send refund command
    this.ExternalPaymentProcessingAdapter.refund(
      paymentDetails.stripePaymentId);

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