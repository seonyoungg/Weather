import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const CityBtn = ({cities, setCity}) => {
  console.log(cities);

  return (
    <div>
      <Button variant="primary">
        Current Location
      </Button>

      {cities.map((city)=>(
        <Button variant="primary" 
                onClick={()=>setCity(item)}>
          {city}
        </Button>
      ))}
    </div>
  );
};

export default CityBtn;