import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Order extends Component {
    render() {
        return (
            <>
            <Link to='/order'>Order</Link>
            <Link to='/history'>History</Link>
            </>
        )
    }
}

export default Order