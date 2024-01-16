
import { useTodoContext } from "./ApiContexte"


const Selects = () => { 
  const {  paysSelect,
    searchTerm, 
    handleChange,
    handleSearch,
    countriesToDisplay } = useTodoContext()

  return (
    <div className="container-fluid">
      <form className="d-flex mt-5 justify-content-between flex-wrap">
        <div className="d-flex">
          <input className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchTerm}
            onChange={handleSearch} />
        </div>
        <div>
          <select
            name="filter"
            value={paysSelect}
            onChange={handleChange}
            className="col-6 col-lg-2 border-0 p-2 bg-white w-100"
            id="mySelect"
          >
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </form>

      <div className="mt-3 container-fluid">
        <div className="row">
        {countriesToDisplay.map((country) => {
          const { area, region, name, flags, capital, population } = country;
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
              {/* <Pays countries={countries} /> */}

            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};


export default Selects;
