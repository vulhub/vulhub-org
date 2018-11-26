import { h } from 'hyperapp'

export const Footer = ({state, actions}, children) => {
    return (
        <footer class="footer">
            <div class="container">
            <div class="content has-text-centered">

            <p class="">
                © 2018 Vulhub is released under the <a href="https://github.com/vulhub/vulhub/blob/master/LICENSE">MIT License</a>.
            </p>
            <p>
                由<a href="https://www.didiyun.com/?channel=14196" target="_blank">滴滴云</a>免费提供云计算服务
            </p>

            </div>
            </div>
        </footer>
    )
}