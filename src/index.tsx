
import Box from '@mui/material/Box';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import ExerciseContentPage from "./react/pages/ExerciseContentPage";

const appStyle = {
  fontFamily: "sans-serif",
};

const router = createBrowserRouter([
  {
    path: "/o/codesandbox/:progLang/:courseName/:chapterName/:lessonName/:exerciseName/:taskId",
    element: <ExerciseContentPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <Box style={appStyle}>
    <RouterProvider router={router} />
  </Box>
);

