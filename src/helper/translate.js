import React from 'react';

import id from 'lang/id.json';
import en from 'lang/en.json';

const dictionary = {
  id,
  en,
};

function translate(lang){
  return function(key) {
    return dictionary[lang || 'en'][key] || key;
  }
}

const TranslateContext = React.createContext();

function TranslateProvider({ children, lang }){
  return(
    <TranslateContext.Provider value={{
      t: translate(lang),
    }}>
      {children}
    </TranslateContext.Provider>
  )
}


export { TranslateProvider, TranslateContext };
