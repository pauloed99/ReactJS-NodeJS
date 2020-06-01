const initialState = {
    travels : null
};

export default function travels(state=initialState, action){
    switch(action.type){
        case 'SET_TRAVELS' :
            return {...state, travels : action.payload};
        default :
            return state;    
    }
};