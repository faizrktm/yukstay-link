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

export async function getServerSideProps(context) {
  const { params } = context;
  console.log(params.id); // use params.id to fetch api decode.
  return {
    props: {
      language: 'en',
    }
  }
}

export default Rate;
