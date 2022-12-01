import { configureStore } from "@reduxjs/toolkit";
import InfoReducer from './ducks/info'

export default configureStore({
  reducer: {
    info: InfoReducer
  }
})