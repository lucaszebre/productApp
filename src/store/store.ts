import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'
import { AppState } from '@/types/types'




const initialState: AppState = {
    sidebar: false,
    filter: "", 
    category: "",
    currentUser: {
        image: "",
        name: "",
        username: ""
    },
    comments:[],
    product:{
        "id":0,
        "title":"",
        "category":"",
        "upvotes":0,
        "status":"",
        "description":"",
        "comments":[]
    }
};

const displaySlice = createSlice({
    name: 'display',
    initialState: initialState,
    reducers: {
        toggleSideBar: (state) => {
            state.sidebar = !state.sidebar;
        },
        setFilter: (state, action: PayloadAction<string>) => { 
            state.filter = action.payload;
        },
        setCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload;
        },
        setComment: (state,action) => {
            state.comments= action.payload
        }, 
        setProduct: (state,action) => {
            state.product= action.payload
        }
        
        
    }
})

export const { toggleSideBar, setFilter, setCategory,setComment,setProduct  } = displaySlice.actions

const store = configureStore({
    reducer: {
        display: displaySlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store





