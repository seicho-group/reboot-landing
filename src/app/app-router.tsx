import { Route, Routes } from "react-router";
import { Landing } from "../pages/landing/landing.tsx";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Landing />} />
    </Routes>
  );
};
