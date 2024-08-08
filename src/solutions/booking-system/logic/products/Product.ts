import Payable from "../payments/Payable";

export default abstract class Product implements Payable {
  public abstract getRate(): number;
  public abstract getCurrencyCode(): string;
}
