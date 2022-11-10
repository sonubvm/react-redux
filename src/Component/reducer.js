const initilalize = {
    user :{},
    users:[],
    value: 0
};
const reducer = (state= initilalize, action) =>{
    switch(action.type){
        case "AddData":
            //users:[...state.users, action.payload]
            return {...state.users, users:action.payload};
        case "EditData":
            return {user:action.payload};
            case "DeleteData":
                return {...state.users, users:action.payload};
        case "Add":
            return{...state, 
                value:action.payload};
        case "LoadUser":
            return{...state};
        default : return state;
    }
}
export default reducer;