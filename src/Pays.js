
import { useTodoContext } from "./ApiContexte"

import Headers from './Header';
import Selectes from './Select';

const Home = (  ) => {
  const {  pays,
    setPays,
    initialPays,
    filteredPays,
    setFilteredPays} = useTodoContext();
 
  return (
    <div>
    
      <Headers />
      <div className="container-fluid">
        <Selectes
          pays={pays}
          setPays={setPays}
          initialPays={initialPays}
          filteredPays={filteredPays} 
          setFilteredPays={setFilteredPays}
        />
        {/* Affichage des pays */}
        <div className="row mt-5">
          {filteredPays.map((ApiPays) => {
            const { area, region, name, flags, capital, population } = ApiPays;
            return (
              <div key={area} className="col-md-3 mb-3 h-50">
              
                <div className="card">
                  <img src={flags.png} className="myImage card-img-top" style={{ height: "30vh" }} alt="image" />
                  <div className="card-body myUl">
                    <h5 className="card-title mb-3">{name.common}</h5>
                    <ul className="">
                      <li className="list-group-item">
                        <span className="fw-bold">Population</span>: {population}
                      </li>
                      <li className="list-group-item bg-transparent">
                        <span className="fw-bold">Region</span>: {region}
                      </li>
                      <li className="list-group-item bg-transparent">
                        <span className="fw-bold">Capital</span>: {capital}
                      </li>
                    </ul>
                  </div>
                </div>
                
              </div>
            );
          })}
        </div>
      </div>

    
    </div>
  );
};



export default Home;

