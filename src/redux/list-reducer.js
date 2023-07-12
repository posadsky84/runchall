const SET_LIST = `SET_LIST`;
export const GET_LIST = `GET_LIST`;

export const setList = data => ({type: SET_LIST, data});

const initState = {
  items: [],
};

const listReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_LIST:
      return {...state,
              list: action.list,
             }
    default:
      return state;
  }

};

export default listReducer;