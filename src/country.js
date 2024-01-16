// Pays.js
import React from 'react';
import { Link } from 'react-router-dom';
const Pays = ({ countries }) => {
    return (
      <div>
        {countries.map((country, index) => (
          <div key={index}> {/* Assurez-vous d'utiliser une clé unique */}
            <Link to={`/pays/${index}`}>{country.name.common}</Link>
          </div>
        ))}
      </div>
    );
  };

export default Pays;
