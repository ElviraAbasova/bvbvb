function reducer(state,action) {
    switch (action.type) {
        case "SetInput":
            return  {...state, input: action.input}
            case "SetArray":
                let newObj = {
                    id: state.array.length+1,
                    name: state.input
                }
            return  { input:"",array:[...state.array, newObj]};
            case "SetDelete":
            let filter =  state.array.filter(item => item.id != action.id)
            return  {...state, array: filter};
            case "SetEdit":
                let editItem = state.array.find(item => item.id == action.id)
                let editText = prompt("Edit Item", editItem.name)
                editItem.name = editText

                
            return {...state, editItem } ;

           
    
        
    }

}
export default reducer