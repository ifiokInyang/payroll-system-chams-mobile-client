import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../utils/Interfaces/index.dto";
import { ServerUrl } from "../../utils/Variables";

console.log("server url is ", ServerUrl)
// const initialState:User[] = [];
export interface EmployeeState {
    data: User[];
  }

const TableSlice = createSlice({
    name: "employeeTable",
    initialState: {
        data: []
    } as EmployeeState,
    reducers: {
        addEmployee: (state: EmployeeState, action: PayloadAction<any>) => {
            state.data.push(action.payload)
        },
        getAllEmployees: (state: EmployeeState, action: PayloadAction<any[]>) => {
            state.data = action.payload;
        }
    }
})

export const getEmployeesAsync = (data: string) => async (dispatch: any) => {
    try {
        const response = await axios.get(`${ServerUrl}/${data}`)
        console.log("response is ", response.data)
        dispatch(getAllEmployees(response.data))
    } catch (err: any) {
        console.log(err)
        throw new Error(err);
    }
}

export const addEmployeesAsync = (data: any) => async (dispatch: any) => {
    try {
        const response = await axios.post(`${ServerUrl}/users`, data)
        console.log("response is ", response.data)
        dispatch(getAllEmployees(response.data))
    } catch (err: any) {
        console.log(err)
        throw new Error(err);
    }
}
export const { getAllEmployees, addEmployee } = TableSlice.actions;

export const showEmployee = (state: { employeeTable: EmployeeState }) => state.employeeTable.data;

export default TableSlice.reducer;