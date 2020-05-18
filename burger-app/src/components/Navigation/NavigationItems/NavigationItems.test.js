import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import NavigationItems from './NavigationItems'
import NavigationItem from './NavigationItem/NavigationItem'


//** shallow render react component but not deeply **

//enzyme
configure({ adapter: new Adapter() })

//describe,it,expect and other functions in this page are JEST default methods
describe('<NavigationItems />', () => {

    let wrapper

    beforeEach(()=>{
        wrapper = shallow(<NavigationItems />)
    })

    //test1
    it('should render two <NavigationItem /> elements if not authenticated', () => {
        //my expection is navigation items except LOGOUT cas when app is initilized we don't have Auth
        expect(wrapper.find(NavigationItem)).toHaveLength(2)
    })

    it('should render three <NavigationItem /> elements if authenticated', () => {
        wrapper.setProps({isAthenticated: true})
        //my expection is navigation items except LOGOUT cas when app is initilized we don't have Auth
        expect(wrapper.find(NavigationItem)).toHaveLength(3)
    })

    it('should render Logout <NavigationItem /> element if authenticated', () => {
        wrapper.setProps({isAthenticated: true})
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true)
    })


})