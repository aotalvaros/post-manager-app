import { CreateCommentForm } from '../../../src/components/commentMenu/createCommentForm/CreateCommentForm';
import { DataTable } from '../../../src/components/commentMenu/dataTable/DataTable';
import { fireEvent, render, screen } from "@testing-library/react"
import * as reactRedux from 'react-redux';
import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { createFormSlice } from '../../../src/store/form/createFormSlice';
import { CommentMenu } from '../../../src/components/commentMenu/CommentMenu';

jest.mock('../../../src/components/commentMenu/createCommentForm/CreateCommentForm', () => ({
    CreateCommentForm: () => {
        return(
            <div data-testid='create-comment'>
                <p>CreateCommentForm</p>
            </div>
        )
    }
}))

jest.mock('../../../src/components/commentMenu/dataTable/DataTable', () => ({
    DataTable: () => {
        return(
            <div data-testid='data-table'>
                <p>DataTable</p>
            </div>
        )
    }
}))

const store = configureStore({
    reducer: {
        form: createFormSlice.reducer
    }
})

describe('Pruebas para el componente DataTable', () => {
  

    const setUp = () => {
        render(
            <reactRedux.Provider store={store}>
                <CommentMenu/>
            </reactRedux.Provider>
        )
    }

    test('Debe renderizar el componente correctamente', () => {
        setUp()
        expect(screen.getByTestId('CreateCommentForm')).toBeInTheDocument()
        expect(screen.getByTestId('DataTable')).toBeInTheDocument()
    })

})

