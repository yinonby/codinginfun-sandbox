import DeliveryCapable from "./DeliveryCapable";

export default interface DeliveryDispatcher {
  notifyReturnToBase(deliveryCapable: DeliveryCapable): void;
}