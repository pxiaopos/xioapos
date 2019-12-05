import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import Report from '../components/Report'
import StorageSize from '../components/StorageSize'

import actions from '../actions'

class History extends Component {
    componentDidMount() {
        this.props.load()
    }

    render() {
        const { history } = this.props

        return (
            <>
                <StorageSize size={history.size} />
                <Report data={history.data}/>
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
