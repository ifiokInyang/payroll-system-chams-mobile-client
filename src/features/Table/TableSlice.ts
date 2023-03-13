import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userDetails, DisplayedUser } from "../../utils/Interfaces/index.dto";
import { ServerUrl } from "../../utils/Variables";
import toast from 'react-hot-toast';


export interface EmployeeState {
    data: User[];
    singleEmployee: DisplayedUser
  }

const TableSlice = createSlice({
    name: "employeeTable",
    initialState: {
        data: [],
        singleEmployee: userDetails
    } as EmployeeState,
    reducers: {
        addEmployee: (state: EmployeeState, action: PayloadAction<any>) => {
            state.data.push(action.payload)
        },
        getAllEmployees: (state: EmployeeState, action: PayloadAction<any[]>) => {
            state.data = action.payload;
        },
        getAnEmployee: (state: EmployeeState, action: PayloadAction<any>) => {
            state.singleEmployee = action.payload;
        },
    
    }
})

export const getEmployeesAsync = () => async (dispatch: any) => {
    try {
        const response = await axios.get(`${ServerUrl}/users`)
        dispatch(getAllEmployees(response.data))
    } catch (err: any) {
        console.log(err)
        toast.error(err.response.data.message || "Something went wrong")
        throw new Error(err);
    }
}

export const addEmployeesAsync = (data: any) => async (dispatch: any) => {
    try {
        const response = await axios.post(`${ServerUrl}/users`, data)
        if (response.status === 201) {
            toast.success("successfully added employee")
            const allEmployees = await axios.get(`${ServerUrl}/users`)
            dispatch(getAllEmployees(allEmployees.data))
        }    } catch (err: any) {
        toast.error(err.response.data.message || "Something went wrong")
        throw new Error(err);
    }
}

export const deleteEmployeesAsync = (id: string) => async (dispatch: any) => {
    try {
        const response = await axios.delete(`${ServerUrl}/users/${id}`)
        if (response.status === 200) {
            toast.success("Successfully deleted employee")
            const remainingEmployee = await axios.get(`${ServerUrl}/users`)
            dispatch(getAllEmployees(remainingEmployee.data))
        }
    } catch (err: any) {
        console.log(err)
        toast.error(err.response.data.message || "Something went wrong")
        throw new Error(err);
    }
}
export const updateEmployeeAsync = (employee: any) => async (dispatch: any) => {
    try {
        const response = await axios.patch(`${ServerUrl}/users/${employee.id}`, employee)
        if (response.status === 200) {
            toast.success("Profile updated successfully")
            const allEmployees = await axios.get(`${ServerUrl}/users`)
            dispatch(getAllEmployees(allEmployees.data))
        }
    } catch (err: any) {
        console.log(err)
        toast.error(err.response.data.message || "Something went wrong")
        throw new Error(err);
    }
}
export const getSingleEmployeeAsync = (data: any) => async (dispatch: any) => {
    try {
        const response = await axios.get(`${ServerUrl}/users/${data}`)
        dispatch(getAnEmployee(response.data))
        
    } catch (err: any) {
        console.log(err)
        throw new Error(err);
    }
}




export const { getAllEmployees, addEmployee, getAnEmployee } = TableSlice.actions;

export const showEmployee = (state: { employeeTable: EmployeeState }) => state.employeeTable.data

export default TableSlice.reducer;