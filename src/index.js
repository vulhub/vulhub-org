import 'bulmaswatch/materia/bulmaswatch.min.css';
import './scss/index.scss'

import { h, app } from "hyperapp"
import marked from 'marked'
import nanoajax from 'nanoajax'
import NProgress from 'nprogress'
import find from 'lodash/find'
import filter from 'lodash/filter'

import { Hero } from "./views/hero"
import { Body } from "./views/body"
import { Readme } from "./views/readme"
import { Footer } from "./views/footer"
import { Docs } from './views/docs'

import repositories from "./environments.json"
import parser from './helper/parser'
import router from './helper/router'
/** @jsx h */

const toLowerCase = t => {
  return t ? t.toLowerCase() : ''
}

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  }
}

app({
  init(state, actions) {
    addEventListener("popstate", () => {
      state.pos = router()
      actions.init()
    })
    let myRenderer = new marked.Renderer();
    myRenderer.link = (href, title, text) => {
      const isHttp = /^https?:\/\/.+$/.test(href)
      if(/[&:]/.test(href) && !isHttp) {
        return ''
      }

      let target = (isHttp || title === 'newWindow') ? ' target="_blank" ' : ''
      title = (title && title !== 'newWindow') ? ` title="${title}" ` : ''

      return `<a href="${href}" ${title} ${target}>${text}</a>`
    }
    marked.setOptions({renderer: myRenderer});
    actions.init()
  },
  state: {
    repositories: repositories,
    repo_list: repositories,
    html: "",
    search_init: "",
    showAll: false,
    vuln: {},
    pos: router()
  },
  view: (state, actions) => {
    let component;
    if(state.pos == 'environments') {
      component = (
        <Body state={state} actions={actions} />
      )
    } else if (state.pos == 'docs') {
      component = (
        <Docs state={state} actions={actions} />
      )
    } else {
      component = (
        <Readme state={state} actions={actions} />
      )
      actions.finishLoading()
    }

    return (
      <main>
        <Hero 
          state={state}
          actions={actions}
        />
        {component}
        <Footer state={state} actions={actions} />
      </main>
    )
  },
  actions: {
    init: (state, actions) => {
      actions.startLoading()
      if (state.pos == 'environments') {
        var default_vuln = "activemq/CVE-2015-5254"
        let matches = /^#\/environments\/(.+)\/$/i.exec(location.hash)
        if (matches) {
          default_vuln = matches[1]
        }
  
        let vuln = find(state.repositories, (el, index) => {
          return el.path == default_vuln
        }) || state.repositories[0]
        actions.load_vuln(vuln)
      } else if (state.pos == 'docs') {
        let default_docs = "vulhub"
        let matches = /^#\/docs\/([a-z0-9\-\_]+)\/$/i.exec(location.hash)
        if (matches) {
          default_docs = matches[1]
        }
        actions.load_docs(default_docs)
      } else {
        return state
      }
    },
    go: (state, actions, url) => {
      history.pushState({}, null, url)
      state.pos = router()
      actions.init()
    },
    load_vuln: (state, actions, vuln) => {
      state.vuln = vuln
      nanoajax.ajax({url: `vulhub/${vuln.path}/README.md`}, (code, md) => {
        let html = marked(md, {sanitize: true})
        actions.render(parser(vuln.path, html))
      })
      return state
    },
    load_docs: (state, actions, name) => {
      nanoajax.ajax({url: `documents/${name}.md`}, (code, md) => {
        if(md && code == 200) {
          let html = marked(md, {sanitize: false})
          actions.render(html)
        }
      })
    },
    render: (state, actions, html) => {
      state.html = html
      actions.finishLoading()
      return state
    },
    search: (state, actions, keyword) => {
      state.repo_list = filter(state.repositories, (vuln, i) => {
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
    },
    startLoading: (state, actions) => {
      NProgress.start()
    },
    finishLoading: (state, actions, e) => {
      NProgress.done()
    }
  }
}, document.getElementById("app"))