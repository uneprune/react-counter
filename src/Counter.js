//KOMPONTENT KLASOWY

import React, { Component } from 'react';
import ButtonsPanel from './ButtonsPanel';
import CounterDisplay from './CounterDisplay';
import Step from './Step';

class Counter extends Component {

    constructor(props) {
        super(props);

        let initValue = 0;
        let stepInitValue = 1;

        if(!isNaN(this.props.initValue)){
            initValue = parseInt(this.props.initValue)
        }

        this.state = {
            counterValue: initValue,
            stepValue: stepInitValue,
        };
    }

    addStepValue = () => {
        this.setState(prevState=>{
            return({counterValue: prevState.counterValue + this.state.stepValue})
        });
    }

    changeStepValue = event => {
        this.setState({stepValue: (parseInt(event.target.value))})
    }

    reset = resetBool => {
        if(resetBool){
            this.setState({counterValue: 0})
        } else {
            this.setState({counterValue: this.props.initValue})
        }
    }

    render() { //po każdym uptade stanu wywołuje się znów render; ponowne wywołanie rendera możliwe jest tylko przez uptade stanu
        return(
            <div className='counter'>
                <CounterDisplay counterNumber={this.state.counterValue} />
                <ButtonsPanel changeValue={this.addStepValue} resetValue={this.reset} stepTextValue={this.state.stepValue}/>
                <Step changeStepValue={this.changeStepValue} />
            </div>
        );
    }
}

export default Counter;