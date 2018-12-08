

const initialState = {
    user: {},
    token: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER': {
      console.log(action);
      return { ...state, ...action.payload }
    }
    case 'CLEAR_USER': {
      return { ...initialState };
    }
    default: {
      return state;
    }
  }
};

export default user;
