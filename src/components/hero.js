import { h } from 'hyperapp'

import { Link } from './link'

export const Hero = ({state, actions}, children) => (
    <section class="hero is-info is-medium">
        <div class="hero-head">
            <header class="nav">
            <div class="container">
                <div class="nav-left">
                <a class="nav-item logo">
                    Vulhub
                </a>
                </div>
                <span class="nav-toggle">
                <span></span>
                <span></span>
                <span></span>
                </span>
                <div class="nav-right nav-menu">
                <a class="nav-item is-active">
                    主页
                </a>
                <a class="nav-item">
                    文档
                </a>
                <span class="nav-item">
                    <a class="button is-primary is-inverted" href="https://github.com/vulhub/vulhub" target="_blank">
                    <span class="icon">
                        <i class="fa fa-github"></i>
                    </span>
                    <span>Source</span>
                    </a>
                </span>
                </div>
            </div>
            </header>
        </div>
        <div class="hero-body">
            <div class="container has-text-centered">
            <h1 class="title">
                Vulhub
            </h1>
            <h2 class="subtitle">
                使用Vulhub一键搭建漏洞测试靶场
            </h2>
            </div>
        </div>
        <div class="hero-foot">
            <nav class="tabs is-boxed">
            <div class="container">
                <ul>
                    <li class={state.location == '#/' ? 'is-active' : ''}>
                        <Link to="#/" go={actions.go}>描述</Link>
                    </li>
                    <li class={state.location == '#/environments/' ? 'is-active' : ''}>
                        <Link to="#/environments/" go={actions.go}>环境</Link>
                    </li>
                    <li class={state.location == '#/contribute/' ? 'is-active' : ''}>
                        <Link to="#/contribute/" go={actions.go}>贡献</Link>
                    </li>
                </ul>
            </div>
            </nav>
        </div>
    </section>
)