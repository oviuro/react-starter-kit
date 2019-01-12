import { shallow } from 'enzyme'
import * as React from 'react'
import { Index } from '../App'

it('should be true', () => {
	const app = shallow(<Index />).contains('hello world!')
	expect(app).toBeTruthy()
})