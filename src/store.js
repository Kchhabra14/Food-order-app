import { configureStore } from "@reduxjs/toolkit";
import rootreducer from "./redux/mainreducer";



const store  =  configureStore({
    reducer : { rootreducer}
});


export default store;