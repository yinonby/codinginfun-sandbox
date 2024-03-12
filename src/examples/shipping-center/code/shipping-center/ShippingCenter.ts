import DeliveryCapable, { DELIVERY_CAPABALE_SEARCH_WAIT_TIME_MS, ShippingPackage, simulateWait } from "./DeliveryCapable";
import DeliveryDispatcher from "./DeliveryDispatcher";

export default class ShippingCenter implements DeliveryDispatcher {
  private deliveryCapables: DeliveryCapable[] = [];

  constructor(private baseAddress: string) {}

  public addDeliveryCapable(deliveryCapable: DeliveryCapable): void {
    deliveryCapable.setBaseAddress(this.baseAddress);
    this.deliveryCapables.push(deliveryCapable);
  }

  public async sendPackage(shippingPackage: ShippingPackage): Promise<void> {
    let index: number = -1;

    // find the first available delivery-capable object
    index = this.getFirstAvailableDeliveryCapableIndex(shippingPackage);
    while (index === -1) {
      // wait DELIVERY_CAPABALE_SEARCH_WAIT_TIME_MS before the next search
      await simulateWait(DELIVERY_CAPABALE_SEARCH_WAIT_TIME_MS);
      index = this.getFirstAvailableDeliveryCapableIndex(shippingPackage);
    }

    const availableDeliveryCapabale: DeliveryCapable =
      this.deliveryCapables[index];

    // add the package to the delivery-capable object
    await availableDeliveryCapabale.addPackage(shippingPackage);

    // if the delivery-capable object is ready for delivery, remove it
    // from the list and send it out for delivery
    if (availableDeliveryCapabale.isReadyForDelivery()) {
      this.deliveryCapables.splice(index, 1);
      // when sending a delivery-capable out for delivery, we pass the
      // shipping-center as a delivery-dispatcher parameter, so that
      // we are notified when it is back to base and add it
      // to the list of available delivery-capable objects
      await availableDeliveryCapabale.goOutForDelivery(this);
    }
  }

  // this method is called by the delivery-capable object upon
  // return to base
  public notifyReturnToBase(deliveryCapable: DeliveryCapable): void {
    this.deliveryCapables.push(deliveryCapable);
  }

  // internal methods

  private getFirstAvailableDeliveryCapableIndex(
    shippingPackage: ShippingPackage): number {

    for (let i: number = 0; i < this.deliveryCapables.length; i++) {
      const deliveryCapable = this.deliveryCapables[i];
      if (deliveryCapable.canAddPackage(shippingPackage)) {
        return i;
      }
    }
    return -1;
  }    
}
