import { h } from 'hyperapp'

import { Link } from './link' 

export const Menu = (props, children) => {
    if (props.to == location.hash) {
        props.class = 'is-active'
    }

    return (
        <Link {...props} >{children}</Link>
    )
}