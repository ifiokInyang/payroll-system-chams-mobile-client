import { configureStore } from "@reduxjs/toolkit";
import EmployeeTable from "../../src/features/Table/TableSlice";
import Form from "../features/Form/Form";


export const store = configureStore({
    reducer: {
        employeeTable: EmployeeTable,
        // form: Form
    }
})