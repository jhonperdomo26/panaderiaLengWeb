// src/pages/Inicio.js
<<<<<<< HEAD
import { Carousel } from 'antd';
=======
import React from 'react';
import { Carousel, Card, Col, Row } from 'antd';
>>>>>>> origin/main
import Imagen1 from '../img/PanAlinado.jpg';
import Imagen2 from '../img/Pan3.jpg';
import Imagen3 from '../img/Pan2.jpg';
import Imagen4 from '../img/Torta.avif';
import Croissant from '../img/croissant.png';
import Muffin from '../img/muffin.png';
import Pandequeso from '../img/pandequeso.png';
import Tartadefresa from '../img/tartadefresa.png';
import Donadevainilla from '../img/donavainilla.png';
import Brownie from '../img/brownie.png';
import Tartademanzana from '../img/tartademanzana.png';
import Cheesecake from '../img/cheesecake.png';

import styled from '@emotion/styled';
const contentStyle = {
  height: '550px',
  color: '#fff',
  lineHeight: '250px',
  textAlign: 'center',
  background: '#364d79',
};

const Imagen = styled.img`
  height: 100%;
  width: 100%;
  display: block;
`

// Lista de productos de pastelería
const products = [
  { title: 'Croissant', img: Croissant },
  { title: 'Muffin de Chocolate', img: Muffin },
  { title: 'Pan de Queso', img: Pandequeso },
  { title: 'Tarta de Fresa', img: Tartadefresa },
  { title: 'Dona de Vainilla', img: Donadevainilla },
  { title: 'Brownie', img: Brownie },
  { title: 'Tarta de Manzana', img: Tartademanzana },
  { title: 'Cheesecake', img: Cheesecake }
];

const Inicio = () => (
  <div>
    <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>
        <Imagen src={Imagen1}></Imagen>  
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <Imagen src={Imagen2}></Imagen>  
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <Imagen src={Imagen3}></Imagen>  
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <Imagen src={Imagen4}></Imagen>  
      </h3>
    </div>
  </Carousel>

    {/* Sección de tarjetas de productos */}
    <div style={{ padding: '30px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
    <h2 style ={{ textAlign: 'left', marginBottom: '30px' }}>Productos Destacados</h2>
      <Row gutter={[16, 16]} justify="center">
        {products.slice(0, 4).map((product, index) => (
          <Col span={4} key={index}>
            <Card
              hoverable
              cover={<img alt={product.title} src={product.img} />}
            >
              <Card.Meta title={product.title} description="Delicioso y recién horneado" />
            </Card>
          </Col>
        ))}
      </Row>
      <Row gutter={[16, 16]} justify="center" style={{ marginTop: '30px' }}>
        {products.slice(4, 8).map((product, index) => (
          <Col span={4} key={index}>
            <Card
              hoverable
              cover={<img alt={product.title} src={product.img} />}
            >
              <Card.Meta title={product.title} description="Delicioso y recién horneado" />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  </div>
);

export default Inicio;
