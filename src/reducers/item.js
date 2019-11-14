import consts from '../actions/consts'
import { assign } from 'lodash'

const defaultState = {
  h: 'abc'
}

const item = (state = defaultState, action) => {
  switch (action.type) {
    case consts.item.increase:
      return assign({}, state, {})

    case consts.item.decrease:
      return assign({}, state, {})

    default:
      return state
  }
}

export default item
