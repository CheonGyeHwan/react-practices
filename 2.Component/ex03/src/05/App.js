import React, { useRef } from 'react';
import './assets/scss/App.scss';

export default function App() {

    const outterRef = useRef(null);
    const innerRef = useRef(null);

    return (
        <div
            ref={ outterRef }
            className={'App'}
            onScroll={ e => console.log(outterRef.current.clientHeight," : ", outterRef.current.scrollTop, " : ", innerRef.current.clientHeight) }>
            <div
                ref={ innerRef }>
                <ul>
                    { Array.from({length: 100}, (_, i) => i+1).map(e => 
                        <li key={ e }>
                            { `아이템 ${ e } 입니다.` }
                        </li>
                    ) }
                </ul>
            </div>
        </div>
    );
}