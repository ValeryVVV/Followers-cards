import { CardList } from "./CardList/CardList";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import Home from "./HomePage/HomePage";

export const App = () => {
  return (
    <>
            <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
                <Route path="/tweets" element={<CardList />} />
            </Route>
        </Routes>
    </>
  );
};
