import ExerciseTestAbs from "./ExerciseTestAbs";

export default abstract class RunnableCodingExerciseTestAbs
  extends ExerciseTestAbs {
  abstract verify(): void;
  abstract run(): void;
}