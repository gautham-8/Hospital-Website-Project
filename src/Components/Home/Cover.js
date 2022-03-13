import React from 'react'
import './home.css'

function Cover() {
  return (
    <div className="bg-grey">
        <img className="img-fluid rounded mx-auto d-block" src="https://scopeblog.stanford.edu/wp-content/uploads/2020/12/New-Stanford-Hospital-courtesy-of-SHC-1152x578-1.jpg" alt="" />
        <p className="display-5 text-center head-clr mb-3 pt-1 pb-1">"Every Kind of Care <br/> for Every Kind of Patient"</p>
    </div>
  )
}

export default Cover