import Item from "../Item"

export const addItens = (text) => {
    let it = new Item(text)
    return ({type: 'ADD_ITEM', it})
}

export const deleteItem = id => {
    return {type: 'DELETE_ITEM', payload: id}
}

export const doneItem = id => {
    return {type: 'DONE_ITEM', id}
}

export const editItem = item => {
    console.log('action edit', item)
    return {type: 'EDIT_ITEM', item}
}
