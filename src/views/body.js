import { h } from 'hyperapp'

import { htmlify } from '../helper/htmlify';
import { Link } from '../components/link'
import { Tag } from '../components/tag'

export const Body = ({state, actions}, children) => {
    let i = 0

    return (
        <section class="section">
            <div class="container">
                <div class="columns">
                    <div class="column is-4">
                        <nav class="panel">
                            <p class="panel-heading"> 漏洞环境 </p>
                            <div class="panel-block">
                                <p class="control has-icons-left">
                                <input class="input is-media" type="text" placeholder="Search" value={state.search_init} onkeyup={e => actions.search(e.target.value)} />
                                <span class="icon is-media is-left">
                                    <i class="fa fa-search"></i>
                                </span>
                                </p>
                            </div>
                            {state.repo_list.map(vuln => {
                                i += 1
                                return (
                                    <a class={state.vuln_name == vuln.name ? 'panel-block is-active':'panel-block'}
                                       style={{display: !state.showAll && i>=10 ? 'none':'block'}}
                                       onclick={e => {
                                            actions.go(`#/environments/${vuln.path}/`)
                                            actions.load_vuln(vuln)
                                           }
                                       }>
                                        <span class="panel-icon"> <i class="fa fa-book"></i> </span> {vuln.name}
                                    </a>
                                )
                            })}
                            <label class="panel-block">
                                <input type="checkbox" onchange={actions.showAll} checked={state.showAll} /> 显示所有 </label>
                            <div class="panel-block">
                                <button class="button is-primary is-outlined is-fullwidth" onclick={actions.reset}> Reset all filters </button>
                            </div>
                        </nav>
                    </div>
                    <div class="column is-8">
                        <Tag title="App" onclick={e => actions.search(state.vuln.app)}>{state.vuln.app}</Tag>
                        <Tag title="CVE" onclick={e => actions.search(state.vuln.cve)}>{state.vuln.cve}</Tag>
                        <Tag title="Environment" href={`https://github.com/vulhub/vulhub/tree/master/${state.vuln.path}`} target="_blank">{state.vuln.name}</Tag>

                        <article class="content" id="content" oncreate={htmlify(state.html)}></article> 
                    </div>
                </div>
            </div>
        </section>
    )
}