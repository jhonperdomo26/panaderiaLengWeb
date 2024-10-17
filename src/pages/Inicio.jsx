// src/pages/Inicio.js
import { Carousel } from 'antd';
import Imagen1 from '../img/PanAlinado.jpg';
import Imagen2 from '../img/Pan2.jpg';
import Imagen3 from '../img/Pan3.jpg';
import Imagen4 from '../img/Torta.avif';
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

const Inicio = () => (
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
);
export default Inicio;