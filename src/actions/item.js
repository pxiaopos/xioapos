import consts from './consts'

export const increase = () => {
  return {
    type: consts.item.increase
  }
}

export const decrease = () => {
  return {
    type: consts.item.decrease
  }
}
