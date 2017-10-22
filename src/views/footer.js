import { h } from 'hyperapp'

export const Footer = ({state, actions}, children) => {
    return (
        <footer class="footer">
            <div class="container">
            <div class="content has-text-centered">

            <p class="">
                © 2017 Vulhub is released under the <a href="https://github.com/vulhub/vulhub/blob/master/LICENSE">GPL-3.0 License</a>.
            </p>
            </div>
            </div>
        </footer>
    )
}