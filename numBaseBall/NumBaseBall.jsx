import React, { Component, createRef } from 'react';
import { hot } from 'react-hot-loader'
import Try from './Try';

function getNumbers() {

    const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];

}

class NumBaseBall extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: []  //배열에 push사용하면 안됨
    }


    onSubmitForm = (e) => {
        console.log('1');
        e.preventDefault();

        this.setState((prevState) => {
            return {
                tries: [...prevState.tries, { try: this.state.value, result: '결과' }],
                value: '',
            }
        });
        this.inputRef.current.focus();

    }
    onChangeInput = (e) => {
        this.setState({
            value: e.target.value
        })

    }

    inputRef = createRef();


    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm} >
                    <input ref={this.inputRef} maxLength={4} value={this.state.value} onChange={this.onChangeInput}></input>
                </form>
                <div>시도: {this.state.tries.length}</div>
                <ul>
                    {this.state.tries.map((v, i) => {
                        return (
                            <Try key={i} tryInfo={v} />
                        );
                    })}
                </ul>
            </>
        );
    }


}

export default hot(module)(NumBaseBall);