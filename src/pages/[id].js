import React from 'react';

import Viewing from 'components/Rate/Viewing';
import { TranslateProvider } from 'helper/translate';

const Rate = ({ language }) => {
  return (
    <TranslateProvider lang={language}>
      <div>
        <Viewing />
      </div>
    </TranslateProvider>
  );
};

export default Rate;
