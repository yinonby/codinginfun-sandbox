import DeliveryCapable, { DELIVERY_WAIT_TIME_MS, ShippingPackage, simulateWait } from "../shipping-center/DeliveryCapable";
import DeliveryDispatcher from "../shipping-center/DeliveryDispatcher";
import Vehicle from "./Vehicle";

export default class ShippingTruck extends Vehicle implements DeliveryCapable {
  private baseAddress: string = "";
  private shippingPackages: ShippingPackage[] = [];

  constructor(private truckName: string,
    private minWeightForDeliveryKg: number,
    private maxWeightKg: number) {

    super();
  }

  // external methods

  public async drive(address: string): Promise<void> {
    console.log("I'm a shipping truck driving to: " + address);
    await simulateWait(DELIVERY_WAIT_TIME_MS); // wait DELIVERY_WAIT_TIME_MS
  }

  public setBaseAddress(baseAddress: string): void {
    this.baseAddress = baseAddress;
  }

  public canAddPackage(shippingPackage: ShippingPackage): boolean {
    const currentWeightKg: number = this.getCurrentWeightKg();
    const expectedWeightKg = currentWeightKg + shippingPackage.weightKg;

    if (expectedWeightKg > this.maxWeightKg) {
      return false; // unavailable for delivery
    } else {
      return true; // available for delivery
    }
  }
  
  public addPackage(shippingPackage: ShippingPackage): void {
    if (! this.canAddPackage(shippingPackage)) {
      console.error("Unexpected package!");
      return;
    }

    console.log("Truck " + this.truckName + " added package!");
    this.shippingPackages.push(shippingPackage);
  }

  public isReadyForDelivery(): boolean {
    const currentWeightKg: number = this.getCurrentWeightKg();

    if (currentWeightKg >= this.minWeightForDeliveryKg) {
      return true;
    } else {
      return false;
    }
  }

  public async goOutForDelivery(deliveryDispatcher: DeliveryDispatcher):
    Promise<void> {
    console.log("Shipping truck " + this.truckName + " out for delivery!");
    for (const shippingPackage of this.shippingPackages) {
      this.drive(shippingPackage.recipientAddress);
    }
    // drive back to shipping center
    this.drive(this.baseAddress);
    console.log("Shipping truck " + this.truckName + " back from delivery!");
    this.shippingPackages = []; // all packages delivered - reset packages array
    deliveryDispatcher.notifyReturnToBase(this);
  }
    

  // internal methods

  private getCurrentWeightKg(): number {
    let currentWeightKg = 0;

    for (const shippingPackage of this.shippingPackages) {
      currentWeightKg += shippingPackage.weightKg;
    }
    return currentWeightKg;
  }
}