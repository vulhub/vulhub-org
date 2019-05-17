import { h } from 'hyperapp'

import { Link } from '../components/link'
import { Tag } from '../components/tag'

export const Readme = ({state, actions}, children) => {

    return (
        <div>
            <section class="section">
                <div class="container">
                    <div class="columns">
                        <div class="column is-8 is-offset-2 has-text-centered content">
                            <h1 class="title">Make vulnerability environments easier</h1>
                            <p>
                                Vulhub是一个基于<code>docker</code>和<code>docker-compose</code>的漏洞环境集合，进入对应目录并执行一条语句即可启动一个全新的漏洞环境，让漏洞复现变得更加简单，让安全研究者更加专注于漏洞原理本身。
                            </p>
                            <a href="https://asciinema.org/a/rCXA2OCO3USX5sS88iMLl1Aee" target="_blank"><img src="https://asciinema.org/a/rCXA2OCO3USX5sS88iMLl1Aee.png" /></a>

                            <hr />

                            <nav class="level">
                                <div class="level-item has-text-centered">
                                    <div>
                                    <p class="heading">VULNERABILITIES</p>
                                    <p class="title">{state.repositories.length}</p>
                                    </div>
                                </div>
                                <div class="level-item has-text-centered">
                                    <div>
                                    <p class="heading">PULL</p>
                                    <p class="title">50K+</p>
                                    </div>
                                </div>
                                <div class="level-item has-text-centered">
                                    <div>
                                    <p class="heading">COMMITS</p>
                                    <p class="title">1100+</p>
                                    </div>
                                </div>
                                <div class="level-item has-text-centered">
                                    <div>
                                    <p class="heading">STARS</p>
                                    <p class="title">3400+</p>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <section class="hero is-light is-medium" id="quick-start">
                <div class="hero-body container">
                    <div class="columns is-vcentered">
                        <div class="column is-8 is-offset-2 has-text-left content">
                            <p class="title has-text-centered">Download Vulhub and <Link to="#/docs/" go={actions.go}>Quick Start</Link></p>

                            <p>
                                安装 docker 和 docker-compose 后即可开始使用Vulhub。
                            </p>

                            <pre id="quick-start-code">
                                <code>
                                    <span class="c"># Download the latest version of the vulhub</span> <br />
                                    <span class="s">git clone https://github.com/vulhub/vulhub.git </span> <br />
                                    <br />
                                    <span class="c"># Entry vulnerability directory</span> <br />
                                    <span class="s">cd /path/to/vuln/</span> <br />
                                    <br />
                                    <span class="c"># Compile (optional)</span> <br />
                                    <span class="s">docker-compose build</span> <br />
                                    <br />
                                    <span class="c"># Run</span> <br />
                                    <span class="s">docker-compose up -d</span> <br />
                                </code>
                            </pre>
                            <hr />
                            <p>或者阅读文档，查看详细使用方法。</p>

                            <h3>出现BUG？</h3>

                            <p>
                                编译及启动环境时可能会出现BUG，请<a href="https://github.com/vulhub/vulhub/issues/new" target="_blank">提交Issue</a>及时和官方反映。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="hero">
                <div className="hero-body container">
                    <div class="columns is-vcentered">
                        <div class="column is-8 is-offset-2 has-text-left content">
                            <h1 class="title has-text-centered">赞助商与合作伙伴</h1>

                            <div class="columns has-text-centered m-top-50">
                                <div class="column">
                                    <a href="https://www.chaitin.cn/" target="_blank">
                                        <img src="img/sponsor/chaitin.png" width="120" style={{height: "20px"}} />
                                    </a>
                                </div>
                                <div class="column">
                                    <a href="https://xianzhi.aliyun.com/" target="_blank">
                                        <img src="img/sponsor/aliyun.svg" width="120" alt=""/>
                                    </a>
                                </div>
                                <div class="column">
                                    <a href="https://www.didiyun.com/?channel=14196" target="_blank">
                                        <img src="img/sponsor/didi.png" width="120" alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}