import './scss/index.scss'
import { h, app } from "hyperapp"
import marked from 'marked'

import { Hero } from "./views/hero"
import { Body } from "./views/body"
import repositories from "./config.json"
import parser from './helper/parser'
/** @jsx h */

app({
  state: {
    location: location.hash || "#/",
    repositories: repositories,
    html: "",
    vulname: ""
  },
  view: (state, actions) => {
    let when_created = e => {
      let vuln = state.repositories.find((el, index) => {
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
      fetch(`vulhub/${vuln.path}/README.md`).then(res => {
        return res.text()
      }).then(md => {
        let html = marked(md, {sanitize: true})
        actions.render(parser(vuln.path, html))
      })
      return state
    },
    render: (state, actions, html) => {
      state.html = html
      document.getElementById("content").innerHTML = html
      return state
    }
  }
})