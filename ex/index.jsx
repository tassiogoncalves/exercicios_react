import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
  <Family>
    <Member name="Tássio" lastName="Gomes"/>
  </Family>
  ,
  document.getElementById('app'))
