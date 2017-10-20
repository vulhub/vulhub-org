import './scss/index.scss'

import { h, app } from "hyperapp"
import marked from 'marked'
import nanoajax from 'nanoajax'

import { Hero } from "./views/hero"
import { Body } from "./views/body"
import repositories from "./environments.json"
import parser from './helper/parser'
/** @jsx h */

const toLowerCase = t => {
  return t ? t.toLowerCase() : ''
}

app({
  init(state, actions) {
    addEventListener("popstate", () => {
      actions.init()
    })
    if (!String.prototype.startsWith) {
      String.prototype.startsWith = function(searchString, position) {
        position = position || 0;
        return this.indexOf(searchString, position) === position;
      }
    }
  },
  state: {
    repositories: repositories,
    repo_list: repositories,
    html: "",
    search_init: "",
    showAll: false,
    vuln_path: "",
    vuln: {},
  },
  view: (state, actions) => {
    return (
      <main oncreate={actions.init}>
        <Hero 
          state={state} 
          actions={actions}
        />
        <Body
          state={state} 
          actions={actions}
        />
      </main>
    )
  },
  actions: {
    init: (state, actions) => {
      var default_vuln = "activemq/CVE-2016-3088"
      let matches = /^#\/environments\/(.+)\/$/i.exec(location.hash)
      if (matches) {
        default_vuln = matches[1]
      }

      let vuln = _.find(state.repositories, (el, index) => {
        return el.path == default_vuln
      }) || state.repositories[0]
      actions.load_vuln(vuln)
    },
    go: (state, actions, url) => {
      history.pushState({}, null, url)
      return state
    },
    load_vuln: (state, actions, vuln) => {
      state.vuln_name = vuln.name
      state.vuln = vuln
      nanoajax.ajax({url: `vulhub/${vuln.path}/README.md`}, (code, md) => {
        let html = marked(md, {sanitize: true})
        actions.render(parser(vuln.path, html))
      })
      return state
    },
    render: (state, actions, html) => {
      state.html = html
      document.getElementById("content").innerHTML = html
      return state
    },
    search: (state, actions, keyword) => {
      state.repo_list = _.filter(state.repositories, (vuln, i) => {
        const text = toLowerCase(keyword)
        const app_name = toLowerCase(vuln.app)
        const vul_name = toLowerCase(vuln.name)
        const cve_number = toLowerCase(vuln.cve)

        return vul_name.search(text) >= 0 || app_name.search(text) >= 0 || cve_number.search(text) >= 0
      })
      state.search_init = keyword
      return state
    },
    reset: (state, actions) => {
      state.repo_list = state.repositories
      state.search_init = ""
      return state
    },
    showAll: (state, actions, e) => {
      state.showAll = e.target.checked
      return state
    }
  }
}, document.getElementById("app"))