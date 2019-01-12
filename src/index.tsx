import * as React from 'react'
import { FunctionComponent } from 'react'
import * as ReactDOM from 'react-dom'

const App: FunctionComponent<{}> = () => (
	<div>
		hello world!
	</div>
)

ReactDOM.render(<App />, document.getElementById('root'))