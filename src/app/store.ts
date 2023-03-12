import { configureStore } from "@reduxjs/toolkit";
import EmployeeTable from "../../src/features/Table/TableSlice"


export const store = configureStore({
    reducer: {
        employee: EmployeeTable
    }
})