import { h } from 'hyperapp'

export const Link = (props, children) => {
    props.href = props.to
    props.to = null

    props.onclick = function(event) {
        event.preventDefault()
        props.go(props.href)
    }

    return h('a', props, children)
}