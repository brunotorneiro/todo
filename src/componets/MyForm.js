import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addText } from '../actions/addText'
import {addItens} from '../actions/actionItens'

const MyForm = () => {
    const state = useSelector(state=>state)
    const dispatch = useDispatch()
    const handleChange = e => {
        let value = e.target.value
        dispatch(addText(value))
    }
    function addItem (event) {
        event.preventDefault()
        if(state.myInput) dispatch(addItens(state.myInput))
        dispatch(addText(''))
    }
    return (
        <div className='my-container modal-footer'>
            <form className='row justify-content-center'>
                <input type='text' className='col-12 mb-3 p-2' onChange={handleChange} value={state.myInput}></input>
                <div className="btn-group col-12 p-2" role='group'>
                    <button className='btn btn-secondary' data-dismiss="modal">Fechar</button>
                    <button className='btn btn-secondary' onClick={addItem} data-dismiss="modal">Adicionar</button>
                </div>
            </form>
        </div>
        
    )
}

export default MyForm