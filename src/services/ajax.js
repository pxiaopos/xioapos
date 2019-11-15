import 'whatwg-fetch'
import { findLocalItems, localStorageSpace, sortDate } from './helper'


export const add = payload => {
    console.log('payload', payload)
}

export const load = () => ({
    data: sortDate(findLocalItems('cache_*')),
    size: localStorageSpace()
})



