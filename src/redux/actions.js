export const ADD = (item) => {
    return{
        type : 'ADD_CART',
        payload  : item
    }
}

// DELETE CART
export const DEL  =(id) =>{
    return{
        type : 'DELETE_CART',
        payload : id

    }
}

//DELETE INDIVIDUAL ITEMS
export const REMOVE = (item) =>{
    return{
        type : 'REMOVE_CART',
        payload : item
    }
}