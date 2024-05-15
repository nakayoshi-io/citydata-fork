import React from 'react';
import SimpleButton from './SimpleButton';

type Props = { cities: string[] }

function ListCities(props: Props) {
  let cityButtons = [];
  for(let i = 0; i < props.cities.length; i++){
    cityButtons.push(<SimpleButton text={props.cities[i]} id={props.cities[i]}/>)
  }

  return (
    <div>
      {cityButtons && <div>{cityButtons}</div>}
    </div>
  );
}

export default ListCities;
