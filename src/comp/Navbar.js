import React from 'react'

export default function Navbar(props) {

  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <h5 className="navbar-brand">{props.title}</h5>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                </ul>
                <form className="d-flex">
                <div className="form-check form-switch">
                    <input className="form-check-input" onClick={props.target} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                </div>
                </form>
            </div>
        </div>
    </nav>
    </div>
  )
}
