import React from 'react'

const Clock01 = () => {
    const date = new Date();

    let hours = date.getHours();
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);
        
    let session = 'AM';
    if (hours >= 12) {
        session = 'PM';
    }
    hours = ('0' + hours).slice(-2);

    return (
        <div>{ hours }:{ minutes }:{ seconds } { session }</div>
    );
}

export default Clock01;