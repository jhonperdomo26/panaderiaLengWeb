import '../css/main.css/';
<<<<<<< HEAD
import Cabecera from '../components/Cabecera';

const Nosotros = () => {
  return (
    <div>
      <Cabecera />
        <h1>Sobre Nosotros</h1>
        <p>Bienvenido a la sección de Sobre Nosotros.</p>
    </div>
  )
}
=======
import React from 'react';
import { Divider } from 'antd';
import styled from '@emotion/styled';
>>>>>>> fe0f93c25d27f3b032f815012a09c5263a50a668

const H1 = styled.h1`
  text-align: center;
`
const Nosotros = () => (
  <>
    <h1>Sobre Nosotros</h1>
    <h2>Bienvenido a la sección de Sobre Nosotros.</h2>
    <Divider style={{borderWidth: '2px'}}></Divider>
    <H1>Historia y Origen</H1>
    <p>
      La Panadería Horneados se fundó en 2019 en la ciudad de Neiva, Huila, un lugar donde la cultura y la tradición culinaria se entrelazan con la calidez de su gente. La idea de abrir la panadería 
      nació en la mente de Ana y Juan, una pareja de jóvenes emprendedores que, después de años de soñar con un negocio propio, decidieron dar el salto y compartir su amor por la cocina.
    </p>
    <p>
      Horneados comenzó con una pequeña selección de panes artesanales, que rápidamente ganaron popularidad entre los habitantes de la zona. La combinación de recetas tradicionales y un toque innovador 
      en su preparación hizo que sus productos se destacaran. Con el tiempo, la panadería amplió su oferta, incluyendo tortas para celebraciones, desayunos variados y deliciosas bebidas, desde aromáticos
      cafés hasta refrescantes batidos.
    </p>
    <p>
      A lo largo de los años, Horneados ha mantenido su compromiso con la calidad y la satisfacción del cliente. Laura y Andrés creen que cada cliente es parte de la familia, y por eso se esfuerzan por ofrecer 
      un servicio cálido y acogedor. La panadería ha sido reconocida en Neiva no solo por la calidad de sus productos, sino también por su participación en eventos comunitarios y su apoyo a iniciativas locales.
    </p>
    <Divider style={{borderWidth: '2px'}}></Divider>
    <H1>Valores</H1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="left">Left Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="right">Right Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="left" orientationMargin="0">
      Left Text with 0 orientationMargin
    </Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="right" orientationMargin={50}>
      Right Text with 50px orientationMargin
    </Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
  </>
);
export default Nosotros;