import { PaymentMethod } from "../../payments/PaymentMethod";
import Payable from "../Payable";

export default interface ExternalPaymentAdapter {
  charge(payable: Payable, paymentMethod: PaymentMethod): string;
  refund(paymentId: string): boolean;
}
