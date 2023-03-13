import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ServerUrl } from "../../utils/Variables";


const FormSlice = createSlice({
    name: "form",
    initialState: {

    },
    reducers:{

    }
})




// export const addEmployeesAsync = (data: any) => async (dispatch: any) => {
//     try {
//         const response = await axios.post(`${ServerUrl}/users`, data)
//         console.log("response is ", response.data)
//         dispatch(getAllEmployees(response.data))
//     } catch (err: any) {
//         console.log(err)
//         throw new Error(err);
//     }
// }


export const {} = FormSlice.actions;

export default FormSlice.reducer;