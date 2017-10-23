import { h } from 'hyperapp'

import router from '../helper/router'
import { Link } from '../components/link'
import { Menu } from '../components/menu'

import { htmlify } from '../helper/htmlify'


export const Docs = ({state, actions}, children) => {

    return (
        <section class="section">
            <div class="container">
                <div class="columns">
                    <div class="column is-3">
                        <aside class="menu">
                            <p class="menu-label">
                            Getting Started
                            </p>
                            <ul class="menu-list">
                                <li>
                                    <Menu to="#/docs/install-docker/" go={actions.go}>安装Docker</Menu>
                                    <ul>
                                    <li><Menu to="#/docs/install-docker-one-click/" go={actions.go}>一键安装</Menu></li>
                                    <li><Menu to="#/docs/install-docker-manual/" go={actions.go}>手工安装</Menu></li>
                                    <li><Menu to="#/docs/docker-accelerator/" go={actions.go}>Docker加速器</Menu></li>
                                    </ul>
                                </li>
                                <li><Menu to="#/docs/install-docker-compose/" go={actions.go}>安装Docker-compose</Menu></li>
                                <li><Menu to="#/docs/download-vulhub/" go={actions.go}>下载Vulhub</Menu></li>
                            </ul>
                            <p class="menu-label">
                            Usage
                            </p>
                            <ul class="menu-list">
                            <li><Menu to="#/docs/run/" go={actions.go}>启动环境</Menu></li>
                            <li><Menu to="#/docs/test/" go={actions.go}>漏洞测试</Menu></li>
                            <li><Menu to="#/docs/remove/" go={actions.go}>移除环境</Menu></li>
                            </ul>
                            <p class="menu-label">
                            Advanced
                            </p>
                            <ul class="menu-list">
                            <li><Menu to="#/docs/requirement/" go={actions.go}>配置要求</Menu></li>    
                            <li><Menu to="#/docs/failure-reason/" go={actions.go}>失败的原因</Menu></li>
                            <li><Menu to="#/docs/contribute/" go={actions.go}>贡献环境</Menu></li>
                            </ul>
                            <p class="menu-label">
                            Donate
                            </p>
                            <ul class="menu-list">
                            <li><Menu to="#/docs/donate/" go={actions.go}>捐助</Menu></li>    
                            </ul>
                        </aside>
                    </div>
                    <div class="column is-9">
                        <article class="content" onupdate={htmlify(state.html)} oncreate={htmlify(state.html)}></article>
                    </div>
                </div>
            </div>
        </section>
    )
}