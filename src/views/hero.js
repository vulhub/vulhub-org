import { h } from 'hyperapp'
import isEmpty from 'lodash/isEmpty'

import router from '../helper/router'
import { Link } from '../components/link'

export const Hero = ({state, actions}, children) => {

    return (
    <section class="hero is-info tsuyukusa is-medium">
        <div class="hero-head">
            <header class="nav">
            <div class="container">
                <div class="nav-left">
                <a class="nav-item logo" href="/">
                    <img src="img/logo.svg" />
                </a>
                </div>
                <span class="nav-toggle">
                <span></span>
                <span></span>
                <span></span>
                </span>
                <div class="nav-right nav-menu">
                <Link 
                    class={state.pos == 'index' || isEmpty(location.hash) ? 'nav-item is-active' : 'nav-item'} 
                    to="#/index/" 
                    go={actions.go} >
                    主页
                </Link>
                <Link 
                    class={state.pos == 'docs' && location.hash != '#/docs/donate/' ? 'nav-item is-active' : 'nav-item'} 
                    to="#/docs/" 
                    go={actions.go} >
                    文档
                </Link>
                <Link 
                    class={state.pos == 'environments' ? 'nav-item is-active' : 'nav-item'} 
                    to="#/environments/"
                    go={actions.go} >
                    漏洞环境
                </Link>
                <Link 
                    class={location.hash == '#/docs/donate/' ? 'nav-item is-active' : 'nav-item'} 
                    to="#/docs/donate/"
                    go={actions.go} >
                    捐助
                </Link>
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
            <div id="start-bar">
                <span class="user unselectable" href="docs/">root:~ #</span><span class="command">docker-compose up -d</span>
            </div>
            <p>
                <a class="github-button" href="https://github.com/vulhub" aria-label="Follow @vulhub on GitHub">Follow @vulhub</a> &nbsp;
                <a class="github-button" href="https://github.com/vulhub/vulhub" data-icon="octicon-star" data-show-count="true" aria-label="Star vulhub/vulhub on GitHub">Star</a> &nbsp;
                <a class="github-button" href="https://github.com/vulhub/vulhub/fork" data-icon="octicon-repo-forked" data-show-count="true" aria-label="Fork vulhub/vulhub on GitHub">Fork</a>
            </p>
            </div>
        </div>
        {['environments', 'docs'].indexOf(state.pos) >= 0 && (
            <div class="hero-foot">
                <nav class="tabs is-boxed">
                <div class="container">
                    <ul>
                        <li class={state.pos == 'docs' && 'is-active'}>
                            <Link to="#/docs/" go={actions.go}>安装</Link>
                        </li>
                        <li class={state.pos == 'environments' && 'is-active'}>
                            <Link to="#/environments/" go={actions.go}>漏洞环境</Link>
                        </li>
                    </ul>
                </div>
                </nav>
            </div>
        )}
    </section>
    )
}