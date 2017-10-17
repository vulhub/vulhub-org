import './scss/index.scss'
import { h, app } from "hyperapp"

import { Hero } from "./views/hero"
import { Body } from "./views/body"
/** @jsx h */

app({
  state: {
    location: location.hash || "#/",
  },
  view: (state, actions) => {
    return (
      <main>
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
    }
  }
})