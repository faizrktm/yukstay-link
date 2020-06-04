import Error from 'next/error';

import Viewing from 'components/Rate/Viewing';
import Page from 'components/Page';
import { TranslateProvider } from 'helper/translate';

const Rate = ({ language, name, errorCode }) => {
  if(errorCode){
    return <Error statusCode={errorCode} />
  }
  return (
    <Page title="Viewing Report" username={name}>
      <TranslateProvider lang={language}>
        <Viewing />
      </TranslateProvider>
    </Page>
  );
};

export async function getServerSideProps(context){
  const { params } = context;
  console.log(params.id);
  return {
    props: {
      errorCode: false,
      language: 'en',
      name: 'Faiz Azmi Rekatama'
    },
  }
}

export default Rate;
