import React from 'react';

import Container from 'react-bootstrap/Container';

import ListTokyoCities from './components/ListTokyoCities';
import { useTranslation } from 'react-i18next';
import LanguagePicker from './components/LanguagePicker';

const App: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Container className="p-3">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <h1 className="header">
          {t('main.title')}
        </h1>
        <LanguagePicker />
      </Container>
      <h2>{t('prefectures.tokyo')}</h2>
      <ListTokyoCities />
    </Container>
  );
};

export default App;
