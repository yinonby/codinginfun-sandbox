import Utils from "../../../../utils/Utils";
import GiftCard from "../../../products/Book";
import ExternalPaymentProcessingAdapter from "../../external-adapters/ExternalPaymentProcessingAdapter";
import PaymentOperationsProvider from "../PaymentOperationsProvider";

type PaymentDetails = {
  paymentProcessingServiceName: string
  externalPaymentId: string,
  isCanceled: boolean,
}

export class PaymentManagerError extends Error {}

/*
  property primaryExternalPaymentProcessingAdapter:
  the primary payment processing service handling all payment processing

  propery externalPaymentProcessingAdapters:
  list of payment processing services, used to handle payment processing
  operations of previous charges, possibly made using a payment processing
  service that is not the primary, in case the primary has been changed
*/

export default class PaymentManager implements PaymentOperationsProvider {
  private readonly giftCards: GiftCard[] = []
  private paymentDetailsMap: Map<string, PaymentDetails> =
    new Map<string, PaymentDetails>;
  private primaryExternalPaymentProcessingServiceName: string;

  constructor(
    private primaryExternalPaymentProcessingAdapter:
      ExternalPaymentProcessingAdapter,
    private externalPaymentProcessingAdapters:
      ExternalPaymentProcessingAdapter[]) {
    this.primaryExternalPaymentProcessingServiceName =
      primaryExternalPaymentProcessingAdapter.getPaymentProcessingServiceName();
  }

  // ********** TASK **********
  /*
    implement interface method 'PaymentOperationsProvider.makePayment()'
    - the method should be 'public'
    - if 'paymentMethod' is not an instance of 'CreditCard', the method
      should throw an error with message:
      "Unsupported payment method: " + typeof paymentMethod
    - the method should call
      'this.primaryExternalPaymentProcessingAdapter.chargeCard()' with
      the appropriate arguments, and store the result in a variable
      'externalPaymentId' whose type is 'string'
    - the method should call the internal method 'storePaymentDetails()',
      passing the 'externalPaymentId', and storing the result in a
      variable 'paymentId' of type 'string'
    - the method should return the value of 'paymentId'
  */


  // ********** TASK **********
  /*
    implement interface method 'PaymentOperationsProvider.cancelPayment()'
    - the method should be 'public'
    - the method should call the internal method 'findPaymentDetails()' using
      the 'paymentId', and store the result in a variable 'paymentDetails'
      whose type is a union 'PaymentDetails | undefined'
    - if 'paymentDetails' is undefined, the method should throw an error
      with message: "Payment not found, paymentId: " + paymentId
    - if 'paymentDetails.isCanceled' is 'true', the method should throw an
      error with message: "Payment already canceled, paymentId: " + paymentId
    - the method should search for the external payment processing adapter,
      using the internal method 'findExternalPaymentProcessingAdapter()', and
      store the result in a variable 'externalPaymentProcessingAdapter' whose
      type is a union 'ExternalPaymentProcessingAdapter | null'
    - if no external payment processing adapter is found, the method should
      throw an error with message:
      "External payment processing service not found: " + paymentDetails.paymentProcessingServiceName
    - the method should call 'externalPaymentProcessingAdapter.refund()' with
      the external payment id (paymentDetails.externalPaymentId)
    - the method should update the payment status using the internal method
      'updatePaymentStatusToCanceled()'
  */

  // private methods

  private storePaymentDetails(externalPaymentId: string): string {
    const paymentId: string = Utils.generateUniqueId();
    const paymentDetails: PaymentDetails = {
      paymentProcessingServiceName:
        this.primaryExternalPaymentProcessingServiceName,
      externalPaymentId: externalPaymentId,
      isCanceled: false,
    }
    this.paymentDetailsMap.set(paymentId, paymentDetails);

    return paymentId;
  }

  private updatePaymentStatusToCanceled(paymentId: string): void {
    const paymentDetails: PaymentDetails | undefined =
      this.findPaymentDetails(paymentId);
    if (! paymentDetails) {
      throw new PaymentManagerError("Payment not found, paymentId: " + paymentId);
    }
    paymentDetails.isCanceled = true;
    this.paymentDetailsMap.set(paymentId, paymentDetails);
  }

  private findPaymentDetails(paymentId: string): PaymentDetails | undefined {
    return this.paymentDetailsMap.get(paymentId);
  }

  private findExternalPaymentProcessingAdapter(paymentProcessingServiceName: string): ExternalPaymentProcessingAdapter | null {
    for (const externalPaymentProcessingAdapter of this.externalPaymentProcessingAdapters) {
      if (externalPaymentProcessingAdapter.getPaymentProcessingServiceName() === paymentProcessingServiceName) {
        return externalPaymentProcessingAdapter;
      }
    }
    return null;
  }

}
