import React from 'react';

import CompleteTask from 'components/Rate/CompleteTask';
import { TranslateProvider } from 'helper/translate';

const Rate = ({ language }) => {
  return (
    <TranslateProvider lang={language}>
      <div>
        <CompleteTask />
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
