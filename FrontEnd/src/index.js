import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import reduxSlices, { hotelFetch } from "./store/reduxSlices";
import HotelPage from "./pages/HotelPage";
import PlacePage from "./pages/PlacePage";
import UserBooking from "./pages/UserBooking";
import AddHotelsPage from "./pages/admin/AddHotelsPage";
import Admin from "./pages/admin/Admin";
import EditHotels from "./pages/admin/EditHotels";
import UserDetails from "./pages/UserDetails";
import PaymentPage from "./pages/PaymentPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = configureStore({
  reducer: {
    counter: reduxSlices,
  },
});
store.dispatch(hotelFetch());
root.render(
  // <Context.Provider >
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/placePage" element={<PlacePage />} />
          <Route path="/hotelPage" element={<HotelPage />} />
          <Route path="/userbooking" element={<UserBooking />} />
          <Route path="/addhotelspage" element={<AddHotelsPage />} />
          <Route path="/edithotels" element={<EditHotels />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/userDetails" element={<UserDetails />} />
          <Route path="/paymentPage" element={<PaymentPage />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
  // </Context.Provider>
);
