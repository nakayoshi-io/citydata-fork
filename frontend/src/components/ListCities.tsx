import React from 'react';
import SimpleButton from './SimpleButton';
import { useTranslation } from 'react-i18next';

type Props = { cities: string[] }

function ListCities(props: Props) {
  const { t } = useTranslation();

  let cityButtons = [];
  for(let i = 0; i < props.cities.length; i++){
    cityButtons.push(<SimpleButton text={t("cities." + props.cities[i])} id={props.cities[i]}/>)
  }

  return (
    <div>
      {cityButtons && <div>{cityButtons}</div>}
    </div>
  );
}

export default ListCities;
