/* eslint-disable react/prop-types */
import React from "react";

const Products = ({ produto }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    if (produto !== null)
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((json) => setDados(json));
  }, [produto]);

  if (dados === null) return null;
  return (
    <>
      <h1>{dados.nome}</h1>
      <h3>{dados.preco}</h3>
    </>
  );
};

export default Products;
