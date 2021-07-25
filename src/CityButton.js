import React, { useState, useEffect } from 'react';

function CityButton() {
  const [city, setCity] = useState('');

  
  useEffect(() => {
    const URL = `https://bd-london-mini-guide.herokuapp.com/cities`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(`data: ${data}`)
        setCity(data)
      });    
  }, []);

  const handleClick = () => console.log(`You clicked me!`);

  return (
    <div>
      {city.map(cityName => {
        return (
          <button onClick={handleClick}>{cityName}</button>
        )})
      }
    </div>
  )
};

export default CityButton
