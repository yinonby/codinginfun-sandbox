
import Testable from '#infra/test/Testable';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ExerciseContentPage() {
  const params = useParams();
  const [result, setResult] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const progLang: string = params.progLang || "";
  const courseName: string = params.courseName || "";
  const chapterName: string = params.chapterName || "";
  const lessonName: string = params.lessonName || "";
  const exerciseName: string = params.exerciseName || "";
  const sandboxIdStr: string = params.sandboxId || "";

  const handleClick = () => {
    import("../../exercises/" + progLang + "/" + courseName + "/" +
      chapterName + "/" + lessonName + "/" + exerciseName + "/" + 
      sandboxIdStr + "/ExerciseTest")
      .then(({ default: testClass }) => {
        runTests(testClass);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const runTests = (testClass: any) => {
    let test: Testable = new testClass();
    try {
      setErrMessage("");
      test.run();
      setResult(true);
    } catch (err) {
      setResult(false);
      if (err instanceof Error) {
        setErrMessage(err.message);
      }
    }
  }

  return (
    <Box m={2}>
      <Box m={2}>
        <Button variant="contained" onClick={handleClick}>
          Check my solution
        </Button>
      </Box>
      <Box m={2}>
        {! result && <Box sx={{color: "red"}}>{errMessage}</Box>}
        {result && <Box sx={{color: "green"}}>Success!</Box>}
      </Box>
    </Box>
  );
}
