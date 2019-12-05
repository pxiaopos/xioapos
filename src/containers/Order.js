// TODO: reacthook -> typescript
import React, { PureComponent as Component } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'

import Totaling from '../components/Totaling'
import Meal from '../components/Meal'

import actions from '../actions'
import { today } from '../helper/time'

import styles from './Order.module.css';
import menu from '../configs/menu';

const CACHE_PREFIX = 'cache_'
const CACHE = CACHE_PREFIX + today()

const amendSum = (sum, price) => {
  return sum + price
}

const amendCounter = (counter, item, num) => {
  const newCounter = Object.assign({}, counter)

  if (!newCounter[item]) {
    newCounter[item] = 0
  }

  newCounter[item] = newCounter[item] + num

  return newCounter
}

class Order extends Component {
  constructor(props) {
    super(props)

    // @ counter 為當前項目數量
    // @ sum 為所有項目總和金額
    // 
    // state: {
    //  counter: {
    //    "chicken": 0,
    //    "beef": 1,
    //  },
    //  sum: 100
    // }
    this.state = {
      counter: {},
      sum: 0,
    }

    if (localStorage.hasOwnProperty(CACHE)) {
      const cache = localStorage.getItem(CACHE)
      this.state = JSON.parse(cache)
    }

    this.Count = this.Count.bind(this)
  }

  componentDidUpdate(preProps, preState) {
    if (this.state !== preState) {
      localStorage.setItem(CACHE, JSON.stringify(this.state))
    } 
  }

  Count = (item, num, price) => {
    const { counter, sum } = this.state

    const isSumEqualZero = sum === 0
    const isPriceNegative = price < 0 
    const isNumberNegative = num === -1
    const isItemEqualZero = counter && ( counter[item] === 0 || counter[item] === undefined)

    if ((isSumEqualZero && isPriceNegative) || (isNumberNegative && isItemEqualZero)) {
      return
    }

    this.setState({
      counter: amendCounter(counter, item, num),
      sum: amendSum(sum, price)
    })
  }

  render() {
    const { counter, sum } = this.state

    return (
      <div>
        <Totaling sum={sum}/>
        <div className={styles.menuContainer}>
          { menu.list.map((v, i) => <Meal key={i} count={this.Count} id={i} v={v} num={counter[i]} />) }
        </div>
      </div>
    )
  }
}

export default compose(
  connect(
    state => ({
      item: state.item,
    }),
    dispatch => ({
      add: params => dispatch(actions.item.add(params)),
    })
  ),
)(Order)
