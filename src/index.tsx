import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Home } from './home'
import '../style/main.less'

ReactDOM.render(
<BrowserRouter>
<Home />
</BrowserRouter>,
 document.getElementById('app')
)