import {IModel} from "../../models/taskModel"
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface TasksState {
    tasks : IModel[];
    isLoading:boolean;
    error:string;
}

const initialState:TasksState = {
    tasks:[],
    isLoading:false,
    error:'',
}

export const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{
        fetchTask(state){
            state.isLoading = true
        },
        fetchTaskSuccess(state,action:PayloadAction<IModel[]>){
            state.tasks = action.payload;
            state.error = ""
            state.isLoading = false
        },
        fetchTaskError(state,action:PayloadAction<string>){
            state.isLoading = false
            state.error = action.payload
        }

    }
})

export default taskSlice.reducer;
