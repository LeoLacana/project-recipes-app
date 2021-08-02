import React from 'react';

function TelaDeReceitaEmProgresso() {
  const getApi = () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    .then((data) => data.json())
    .then((e) => Object.entries(e)[0][1][0]).then((e) => console.log(e));

  getApi();

  return (
    <div>
      { }
    </div>
  );
}

export default TelaDeReceitaEmProgresso;
