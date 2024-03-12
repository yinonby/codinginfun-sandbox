
// implementation of a method to wait for a given amount of milliseconds.

import DeliveryDispatcher from "./DeliveryDispatcher";

// if you're unfamiliar with async/await, simply ignore this.
export const simulateWait = (ms: number) =>
  new Promise((r) => setTimeout(r, ms));

// constants
export const DELIVERY_WAIT_TIME_MS: number = 2000;
export const DELIVERY_CAPABALE_SEARCH_WAIT_TIME_MS = 5000;

export type ShippingPackage = {
  recipientAddress: string;
  weightKg: number;
}

export default interface DeliveryCapable {
  setBaseAddress(baseAddress: string): void;
  canAddPackage(shippingPackage: ShippingPackage): boolean;
  addPackage(shippingPackage: ShippingPackage): void;
  isReadyForDelivery(): boolean;
  goOutForDelivery(deliveryDispatcher: DeliveryDispatcher): void;
}