import './scss/index.scss'

import { h, app } from "hyperapp"
import marked from 'marked'
import nanoajax from 'nanoajax'

import { Hero } from "./views/hero"
import { Body } from "./views/body"
import repositories from "./config.json"
import parser from './helper/parser'
/** @jsx h */

app({
  state: {
    location: location.hash || "#/",
    repositories: repositories,
    repo_list: repositories,
    html: "",
    vulname: "",
    search_init: ""
  },
  view: (state, actions) => {
    let when_created = e => {
      let vuln = _.find(state.repositories, (el, index) => {
        return el.path == "activemq/CVE-2016-3088"
      })
      actions.load_vuln(vuln)
    }

    return (
      <main oncreate={when_created}>
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
    go: (state, actions, url) => {
      location.hash = url
      state.location = url
      return state
    },
    load_vuln: (state, actions, vuln) => {
      state.vulname = vuln.name
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
    search: (state, actions, e) => {
      state.repo_list = _.filter(state.repositories, (vuln, i) => {
        const text = e.target.value.toLowerCase()
        const app_name = vuln.app.toLowerCase()
        const vul_name = vuln.name.toLowerCase()

        return vul_name.search(text) >= 0 || app_name.search(text) >= 0
      })
      state.search_init = e.target.value
      return state
    },
    reset: (state, actions) => {
      state.repo_list = state.repositories
      state.search_init = ""
      return state
    }
  }
}, document.getElementById("app"))