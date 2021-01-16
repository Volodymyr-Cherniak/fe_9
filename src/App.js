import React from 'react';
import Display from './Display';

function App() {
    const state = [
        {id: 1, name: 'Alice', lastName: 'Murrey', age: 22, sity: 'LA', stats: {active: true}},
        {id: 1, name: 'Bob', lastName: 'Murrey', age: 25, sity: 'SA', stats: {active: true}},
        {id: 1, name: 'Rayan', lastName: 'Smith', age: 30, sity: 'Lviv', stats: {active: true}},
    ];

    const date = new Date().getFullYear();
    const people = 'New students';


    return (
        <div>
            <h2>{people + ' in ' + date} </h2>
            <p>{state.map(el => <h4>{`${el.name} ${el.lastName}, has ${el.age}, live in ${el.sity}`}</h4>)}</p>

            <div>hello world</div>
            <Display/>
            <ul>
                <li>first</li>
                <li>second</li>
                <li>third</li>
                <li>fourth</li>
                <li>
                <video src="https://www.youtube.com/watch?v=E7_U8eJdVY4">video</video>
                </li>

            </ul>
        </div>
    )
}

export default App;