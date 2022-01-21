import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const ScreenHome = lazy(() => import("../screens/Home/screensHome"));
const ScreenCart = lazy(() => import("../screens/Cart/screensCart"));

const SrcRoutes: React.FC = () => {
  return (
    <Suspense fallback={<div>...</div>}>
      <Routes>
        <Route path="/" element={<ScreenHome />} />
        <Route path="/cart" element={<ScreenCart />} />
      </Routes>
    </Suspense>
  );
};

export default SrcRoutes;
