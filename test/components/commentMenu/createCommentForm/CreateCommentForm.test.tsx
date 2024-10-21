import { configureStore } from "@reduxjs/toolkit"
import { CreateCommentForm } from "../../../../src/components/commentMenu/createCommentForm/CreateCommentForm"
import { createFormSlice } from "../../../../src/store/form/createFormSlice"
import { render, screen } from "@testing-library/react"
import * as reactRedux from 'react-redux';
import React from 'react';

const store = configureStore({
    reducer: {
        form: createFormSlice.reducer
    }
})

describe('Pruebas para el componente CreateCommentForm', () => {
    
    const setUp = () => {
        render(
            <reactRedux.Provider store={store}>
                <CreateCommentForm/>
            </reactRedux.Provider>
        )
    }

    test('Debe renderizar el componente correctamente', () => {
        setUp()
        expect(screen.getByTestId('create-comment')).toBeInTheDocument()
    })
})
