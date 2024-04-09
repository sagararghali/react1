
import PropTypes from 'prop-types'
export default function Navbar(props) {

  
  
  return ( //return vitra ko sab jsx ho in which can write code ko js inside it
<div >
       <nav className={`navbar navbar-expand-lg navbar-${props.mood} bg-${props.mood}` } > 
  <div className="container-fluid " >
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.homepage}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.link}</a>

        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{backgroundColor:props.mood==='light'?'white':'gray', color:props.mood==='light'?'black':'white'}}/>
        <button className="btn btn-outline-success" type="submit">Search</button>

        <div className={`colorbutton mx-2 my-1 `}>
           {/* making the text visible with ternary operator(?) */}
  <button className="form-check-label" type='button' onClick={props.click} >{props.hi}</button>
</div>

      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
Navbar.propTypes = { //the value or datetypes of given variables can only be string 
 title: PropTypes.string.isRequired,
 homepage:PropTypes.string.isRequired,
 link:PropTypes.string.isRequired
}
Navbar.defaultProps = { //if the value of title homepage and link is not defined then it will automatically give the below values
  title: 'Stranger',
  homepage:"ghar",
  link:"interconnect"
};