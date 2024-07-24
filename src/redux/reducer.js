const initState = {
    product:JSON.parse(localStorage.getItem('product')) || [], 
    details:JSON.parse(localStorage.getItem('details')) || [],
};

export const Reducer = (state  = initState , action) => {
    switch(action.type) {
        case  'CREATE_PRODUCT' :
     let changeProd = [...state.product , action.payload]
     localStorage.setItem('product' , JSON.stringify(changeProd))
     return{...state , product: changeProd};
     case 'CREATE_DETAILS' :
        let detail  = action.payload
    localStorage.setItem('details' , JSON.stringify(detail))

     return {...state,  details: detail }
     default:
        return state;
}
}