import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({

    name: "todolist",

    initialState: {
        todo: [],
        option:[
            {name:"Game"},
            {name:"Film"}
        ]
    },

    reducers: {


        addtodo(state, action) {
            state.todo.push(action.payload)
        },
        removetodo(state, action) {
            state.todo = state.todo.filter(item => item.id !== action.payload)
        },
        addCat(state , action){
            state.option.push(action.payload)
        }
    }

})

export const {
    addtodo,
    removetodo,
    filtercat,
    addCat

} = counterSlice.actions

export default counterSlice.reducer