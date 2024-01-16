import { createContext, useContext, useState, useEffect } from "react"

const ApiTodosContexte = createContext()

const ApiContexte = ({children}) => {
  const [pays, setPays] = useState( [] );
// Sauvegarde des pays initiaux
  const [initialPays,  setInitialPays] = useState([]);
  const [filteredPays, setFilteredPays] = useState([]);
  const [paysSelect, setSelect] = useState("");
  const [paysRegion, setPaysRegion] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // État pour stocker le terme de recherche
//   const [filteredPays, setFilteredPays] = useState([]); // État pour stocker les pays filtrés
  const ApiCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const map = await response.json();
      setPays( map );
      setInitialPays(map); // Sauvegarde des pays initiaux
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };

  useEffect(() => {
    ApiCountries();
  }, []);



  const handleChange = async (e) => {
    const selectedRegion = e.target.value;
    if (selectedRegion) {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/region/${selectedRegion}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const regionData = await response.json();
        setPaysRegion(regionData);
        setSelect(selectedRegion );

        // Mise à jour de pays.todos avec les pays de la région sélectionnée
        const filteredPays = initialPays.filter(country => country.region === selectedRegion);
        setPays( filteredPays );
      } catch (error) {
        console.error('Error fetching countries by region:', error);
      }
    } else {
      setPaysRegion([]);
      setSelect("");
    }
  };

  const handleSearch = (e) => {
    const valueInput = e.target.value.toLowerCase();
    setSearchTerm(valueInput);

    // Recherche dans la liste initiale des pays
    const results = initialPays.filter((country) =>
      country.name.common.toLowerCase().includes(valueInput.toLowerCase())
    );

    // Mettre à jour les pays filtrés
    setFilteredPays(results);
  };

  // Utiliser les pays filtrés si une recherche est en cours, sinon utiliser les pays de la région sélectionnée
  const countriesToDisplay = searchTerm ? filteredPays : pays;

  const contextValue = {
    
    pays,
    setPays,
    initialPays,
    setInitialPays,
    filteredPays,
    setFilteredPays,
    paysSelect,
    setSelect,
    paysRegion,
    setPaysRegion,
    searchTerm, 
    setSearchTerm,
    handleChange,
    handleSearch,
    countriesToDisplay
  }

  return <ApiTodosContexte.Provider value={contextValue}>{children}</ApiTodosContexte.Provider>
}
  

export const useTodoContext = () => useContext(ApiTodosContexte)

export default ApiContexte;












// import React, { useState, useEffect } from 'react';
// import { Routes, Route,  } from 'react-router-dom';
// import Pays from './Pays';
// import PaysDetail from './PaysDetail';

// const App = () => {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         const response = await fetch('https://restcountries.com/v3.1/all');
//         if (!response.ok) {
//           throw new Error('Fetch failed');
//         }
//         const data = await response.json();
//         setCountries(data);
//       } catch (error) {
//         console.error('Error fetching countries:', error);
//       }
//     };

//     fetchCountries();
//   }, []);

//   return (
//     <Routes>

//         <Route  path="/">
//           <Pays countries={countries} />
//         </Route>
//         <Route path="/pays/:id">
//           <PaysDetail countries={countries} />
//         </Route>
//     </Routes>
//   );
// };
