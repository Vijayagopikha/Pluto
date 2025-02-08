import React, {useState, useEffect} from 'react';
import './Styles.css';

const Materails = () =>
{
    const [materials,setMaterials] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetch('/materials.json')
        .then((response)=> response.json())
        .then((data) => {
            setMaterials(data.Materials);
        })
        .catch((error) => console.error('Error fetching materials:',error));
        
    }, []);
     
    const filteredmaterials = materials.filter((material) => 
        material.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return(
        <div className='container'>
            <h1 id = 'materials'>Materials</h1>
                <div className='search-btn'>
                <label htmlFor='search'>Search:</label>
                <input type='text' placeholder='Search by Subject Name' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                className='search-input'/>
                </div>
                <div className='materials-btn'>
                    {filteredmaterials.map((material,index)=>(
                        <a key = {index} href={material.link} className='btn1' target='_blank' rel='noopener noreferrer'>
                            {material.name}
                        </a>
                    ))}
            </div>
        </div>
    )
}
export default Materails;