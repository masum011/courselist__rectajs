import { configureStore } from '@reduxjs/toolkit'
import homeSlice from '../Pages/Home/homeSlice'
import  dashboardSlice  from '../Pages/Dashboard/dashboardSlice'
export const store = configureStore({
  reducer: {
    home: homeSlice,
    userinfo: dashboardSlice
  },
})