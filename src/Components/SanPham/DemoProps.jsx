import React, { Component } from 'react'
import data from '../data/data.json'
import Phim_RFC from './Phim_RFC';
export default class DemoProps extends Component {
    constructor(props) {
        super.props;
        this.state = {
            mangPhim: data
        }
    }

    renderPhim = () => {
        return this.state.mangPhim.map((phim, index) => {
            return (
                <div key={index}>
                    <Phim_RFC />
                </div>
            )
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderPhim()}
                </div>
            </div>
        )
    }
}