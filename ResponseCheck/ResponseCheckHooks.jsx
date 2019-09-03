import React, { useState, useRef } from 'react';
import { hot } from 'react-hot-loader';


const ResponseCheckHooks = () => {
    const [state, setState] = useState('waiting');
    const [message, setMessage] = useState('클릭하여 시작하세요');
    const [result, setResult] = useState([]);

    const timeout = useRef(null);
    const startTime = useRef();
    const endTime = useRef();

    const onClickScreen = () => {
        if (state === 'waiting') {
            setState('ready');
            setMessage('초록색이 되면 클릭하세요.');

            timeout.current = setTimeout(() => {
                setState('now');
                setMessage('지금 클릭하세요')
            }, Math.floor(Math.random() * 1000) + 2000);
            startTime.current = new Date();
        }
        else if (state === 'ready') { // 이때 클릭하며 미리 클릭
            setState('waiting');
            setMessage('너무 빨리 클릭했습니다.');
            clearTimeout(timeout.current);
        }
        else if (state === 'now') { //반응속도 체크
            endTime.current = new Date();

            setState('waiting');
            setMessage('클릭해서 시작하세요.');
            setResult((prevState) => {
                return [...prevState, endTime.current - startTime.current]
            });
        }
    }

    const renderAverage = () => {
        return result.length === 0 ? 0 : result.reduce((a, c) => a + c) / result.length;
    }

    const onClickReset = () => {
        setResult([]);
        setState('waiting');
        setMessage('초기화 성공! 클릭해서 시작하세요');
    }

    return (
        <>
            <div id="screen" className={state} onClick={onClickScreen} >
                {message}
            </div>
            <div>평균시간 : {renderAverage()}ms
                </div>
            <button onClick={onClickReset}>초기화</button>
        </>
    )

}
export default hot(module)(ResponseCheckHooks);