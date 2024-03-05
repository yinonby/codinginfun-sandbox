
export default interface Payable {
  getRate(): number;
  getCurrencyCode(): string;
}
