// import { Link, Route, Routes } from "react-router-dom";
// import PaysDeatail from "./PaysDetail";


const Header = () => {
  return (
    <div>
        <header className="heder">
        <div className="container divContianer">
            <div className="d-flex justify-content-between flex-wrap">
                {/* <Link to="/PaysDetail">Where hu in thesdfg world</Link> */}
                <button className="myDark border-0 bg-light">
                    <i className="bi bi-moon"></i><span>Dark Mode</span>
                </button>
            </div>
        </div>
    </header>

      {/* <Routes>
        <Route path="/PaysDetail" element={PaysDeatail}/>
      </Routes> */}
    </div>
  )
}

export default Header;
