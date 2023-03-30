//import actions 
const INITIAL_STATE = {
    carts : []
}
    


export const cartreducer = (state = INITIAL_STATE , action) =>{
    switch(action.type){
        case 'ADD_CART' : {
            return {
                ...state, //so that the previous state remains and on clicking the next item
                //add to cart stores the previous added in the cart. so . STATE. 
                carts : [...state.carts,action.payload]
                // with action.payload we add new data of item
                // ...state.carts keeps the previously added item in the cart too

            }
        }
        default:
            return state;
    }
}