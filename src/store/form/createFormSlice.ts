import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IFormState } from '../../types'


const initialState: IFormState = {
  id: '',
  title: '',
  content: '',
}

export const createFormSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setValue(state, action: PayloadAction<IFormState>) {
     return{
        ...state,
        title: action.payload.title,
        content: action.payload.content,
        id: action.payload.id
     }
    },
    
  },
})

export const { setValue } = createFormSlice.actions
