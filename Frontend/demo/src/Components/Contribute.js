import React from 'react'
import './Styles.css';

const Contribute = () => {
  return (
    <div className='container'>
      <div className='content-contri'>
      <h1 id = "contribute">Contribute</h1>
      <p>
      Do you have notes, solved papers, or resources that could benefit others? We welcome your contributions 
      to make Pluto a more robust and diverse academic hub. By sharing your resources, you not only help fellow students 
       succeed but also become a part of a growing community that thrives on mutual support and collaboration.
       </p><br></br>
            <p>
       Join us in making education more accessible for everyone. Your contribution, no matter how small,
       can make a big difference!
      </p>
      <center><a href = "https://forms.gle/WWSxknJ7NQTb4Xiu6" target = '_blank' rel="noopener noreferrer" className='btn'>Contribute</a></center>
      </div>
    </div>
  )
}

export default Contribute;