import consts from 'core/redux/actions/consts';

const defaultState = {
  data: [],
  size: '',
};

const history = (state = defaultState, action) => {
  switch (action.type) {
    case consts.history.update:
      return { ...state, ...action.res };
    default:
      return state;
  }
};

export default history;
