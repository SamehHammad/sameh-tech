import { configureStore } from "@reduxjs/toolkit";
import modeSlice from "./modeSlice";
import getprodect from "./reducers";

const store = configureStore({ reducer: { getprodect,
     darkMode: modeSlice 
    } });

export default store;
