export default (state = ['new Status'],action) =>{
      switch(action.type){
            case 'ADD':
            return [
                  ...state,
                  action.inpV
            ]
            default:
            return state
      }
}