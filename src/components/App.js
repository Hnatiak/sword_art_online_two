// // import './App.css';
// import Menu from './Menu/Menu';

// function App() {
//   return (
//     <div>
//       <Menu />
//     </div>
//   );
// }

// export default App;

import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Menu = lazy(() => import("./Menu/Menu"));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/"
          element={<Menu />}
        />
      </Routes>
    </Suspense>
  );
};
