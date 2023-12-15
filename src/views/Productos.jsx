import React from 'react';
import { Button } from 'react-bootstrap';
import Cardb from '../components/Cardb';

import { Form } from 'react-bootstrap';

const Productos = () => {

  return (
    <div className='cont-productos'>
      <div className="find-product">
        <form className="search" action="">
          <Form.Select aria-label="Default select example" >
            <option value="id"> Ordenar </option>
            <option value="price-lowest">Precio menor a mayor</option>
            <option value="price-highest">Precio mayor a menor</option>
          </Form.Select>
          <Form.Control placeholder="Buscar" />
        </form>
      </div>
      <div className="galeria  p-3 mt-5">
        <div className="card-g" style={{ width: '100%' }}>
          <Cardb

          />
        </div>
      </div>
    </div>
  );
};

export default Productos;
