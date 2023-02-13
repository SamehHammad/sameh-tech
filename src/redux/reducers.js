import {createSlice} from '@reduxjs/toolkit'



const initialState = {prodects:[],mount:0,search:''}

const getprodect = createSlice({
    name:'prodect',
    initialState,
    reducers:{
        giveprodect:(state,action)=>{
            state.prodects.push(action.payload)
        },
        Deleteprodect:(state,action)=>{
            state.prodects = state.prodects.filter(val=>val.id !== action.payload)
        },
        Addconter: (state,action) => {
            state.mount=state.mount+action.payload

        },
        createSearch: (state,action) => {
            state.search = action.payload
        },
    }
})

export const {giveprodect,Deleteprodect,Addconter,createSearch} =  getprodect.actions

export default getprodect.reducer