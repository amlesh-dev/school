import { Suspense } from "react";
import routes from "./index";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Suspense>
      <Routes>
        {routes?.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          ></Route>
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
