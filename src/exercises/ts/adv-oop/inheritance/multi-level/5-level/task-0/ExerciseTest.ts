
import Testable from "../../../../../../../infra/test/Testable";
import { Tester } from "./Tester";

export default class ExerciseTest implements Testable {

  run(): void {
    const tester: Tester = new Tester();

    tester.run();
  }

}

