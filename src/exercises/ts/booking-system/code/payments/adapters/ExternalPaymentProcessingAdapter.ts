import Payable from "../Payable";
import { PaymentMethod } from "../PaymentMethod";

export default interface ExternalPaymentProcessingAdapter {
  charge(payable: Payable, paymentMethod: PaymentMethod): string;
  refund(paymentId: string): boolean;
}
