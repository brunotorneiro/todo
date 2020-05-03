class Item{
    static lastId = ()=> {
        if(!localStorage.getItem('lastId')) localStorage.setItem('lastId', 0)
    }

    constructor(text){
        let newId = Number(localStorage.getItem('lastId')) + 1
        localStorage.setItem('lastId', newId)
        console.log(newId)
        this.id = newId
        this.text = text
        this.done = false
    }
}

export default Item