import Drone from "./code/aircrafts/Drone";
import { ShippingPackage } from "./code/shipping-center/DeliveryCapable";
import ShippingCenter from "./code/shipping-center/ShippingCenter";
import ShippingTruck from "./code/vehicles/ShippingTruck";

async function run(): Promise<void> {
  // create a shipping center
  const shippingCenterAddress: string = "101 5th Ave., NYC";
  const shippingCenter: ShippingCenter =
    new ShippingCenter(shippingCenterAddress);

  // create a shipping truck
  const shippingTruck1: ShippingTruck = new ShippingTruck("Truck-1",
    3000, 3100);
  // add truck to shipping center
  shippingCenter.addDeliveryCapable(shippingTruck1);

  // create a shipping truck
  const shippingTruck2: ShippingTruck = new ShippingTruck("Truck-2",
    3000, 3100);
  // add truck to shipping center
  shippingCenter.addDeliveryCapable(shippingTruck2);

  // create a drone
  const drone1: Drone = new Drone("Drone-1");
  // add drone to shipping center
  shippingCenter.addDeliveryCapable(drone1);

  // create a drone
  const drone2: Drone = new Drone("Dron-2");
  // add drone to shipping center
  shippingCenter.addDeliveryCapable(drone2);

  // send a package
  let shippingPackage: ShippingPackage = {
    recipientAddress: "1 5th Ave., NYC",
    weightKg: 2,
  };
  await shippingCenter.sendPackage(shippingPackage);

  // send a package
  shippingPackage = {
    recipientAddress: "2 5th Ave., NYC",
    weightKg: 3000,
  };
  await shippingCenter.sendPackage(shippingPackage);

  // send a package
  shippingPackage = {
    recipientAddress: "3 5th Ave., NYC",
    weightKg: 3000,
  };
  await shippingCenter.sendPackage(shippingPackage);

  // send a package
  shippingPackage = {
    recipientAddress: "4 5th Ave., NYC",
    weightKg: 100,
  };
  await shippingCenter.sendPackage(shippingPackage);
}

run();