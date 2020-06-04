import Error from 'next/error';
import { Box } from 'grommet';

import RateViewing from 'components/Tenant/RateViewing';
import ScheduledViewing from 'components/Tenant/ScheduledViewing';
import Page from 'components/Page';
import Contact from 'components/Contact';
import { TranslateProvider } from 'helper/translate';

const Rate = ({ language, name, errorCode }) => {
  if(errorCode){
    return <Error statusCode={errorCode} />
  }
  return (
    <Page title="Viewing Report" username={name}>
      <TranslateProvider lang={language}>
        <ScheduledViewing />
        <Box margin={{ top: '14px' }}>
          <RateViewing />
        </Box>
        <Contact />
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
      language: 'id',
      name: 'Faiz Azmi Rekatama'
    },
  }
}

export default Rate;
