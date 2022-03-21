import React from 'react';
import MyComponent from './MyComponent';

const App = function() {
    return (
        <div id="App">
            <MyComponent
                /* props01={ "문자열" } */
                props02={ 100 }
                props03={ true }
            />
        </div>
    )
};

export default App;