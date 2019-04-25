import React, { Component } from 'react'
import './Backdrop.css'
const stroke1 = require('../images/Strokes-V1.gif')
const stroke2 = require('../images/Strokes-V2.gif')
const stroke1dup = require('../images/Strokes-V1-dup.gif')
const stroke2dup = require('../images/Strokes-V2-dup.gif')

export default class Backdrop extends Component {
    constructor(props){
        super(props)
        this.state = {
            strokeDisplay: '',
            strokeDisplayOverlay: '',
            strokeDisplay2: '',
            strokeDisplay2Overlay: ''
        }
    }
    componentDidMount(){
        this.setState({strokeDisplay: stroke2})
        setTimeout(() => {
            this.setState({strokeDisplayOverlay: stroke2dup})
        },800)
        setTimeout(() => {
            this.setState({strokeDisplay2: stroke1})
            setTimeout(()=>{
                this.setState({strokeDisplay2Overlay: stroke1dup})
            },500)
        },8000)
    }
    render() {
        return (
        <div id="backdrop">
            <div>
                <img 
                    id="stroke1"
                    src={this.state.strokeDisplay}/>
                <img 
                    id="stroke1over"
                    src={this.state.strokeDisplayOverlay}/>
                <img 
                    id="stroke2"
                    src={this.state.strokeDisplay2}/>
                <img 
                    id="stroke2over"
                    src={this.state.strokeDisplay2Overlay}/>
            </div>
        </div>
        )
    }
}
