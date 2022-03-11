import React from 'react';

const Clock = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    const html = 
        "<span>" +
        ('0' + (hours > 12 ? hours - 12 : hours)).slice(-2) + 
        " : " +
        ('0' + minutes).slice(-2) + 
        " : " +
        ('0' + seconds).slice(-2) + 
        " " +
        (hours < 12 ? 'AM' : 'PM') + 
        "</span>";

    return (
        /*
            comment01: 컴포넌트 안이기 때문에 자바스크립트 구문이 가능하다.
        */
        <div
            /*
                comment02: 여기서도 다중행 주석이 가능하다. : 비추!
            */
            className='clock'
            title='시계'
        >
            { ('0' + (hours > 12 ? hours - 12 : hours)).slice(-2) }
            { ' : ' }

            {/*
                comment03: 이런 방식으로 표현식이 실행되는 블록안에서 주석을 달아야 한다. : 추천!
            */}

            { ('0' + minutes).slice(-2) }
            { ' : ' }

            {/*
                JSX는 HTML이 아니다.!! <!-- --> 주석은 사용할 수 없다.
            */}

            { ('0' + seconds).slice(-2) }
            { ' ' }

            // Comment04: JSX 안에서 이 주서글 사용하면 그대로 화면에 나온다.
            { (hours < 12 ? 'AM' : 'PM') }
        </div>
    );
}

export default Clock;