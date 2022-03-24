import React, { useState } from 'react';
import './assets/scss/App.scss';
import Emaillist from './Emaillist';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';
import data from './assets/json/data.json';

const App = () => {
  const [emails, setEmails] = useState(data);
  // const [keyword, setKeyword] = useState("");

  const NotifyKeywordChange = function(kw) {
    // setKeyword(kw);
    setEmails(data.filter(e => e.firstName.indexOf(kw) != -1 || e.lastName.indexOf(kw) != -1 || e.email.indexOf(kw) != -1));
  }

  return (
    <div className={ 'App' }>
        <RegisterForm />
        <Searchbar callback={ NotifyKeywordChange }/>
        <Emaillist emails={ emails }/>
    </div>
  );
}

export default App;