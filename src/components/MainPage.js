import React from 'react';
import {Link} from 'react-router-dom'

export default function MainPage() {
  return <div>
    <h1>Main page</h1>
    <Link to="/login" >залогиниться</Link>
  </div>

  // return React.createElement('h1', {children: 'Main page'})
}