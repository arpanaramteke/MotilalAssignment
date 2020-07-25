import { GET_ADDITION, GET_SUBTRACTION, GET_MULTIPLICATION, GET_DIVISION} from '../Action/actionTypes.json';

const initialState = {
  result: ''
}

const CalcReducer = (state = initialState, action) => {

    switch (action.type) {
      case GET_ADDITION:
        return {
            result : action.payload.value1 + action.payload.value2
        }
        break;
        case GET_SUBTRACTION:
        return {
            result : action.payload.value1 - action.payload.value2
        }
        break;
        case GET_MULTIPLICATION:
        return {
            result : action.payload.value1 * action.payload.value2
        }
        break;
        case GET_DIVISION:
            return {
              result :(action.payload.value2 !== 0 ?  action.payload.value1 / action.payload.value2 : "Cannot divide by zero")   

          }
        break;
    
      default:
        return state
    }
  }

export default CalcReducer;