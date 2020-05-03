
const initialState = () => {
    if(localStorage.getItem('state')){
        return JSON.parse(localStorage.getItem('state'))
    } else {
        return [{id:0,text:'Estado Inicial', done: false}]
    }
    
}

function personalSetItem(value, state) {
    if (value !== '') {
        localStorage.setItem('state', JSON.stringify(state))
    }
}

const ListReducers = (state = initialState(), action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            personalSetItem(1, [...state, action.it])
            return [...state, action.it]
            case 'DELETE_ITEM':
                state = state.filter(it=>it.id.toString()!==action.payload)
                personalSetItem(1, state)
                return state
                case 'DONE_ITEM':
                    let newState = state.map(it=>{
                        if(it.id.toString()===action.id){
                            it.done = !it.done
                        }
                        return it
                    })
                    personalSetItem(action.id, newState)
                    return newState
                case 'EDIT_ITEM':
                    let editState = state.map(it=>{
                        if(it.id.toString()===action.item.id){
                            console.log(action.item.id)
                            it.text = action.item.text
                        }
                        return it
                    })
                    personalSetItem(action.item.id, editState)
                    return editState
            default:
            return state
    }
}

export default ListReducers