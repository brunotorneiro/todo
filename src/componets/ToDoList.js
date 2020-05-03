import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem, doneItem, editItem } from '../actions/actionItens'

const ToDoList = (props) => {
    const dispatch = useDispatch()
    const toDoList = useSelector(state=>state.list)

    function onDeleteItem(e) {
        let id = e.target.parentElement.parentElement.parentElement.id
        dispatch(deleteItem(id))
    }
    function onDone(e) {
        console.log(e.target.parentElement.parentElement.parentElement)
        let id = e.target.parentElement.parentElement.parentElement.id
        dispatch(doneItem(id))
    }

    function DelImg () {
        return <img src="./trash.png" alt="Delete"width='40px'></img>
    }

    function DoneImg (props) {
        if(props.done) return <img src="./done.png" alt="Delete"width='40px'></img>
        else return <img src="./do.png" alt="Delete"width='40px'></img>
    }

    function onEdit (e) {
        let id = e.target.parentElement.id
        let text = e.target.textContent
        let editable = document.getElementById(id)
        editable.addEventListener('focusout', ()=>{
            console.log(id)
            dispatch(editItem({
                id,
                text
            }))  
        })
        
    }

    return (
        <div className='container my-bg p-2'>
            {toDoList.map((line)=>{
                return (
                    <div className={line.done?'row alert alert-success m-1 mb-3':'row alert alert-light m-1 mb-3'} role="alert" key={line.id} id={line.id}>
                        <p className={
                            line.done?'done col-12 col-sm-9':'col-12 col-sm-9'
                            } contentEditable suppressContentEditableWarning={true}suppressContentEditableWarning={true} onInput={onEdit}>
                            {line.text}
                        </p>
                        <div className='btn-group col-12 col-sm-3'>
                            <button className='btn btn-outline-success' onClick={onDone}>
                                <DoneImg done={line.done}></DoneImg>
                            </button>
                            <button className='btn btn-outline-success' onClick={onDeleteItem}>
                                <DelImg></DelImg>
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ToDoList
