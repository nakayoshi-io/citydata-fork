import React from 'react';
import ListCities from './ListCities';

function ListTokyoCities() {
  const [TokyoCitiesList, setTokyoCitiesList] = React.useState(null);
  
  React.useEffect(() => {
    fetch("api/list.json", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setTokyoCitiesList(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {TokyoCitiesList && <div><ListCities cities={TokyoCitiesList}></ListCities></div>}
    </div>
  );
}

export default ListTokyoCities;
