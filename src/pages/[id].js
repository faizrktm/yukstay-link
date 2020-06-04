import Viewing from 'components/Rate/Viewing';
import Page from 'components/Page';
import { TranslateProvider } from 'helper/translate';

const Rate = ({ language, name }) => {
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
      language: 'en',
      name: 'Faiz Azmi Rekatama'
    },
  }
}

export default Rate;
