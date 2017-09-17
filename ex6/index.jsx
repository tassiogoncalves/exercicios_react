import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
  <Family lastName="Gomes">
    <Member name="Tássio" />
    <Member name="José" />
    <Member name="Gonçalves" />
  </Family>
  ,
  document.getElementById('app'))
