import React from 'react';
import '../assets/scss/layout/Header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <h1><Link to={ '/' }>Header</Link></h1>
        </header>
    );
}