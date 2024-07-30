import UserRoutes from "./routes/user";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/layout";
import RequireAuth from "./components/RequireAuth";
import { useEffect } from "react";
import useRefreshToken from "./hooks/useRefreshToken";

function App() {
  const refresh = useRefreshToken();
  useEffect(() => {
    refresh();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {UserRoutes.map((route, idx) => {
          if (!route.isProtected) return <Route key={idx} {...route} />;
          return (
            <Route element={<RequireAuth />}>
              <Route key={idx} {...route} />;
            </Route>
          );
        })}
      </Route>
    </Routes>
  );
}

export default App;
