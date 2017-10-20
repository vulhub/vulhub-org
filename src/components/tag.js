import { h } from 'hyperapp'

export const Tag = (props, children) => {
    if(!children.length) {
        return ;
    }
    props.class = "tag is-success"

    return (
        <div class="inline-box">
            <div class="tags has-addons">
                <span class="tag">{props.title}</span>
                {h('a', props, children)}
            </div>
        </div>
    )
}