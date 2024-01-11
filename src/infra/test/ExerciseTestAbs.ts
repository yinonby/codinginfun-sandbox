
export default abstract class ExerciseTestAbs {
  abstract getExpectedSolutionText(): string;

  getExpectedSolutionRowNum(): number {
    return this.getExpectedSolutionText().split(/\n/).length;
  }
}