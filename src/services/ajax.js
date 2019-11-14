import 'whatwg-fetch'
import { findLocalItems, localStorageSpace } from './helper'


export const add = payload => {
    console.log('payload', payload)
}

export const load = () => {
    return {
        data: findLocalItems('cache_*'),
        size: localStorageSpace()
    }
}


