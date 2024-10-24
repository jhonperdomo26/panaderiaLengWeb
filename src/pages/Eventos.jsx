import '../css/main.css';
import styled from '@emotion/styled';
import { Layout, Flex, Row, Col } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React from 'react';
import { Divider } from 'antd';

const H1 = styled.h1`
  margin: 1%;
  font-size: 26px;
`

const H2 = styled.h2`
  margin: 1%;
  font-size: 20px;
`

const P = styled.p`
  text-align: justify;
  margin: 0 auto;
  font-size: 16px;
  margin-top: ;
`

const ContenedorImagen = styled.div`
  width: 28%;
  height: 100%;
`


const Eventos = () => {
  return (
    <>
      <Layout>
        <Content>
          <Row style={{ margin: '5px 0px' }}>
            <H1>Eventos Especiales</H1>

            <H2>Matrimonios | Baby Showers | Aniversarios | Cumpleaños</H2>
            <Flex align='center' justify='space-evenly'>
              <div style={{ width: '68%' }}>
                <P>
                  En nuestra panadería, sabemos que los momentos importantes merecen ser acompañados de lo mejor. Ya sea un matrimonio, un baby shower, un aniversario o un cumpleaños, nuestros productos artesanales están diseñados para agregar un toque de dulzura a tus celebraciones.
                  Desde elegantes tortas de bodas hasta delicados cupcakes personalizados, creamos con pasión para que cada bocado refleje la alegría de tus momentos especiales. ¡Deja que nuestros sabores formen parte de tus recuerdos inolvidables!
                </P>
              </div>
              <ContenedorImagen>
                <Flex align='center' justify='center'></Flex>
              </ContenedorImagen>
            </Flex>


            <H1>Comida & Bebida</H1>
            <P>En nuestra panadería, no solo nos especializamos en postres; también ofrecemos una selección exquisita de comida salada y bebidas diseñadas para complementar cualquier celebración. Desde elegantes bocadillos hasta opciones refrescantes de bebidas, nuestro menú está
              pensado para satisfacer todos los gustos.
            </P>
            <P>
              Cuéntanos más sobre tu evento y crearemos un menú que se adapte a tus necesidades. ¡Haz que tu ocasión especial sea deliciosa en todos los sentidos!
            </P>

            <H1>Mesa de postres</H1>
            <P>
              Sabemos que los detalles importan, y una mesa de postres puede ser el centro de atención en cualquier celebración. Para matrimonios, cumpleaños, aniversarios o cualquier evento especial, nuestras mesas de postres están diseñadas para impresionar tanto visualmente como
              en sabor.
            </P>

            <H1>Paquete completo</H1>
            <P>
              Con nuestro Paquete Completo, nos encargamos de cada detalle para que tu evento sea un éxito. Desde el pastel perfecto hasta una deliciosa selección de bocadillos y bebidas, ofrecemos una experiencia integral que hará de tu celebración algo inolvidable.
              Nuestro equipo personaliza cada paquete según tus necesidades, para que tengas todo lo que necesitas en un solo lugar. Ya sea un matrimonio, cumpleaños, baby shower o aniversario, creamos un menú a medida, con productos frescos y de calidad, cuidando
              la presentación y el sabor en cada plato.
            </P>





          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default Eventos