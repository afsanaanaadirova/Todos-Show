import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../services/slice.service";


export const getTodos = createAsyncThunk(
    "slice/todos",
    async () => {
        try {
            const response = await AuthService.allTodos()
            return response
        } catch (error) {
            console.log(error)
            return error
        }
    }
);
export const getTodosById = createAsyncThunk(
    "slice/todosId",
    async({id}) => {
        try{
            const response = await AuthService.allTodosById(id);
            return response
        }
        catch(error){
            console.log(error)
        }
    }
)
const initialState = "";

const authSlice = createSlice({
    name: "slice",
    initialState,
});

const { reducer } = authSlice;
export default reducer;