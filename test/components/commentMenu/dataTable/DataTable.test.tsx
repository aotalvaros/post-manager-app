import { DataTable } from '../../../../src/components/commentMenu/dataTable/DataTable';
import { configureStore } from "@reduxjs/toolkit"
import { render, screen } from "@testing-library/react"
import * as reactRedux from 'react-redux';
import React from 'react';
import { createFormSlice } from '../../../../src/store/form/createFormSlice';

const store = configureStore({
    reducer: {
        form: createFormSlice.reducer
    }
})


describe('Pruebas para el componente DataTable', () => {
  
    const setUp = () => {
        render(
            <reactRedux.Provider store={store}>
                <DataTable/>
            </reactRedux.Provider>
        )
    }

    test('Debe renderizar el componente correctamente', () => {
        setUp()
        expect(screen.getByTestId('data-table')).toBeInTheDocument()
    })

})
