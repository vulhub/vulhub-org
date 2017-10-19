import { h } from 'hyperapp'

import { htmlify } from '../helper/htmlify';

export const Body = ({state, actions}, children) => {
    let repos = state.repo_list.slice(0, 10)
    
    return (
        <section class="section">
            <div class="container">
                <div class="columns">
                    <div class="column is-4">
                        <nav class="panel">
                            <p class="panel-heading"> 漏洞环境 </p>
                            <div class="panel-block">
                                <p class="control has-icons-left">
                                <input class="input is-media" type="text" placeholder="Search" value={state.search_init} onkeyup={actions.search} />
                                <span class="icon is-media is-left">
                                    <i class="fa fa-search"></i>
                                </span>
                                </p>
                            </div>
                            {repos.map(vuln => {
                                return (
                                    <a class={state.vulname == vuln.name ? 'panel-block is-active':'panel-block'} onclick={e => actions.load_vuln(vuln)}>
                                        <span class="panel-icon"> <i class="fa fa-book"></i> </span> {vuln.name}
                                    </a>
                                )
                            })}
                            <label class="panel-block">
                                <input type="checkbox" /> Remember me </label>
                            <div class="panel-block">
                                <button class="button is-primary is-outlined is-fullwidth" onclick={actions.reset}> Reset all filters </button>
                            </div>
                        </nav>
                    </div>
                    <div class="column is-8">
                        <article class="content" id="content" oncreate={htmlify(state.html)}></article> 
                    </div>
                </div>
            </div>
        </section>
    )
}