import React from 'react';

import id from 'lang/id.json';
import en from 'lang/en.json';

const dictionary = {
  id,
  en,
};

/**
 *
 * @param {string?} lang either id or en
 * if lang is falsy, default language is english (en);
 */
function translate(lang){
  return function(key) {
    return dictionary[lang || 'en'][key] || key;
  }
}

/**
 *
 * @param {{ children: node, lang: string? }} props
 * This uses Context API to serve t function for any
 * components.
 * Ideally put it on highest order of page or globally on _app.
 */

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
