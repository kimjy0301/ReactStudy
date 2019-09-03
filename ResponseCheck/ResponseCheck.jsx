import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
class ResponseCheck extends Component {

    state = {
        state: 'waiting',
        message: '클릭하여 시작하세요.',
        result: [],
    };
    timeout;
    startTime;
    endTime;

    onClickScreen = () => {
        const { state, message, result } = this.state;

        if (state === 'waiting') {
            this.setState({
                state: 'ready',
                message: '초록색이 되면 클릭하세요.'
            });

            this.timeout = setTimeout(() => {
                this.setState({
                    state: 'now',
                    message: '지금 클릭하세요'
                })
            }, Math.floor(Math.random() * 1000) + 2000);
            this.startTime = new Date();
        }
        else if (state === 'ready') { // 이때 클릭하며 미리 클릭
            this.setState({
                state: 'waiting',
                message: '너무 빨리 클릭했습니다.'
            })
            clearTimeout(this.timeout);
        }
        else if (state === 'now') { //반응속도 체크
            this.endTime = new Date();
            this.setState((prevState) => {
                return {
                    state: 'waiting',
                    message: '클릭해서 시작하세요.',
                    result: [...prevState.result, this.endTime - this.startTime],
                };
            });

            console.log(this.state.result);
        }
    };

    renderAverage = () => {
        return this.state.result.length === 0 ? 0 : this.state.result.reduce((a, c) => a + c) / this.state.result.length;
    }
    onClickReset = () => {
        this.setState({
            result: [],
            state: 'waiting',
            message: '초기화 성공! 클릭해서 시작하세요.',
        })
    }

    render() {
        return (
            <>
                <div id="screen" className={this.state.state} onClick={this.onClickScreen} >
                    {this.state.message}
                </div>
                <div>평균시간 : {this.renderAverage()}ms
                </div>
                <button onClick={this.onClickReset}>
                    리셋
                </button>
            </>
        )

    }
}

export default hot(module)(ResponseCheck);