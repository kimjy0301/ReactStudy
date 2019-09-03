import React, { Component } from 'react';


//클래스의 경우 생성자 -> 렌더링 -> ref 설정 -> componentDidMount -> setState/props 변경 -> shouldComponentUpdate -> 리렌더링 -> componentDidUpdate
//

class RSP extends Component {

    // https://en.pimg.jp/023/182/267/1/23182267.jpg

    state = {
        result: '',
        score: 0,
        imgCoord: 0,
    };

    componentDidMount(){

    };//컴포넌트가 그려진후 발생


    componentDidUpdate(){

    }//컴포넌트가 리렌더링 후에 발생 

    componentWillUnMount(){
        
    }; //컴포넌트가 제거되기 직전 발생


    onClickBtn(p){
    };

    render() {
        const { result, score } = this.state;
        return (

            <>
                <div id="computer" style={{ background: 'url(https://en.pimg.jp/023/182/267/1/23182267.jpg)' }}></div>
                <div>
                    <button id="rock" className="btn" onClick={() => onClickBtn('바위')}>바위</button>
                    <button id="scissor" className="btn" onClick={() => onClickBtn('가위')}>가위</button>
                    <button id="paper" className="btn" onClick={() => onClickBtn('보')}>보</button>
                </div>
                <div>{result}</div>
                <div>현재 {score}점</div>

            </>
        );
    }
}

export default RSP;
