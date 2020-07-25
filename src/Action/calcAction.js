import { GET_ADDITION, GET_SUBTRACTION, GET_MULTIPLICATION, GET_DIVISION} from './actionTypes.json';

const getAddition = (value1, value2) => ({
  type: GET_ADDITION,
  payload: {
    value1: parseFloat(value1),
    value2: parseFloat(value2)
  }
});

const getSubtraction = (value1, value2) => ({
    type: GET_SUBTRACTION,
    payload: {
        value1: parseFloat(value1),
        value2: parseFloat(value2)
    }
  });

  const getMultiplication = (value1, value2) => ({
    type: GET_MULTIPLICATION,
    payload: {
        value1: parseFloat(value1),
        value2: parseFloat(value2)
    }
  });

  const getDivision = (value1, value2) => ({
    type: GET_DIVISION,
    payload: {
        value1: parseFloat(value1),
        value2: parseFloat(value2)
    }
  });

  export {
      getAddition,
      getSubtraction,
      getMultiplication,
      getDivision
  }