import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        console.log('constuctor')
    }
    static getDerivedStateFromProps() {
        console.log('getDedrivedStateFromProps');
        return null
    }
    render() {
        return (
            <div>

            </div>
        )
    }
    componentDidMount() {
        console.log('conponentDidMount');
    }
}
