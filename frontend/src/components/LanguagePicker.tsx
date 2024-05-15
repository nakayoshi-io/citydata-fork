import React from 'react';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useTranslation } from 'react-i18next';

const LanguagePicker: React.FC = () =>  {  
  const { i18n } = useTranslation();
  return(
    <ButtonGroup aria-label="Pick a language">
      <Button variant={i18n.resolvedLanguage === 'en' ? 'primary' : 'secondary'} type="submit" onClick={() => i18n.changeLanguage("en")}>🇺🇸</Button>
      <Button variant={i18n.resolvedLanguage === 'jp' ? 'primary' : 'secondary'} type="submit" onClick={() => i18n.changeLanguage("jp")}>🇯🇵</Button>
    </ButtonGroup>
  );
};

export default LanguagePicker;
