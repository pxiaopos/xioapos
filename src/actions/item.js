import consts from './consts'

export const add = payload => {
  return {
    type: consts.item.add,
    payload: payload
  }
}
