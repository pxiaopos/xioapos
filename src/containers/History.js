import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux'

import actions from '../actions'
import menu from '../configs/menu';

class History extends Component {
    componentDidMount() {
        this.props.load()
    }

    render() {
        const { history } = this.props

        return (
            <>
            <Link to='/order'>Order </Link>
            <Link to='/history'>History</Link>
            <p>size: {history.size}</p>
            <table> 
                <thead> 
                    <tr>
                        <th>日期</th>
                        {
                            menu.list.map((v, i) => {
                                return <th key={i}>{v.item}</th>
                            })
                        } 
                        <th>總金額</th>
                    </tr> 
                </thead> 
                <tbody> 
                    {
                        history.data.map((data, i) => (
                                <tr key={data.date}>
                                    <th>{data.date.substring(6)}</th>
                                    { menu.list.map((_, i) => <th key={data.date + '_' + i}>{data.list.counter[i] ? data.list.counter[i] : 0}</th>)}
                                    <th>{data.list.sum}</th>
                                </tr>
                            )
                        )
                    }
                </tbody> 
            </table>
            </>
        )
    }
}

export default compose(
    connect(
        state => ({
            history: state.history,
        }),
        dispatch => ({
            load: () => dispatch(actions.history.load()),
        })
    ),
)(History)
