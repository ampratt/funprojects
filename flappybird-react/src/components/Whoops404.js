import React from 'react'
// import ShowErrors from './containers/ShowErrors'
// import '../stylesheets/index.scss'

export const Whoops404 = ({ location }) =>
  <div className="whoops-404">
    <h1>Whoops, route not found</h1>
    <p>Cannot find content for {location.pathname}</p>
  </div>