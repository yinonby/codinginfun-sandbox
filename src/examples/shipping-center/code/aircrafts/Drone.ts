import DeliveryCapable, { DELIVERY_WAIT_TIME_MS, ShippingPackage, simulateWait } from "../shipping-center/DeliveryCapable";
import DeliveryDispatcher from "../shipping-center/DeliveryDispatcher";
import Aircraft from "./Aircraft";

export default class Drone extends Aircraft implements DeliveryCapable {
  private baseAddress: string = "";
  private shippingPackage: ShippingPackage | null = null;

  constructor(private droneName: string) {
    super();
  }

  // external methods

  public async fly(address: string): Promise<void> {
    console.log("I'm a drone flying to: " + address);
    await simulateWait(DELIVERY_WAIT_TIME_MS); // wait DELIVERY_WAIT_TIME_MS
  }

  public setBaseAddress(baseAddress: string): void {
    this.baseAddress = baseAddress;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public canAddPackage(shippingPackage: ShippingPackage): boolean {
    if (this.shippingPackage === null) {
      return true; // available for delivery
    } else {
      return false; // unavailable for delivery
    }
  }
  
  public addPackage(shippingPackage: ShippingPackage): void {
    if (! this.canAddPackage(shippingPackage)) {
      console.error("Unexpected package!");
      return;
    }

    console.log("Drone " + this.droneName + " added package!");
    this.shippingPackage = shippingPackage;
  }

  public isReadyForDelivery(): boolean {
    if (this.shippingPackage !== null) {
      return true;
    } else {
      return false;
    }
  }

  public async goOutForDelivery(deliveryDispatcher: DeliveryDispatcher):
    Promise<void> {
    if (! this.shippingPackage) {
      console.log("No packages loaded");
      return;
    }
    console.log("Drone " + this.droneName + " out for delivery!");
    this.fly(this.shippingPackage.recipientAddress);
    // fly back to shipping center
    this.fly(this.baseAddress);
    console.log("Drone " + this.droneName + " back from delivery!");
    this.shippingPackage = null; // package delivered - reset package to null
    deliveryDispatcher.notifyReturnToBase(this);
  }
}