import '../css/main.css/';
import React from 'react';
import { Divider, Layout, Flex, Row, Col} from 'antd';
import styled from '@emotion/styled';
import Imagen1 from '../img/Caballito.png';

const { Content } = Layout;

const H1 = styled.h1`
  text-align: center;
`
const Nosotros = () => (
  <>
    <Layout>
      <Content>
        <Row>
          <Col span={4}>
          </Col>
          <Col span={16}>
            <Flex align='center' justify='center' vertical>
              <H1>Historia y Origen</H1>
              <Flex align='center' justify='center'>
                <div style={{backgroundColor: 'green', width: '70%'}}>
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
                </div>
                <div style={{backgroundColor: 'blue', width: '30%', height: '100%'}}>
                  <Flex align='center' justify='center'>
                    <img src={Imagen1} alt="" style={{width: '75%'}}/>
                  </Flex>
                </div>
              </Flex>

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
            </Flex>
          </Col>
          <Col span={4}>
          </Col>
        </Row>
      </Content>
    </Layout>
  
  </>
);
export default Nosotros;