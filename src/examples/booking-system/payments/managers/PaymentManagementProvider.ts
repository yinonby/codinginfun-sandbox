import Payable from "../Payable";
import { PaymentMethod } from "../PaymentMethod";

export default interface PaymentManagementProvider {
  makePayment(payable: Payable, paymentMethod: PaymentMethod): string;
  cancelPayment(paymentId: string): boolean;
}
