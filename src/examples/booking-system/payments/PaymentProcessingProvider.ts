import Payable from "./Payable";
import { PaymentMethod } from "./PaymentMethod";

export default interface PaymentProcessingProvider {
  makePayment(payable: Payable, paymentMethod: PaymentMethod): string;
  cancelPayment(paymentId: string): boolean;
}
