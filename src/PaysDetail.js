// PaysDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const PaysDetail = ({ countries }) => {
  const { id } = useParams();
  const country = countries[parseInt(id)]; // Utilisation de l'index pour identifier le pays

  return (
    <div>
      {country && (
        <div>
          <h2>{country.name.common}</h2>
          <p>Population: {country.population}</p>
          <p>Capitale: {country.capital}</p>
          {/* Autres détails du pays */}
        </div>
      )}
    </div>
  );
};

export default PaysDetail;
