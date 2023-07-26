import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "./Api";

const initialState = {
  hotels: [
    // {
    //   id: 0,
    //   title: "Fairfield by Marriott Coimbatore",
    //   place: "Coimbatore",
    //   type: "Superior Queen Room",
    //   price: "6,399",
    //   quantity: "2",
    //   timing: "night",
    //   address:
    //     "469/2B Airport Road, 650 meters from the Airport, 641014 Coimbatore, India",
    //   description:
    //     "Located 650 meters from Coimbatore International Airport, Fairfield by Marriott Coimbatore is the closest to the airport and offers rooms with free WiFi. The property is 2.3 km from Codisia Trade Fair Centre and 3.1 km from Tidel Park. With a 24 hour fitness centre on site, rooms are fitted with air-conditioning, a seating area, a 40-inch LED TV and tea/coffee making facilities, wardrobe and a mini fridge. Modern bathrooms include shower facilities, health faucet, iron and ironing board, electronic safe. Guests can enjoy the on-site multi-cuisine restaurant, Kovai Kitchen, the restaurant serves international and authentic regional delights. It has option of Buffet, a-la-carte. Room service can be requested for in-room dining comfort round the clock. Drinks and music can be enjoyed at Resto Bar. The hotel offers on-site 24 hours Food & Beverage Pantry – “The Market “ Staff at the 24-hour front desk can provide tips on the area. Mardumalai Temple is 22 km from the property while Mundhi Vinayagar Temple is 8.3 km from the property. The Gedee Car Museum is 7.9 km away. The ISKON temple 2.3 km and Isha Yoga Center is 39 km.  Fun Republic Mall is 3.2 km from Fairfield by Marriott Coimbatore, while KG Hospital is 8 km away. Couples particularly like the location — they rated it 8.5 for a two-person trip.",
    //   reviews: "183 reviews",
    //   feedback: "Good",
    //   rating: "8.4",
    // },
    // {
    //   id: 1,
    //   title: "Radisson Blu Coimbatore",
    //   place: "Coimbatore",
    //   type: "Superior Room",
    //   price: "6,218",
    //   quantity: "2",
    //   timing: "night",
    //   address: "AVINASHI ROAD PEELAMEDU 164-165, 641001 Coimbatore, India ",
    //   description:
    //     "Set 5 km from Codissia Trade Fair Complex in Coimbatore, Radisson Blu Coimbatore offers rooms and suites to both business and leisure travellers. Guests can also make use of the on-site fitness center and spa, and a rooftop swimming pool.The property offers free high-speed, wireless Internet access. Rooms come with a private bathroom. For your comfort, you will find bathrobes and free toiletries. A flat-screen TV is offered.Culinary options include our all-day dining restaurant, which offers a grand buffet breakfast, and à la carte dishes featuring cuisines from across the globe.Guests can indulge in the Great Kabab Factory, serving delectable kababs, biryanis and mouth-watering desserts from across the country. A sweet treat at the Cake Shop & Tea Lounge serves for a night cap as well.Fun Republic Mall is 2.1 km from Radisson Blu Coimbatore, while KG Hospital is 3.2 km away.The central railway station is 4 km from the property. Coimbatore International Airport is 6 km from the property.Couples particularly like the location — they rated it 9.5 for a two-person trip.",
    //   reviews: "517 reviews",
    //   feedback: "Very Good",
    //   rating: "8.9",
    // },
    // {
    //   id: 2,
    //   title:
    //     "Welcomhotel by ITC Hotels, RaceCourse, CoimbatoreOpens in new window",
    //   place: "Coimbatore",
    //   type: "Deluxe Double Room",
    //   price: "6,750",
    //   quantity: "2",
    //   timing: "night",
    //   address:
    //     "1266/14, West Club Rd., Race Course Area, 641018 Coimbatore, India",
    //   description:
    //     "Located in Coimbatore and within 10 km of the Coimbatore Airport, Welcomhotel by ITC Hotels, RaceCourse, non-smoking rooms, an outdoor swimming pool, free WiFi and a garden. Providing a restaurant, the property also has a fitness centre and a bar. The accommodation offers a 24-hour front desk, room service and currency exchange for guests.103 Guest rooms are equipped with air conditioning, a flat-screen TV with satellite channels, a kettle, a shower, a hairdryer and a desk. At the hotel each room has a wardrobe and a private bathroom.Brookefields Mall is 2.9 km from Welcomhotel by ITC Hotels, RaceCourse, Coimbatore, while Fun Republic Mall is 6 km away. The nearest airport is Coimbatore International, 10 km from the hotel, and the property offers a paid airport shuttle service.Welcomhotel by ITC Hotels, Racecourse , Coimbatore has been accredited with the distinction of being a LEED Zero Carbon hotel by the USGBC (United States Green Building Council), making it the Eight hotel in the World to achieve this recognition. Hotel was opened in 2017 and was awarded LEED Platinum rating by IGBC Under New Construction (NC) Version in the same year. The property since its launch has continued to enhance its sustainability standards – the bedrock of ITC Hotels. In 2022, the hotel was recertified with the LEED Platinum Certification under the Existing Buildings category by USGBC. This LEED Zero carbon achievement by Welcomhotel by ITC Hotels, Racecourse , Coimbatore further demonstrates ITC Hotels’ deep commitment towards environment and sustainability goals. The hotel has taken various sustainable measures like 99% of its power requirement being met by windmills, Zero Mile water, Chemical Free Water Treatment in Cooling Towers, Heat Pumps for Hot Water Generation, STP for reclaiming used water, etc. Carefully using natural resources and synergise building/design strategies have been key drivers for ITC Hotels to keep on setting new benchmarks globallyCouples particularly like the location — they rated it 8.8 for a two-person trip.",
    //   reviews: "123 reviews",
    //   feedback: "Exceptional",
    //   rating: "9.0",
    // },
    // {
    //   id: 3,
    //   title: "Sterling Kodai ValleyOpens in new window",
    //   place: "Kodaikanal",
    //   type: "Classic Double Room",
    //   price: "4,207",
    //   quantity: "2 adults",
    //   timing: "1 night",
    //   address: "No.25, Pallangi Road, Attuvampatti,, 624101 Kodaikānāl, India",
    //   description:
    //     "Shaped like a ship in the misty hills of Kodaikanal, Sterling Kodai Valley consists of apartments spread across 7 acres of gently sloping land. Surrounded by greenery and views of nearby mountains, it offers a restaurant and spa services.Free WiFi is available in the lobby and in the restaurant.Located 2133 metres above sea level, Sterling Kodai Valley is within walking distance of Villpatti Village. It is 80 km from Kodaikanal Road Railway while Madurai Airport is approximately 125 km away. Views of Kodaikanal hill and valley can be seen from the apartments. A flat-screen TV with satellite and cable channels, electric kettle and tea/coffee maker is included in each apartment. Private bathrooms have a shower and hairdryer.Enjoy body treatments and massages at Subythi Wellness Spa. The resort has a travel desk where sightseeing, trekking and camping tours can be arranged. Souvenirs are available at a gift shop Local delicacies including curry dishes are served at the resort’s restaurant. It also offers Chinese and European cuisines.Couples particularly like the location — they rated it 8.6 for a two-person trip.",
    //   reviews: "123 reviews",
    //   feedback: "Exceptional",
    //   rating: "8.5",
    // },
  ],
  status: null,
  createStatus: null,
  singleHotel: {},
  singleUser: {},
  users: [],
  userData: [],
  singleUserData: {},
  singleHotelData: {},
};
export const hotelFetch = createAsyncThunk("hotels/hotelFetch", async () => {
  try {
    const response = await axios.get(API);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
// export const userDataFetch = createAsyncThunk(
//   "userData/userDataFetch",
//   async () => {
//     try {
//       const response = await axios.get(API + "/userData");
//       console.log("FETCH", response.data);
//       return response.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

// export const userFetch = createAsyncThunk("users/userFetch", async () => {
//   try {
//     const response = await axios.get(
//       "https://image-uploader-black-rho.vercel.app/api/auth"
//     );
//     console.log("Redux", response);

//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// });

export const reduxSlices = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getHotels: (state, { payload }) => {
      console.log("GetHOTELS", payload);
      state.hotels = payload;
    },
    getHotelById: (state, { payload }) => {
      const id = payload;
      const CurrentHotels = state.hotels.find((i) => i._id === id);
      state.singleHotel = CurrentHotels;
    },
    getUsers: (state, { payload }) => {
      console.log("GetUSERS", payload);
      state.users = payload;
    },
    getUserById: (state, { payload }) => {
      const id = payload;
      const CurrentUsers = state.users.find((i) => i._id === id);
      state.singleUser = CurrentUsers;
    },
    getUserData: (state, { payload }) => {
      console.log("GetHOTELS", payload);
      state.userData = payload;
    },
    getUserDataById: (state, { payload }) => {
      const id = payload;
      const userData = state.userData.find((i) => i.user_id === id);

      state.singleUserData = userData;
    },
    getHotelDataById: (state, { payload }) => {
      const hotel_id = payload;
      const hotelData = state.hotels.find((i) => i._id === hotel_id);
      state.singleHotelData = hotelData;
    },
  },
  extraReducers: {
    [hotelFetch.pending]: (state, action) => {
      state.createStatus = "pending";
    },
    [hotelFetch.fulfilled]: (state, { payload }) => {
      state.hotels = payload;
      state.createStatus = "success";
    },
    [hotelFetch.rejected]: (state, action) => {
      state.createStatus = "rejected";
    },
    // [userDataFetch.pending]: (state, action) => {
    //   state.createStatus = "pending";
    // },
    // [userDataFetch.fulfilled]: (state, { payload }) => {
    //   state.userData = payload;
    //   state.createStatus = "success";
    // },
    // [userDataFetch.rejected]: (state, action) => {
    //   state.createStatus = "rejected";
    // },
  },
});
export default reduxSlices.reducer;
export const {
  getHotels,
  getHotelById,
  getUserById,
  getUsers,
  getUserData,
  getUserDataById,
  getHotelDataById,
} = reduxSlices.actions;
