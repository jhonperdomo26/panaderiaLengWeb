import styled from '@emotion/styled';
import '../css/main.css/';
import { Carousel } from 'antd';
import { Layout, Flex, Row, Col } from 'antd';
import { Card } from 'antd';
import Croissant from '../img/croissant.png';
import Muffin from '../img/muffin.png';
import Pandequeso from '../img/pandequeso.png';
import Tartadefresa from '../img/tartadefresa.png';
import Donadevainilla from '../img/donavainilla.png';
import Brownie from '../img/brownie.png';
import Tartademanzana from '../img/tartademanzana.png';
import Cheesecake from '../img/cheesecake.png';

const { Content } = Layout;
const { Meta } = Card;

const H1 = styled.h1`
  font-weight: bold;
  margin: 20px;
  font-size: 26px;
`

const P1 = styled.p`
  margin: 20px;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 400;
`

const PCajaDecoracion = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  font-size: 18px;
  font-weight: bold;
  heigth: 100px;
  width: 100px;
`

const ContenOfrec = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  border-radius: 25px;
  background-color: #C29F70;
`

const HOfrec = styled.h1`
  color: white;
  font-size: 40px;
  margin: 20px;
`

const Imagen = styled.img`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const contentStyle = {
  margin: 0,
  height: '600px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const products = [
  { title: 'Croissant', img: Croissant, description: "gogogo" },
  { title: 'Muffin de Chocolate', img: Muffin, description: "gogogo" },
  { title: 'Pan de Queso', img: Pandequeso, description: "gogogo" },
  { title: 'Tarta de Fresa', img: Tartadefresa, description: "gogogo" },
  { title: 'Dona de Vainilla', img: Donadevainilla, description: "gogogo" },
  { title: 'Brownie', img: Brownie, description: "gogogo" },
  { title: 'Tarta de Manzana', img: Tartademanzana, description: "gogogo" },
  { title: 'Cheesecake', img: Cheesecake, description: "gogogo" }
];

const Matrimonios = () => (
  <>

    <Layout>
      <Content>
        <Carousel arrows infinite={false}>
          <div>
            <h3 style={contentStyle}>
              <div className='Torta3Pisos'>
                <div className='CajaDecoracion'>
                  <span className='TextoEvento'>DECORAMOS TUS</span>
                  <span className='TextoEvento'>EVENTOS ESPECIALES</span>
                </div>                
              </div>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <div className='CupcakesDecorados'>
                <div className='CajaDecoracion'>
                  <span className='TextoEvento'>DECORAMOS TUS</span>
                  <span className='TextoEvento'>EVENTOS ESPECIALES</span>
                </div>                
              </div>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <div className='PostresGourmet'>
                <div className='CajaDecoracion'>
                  <span className='TextoEvento'>DECORAMOS TUS</span>
                  <span className='TextoEvento'>EVENTOS ESPECIALES</span>
                </div>                
              </div>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <div className='GalletasPersonalizadas'>
                <div className='CajaDecoracion'>
                  <span className='TextoEvento'>DECORAMOS TUS</span>
                  <span className='TextoEvento'>EVENTOS ESPECIALES</span>
                </div>
              </div>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <div className='Decoracion'>
                <div className='CajaDecoracion'>
                  <span className='TextoEvento'>DECORAMOS TUS</span>
                  <span className='TextoEvento'>EVENTOS ESPECIALES</span>
                </div>
              </div>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>6</h3>
          </div>            
        </Carousel>

        <Row style={{ margin: '5px 0px' }}>
          <Col span={4}>
          </Col>

          <Col span={16}>
            <H1>Matrimonios Especiales</H1>
            <P1>
              En nuestra panadería, sabemos que el día de tu boda merece un toque de dulzura inolvidable. Ofrecemos productos únicos y personalizados, desde elegantes tortas de bodas hasta deliciosos cupcakes y postres finos, que harán de tu celebración un momento aún más especial.
            </P1>
            <P1>
              Nos dedicamos a crear experiencias únicas para ti y tus seres queridos, asegurando que cada detalle esté lleno de sabor y belleza. ¡Confía en nosotros para endulzar uno de los días más importantes de tu vida!
            </P1>
          </Col>

          <Col span={4}>
          </Col>
        </Row>

        <Row>
          <Col span={4}>
          </Col>
          <Col span={16}>
            <ContenOfrec>
              <HOfrec>¿Qué ofrecemos?</HOfrec>
            </ContenOfrec>
          </Col>
          <Col span={4}>
          </Col>
        </Row>

        <Row style={{ margin: '5px 0px' }}>
          <Col span={4}>
          </Col>

          <Col span={16}>
            <H1>Tortas</H1>
            <div style={{ padding: '30px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <Row gutter={[16, 16]} justify="center">
                  {products.slice(0, 4).map((product, index) => (
                    <Col span={6} key={index}>
                      <Card
                        hoverable
                        cover={<img alt={product.title} src={product.img} />}
                      >
                        <Card.Meta title={product.title} description={product.description} />
                      </Card>
                    </Col>
                  ))}
                </Row>
                <Row gutter={[16, 16]} justify="center" style={{ marginTop: '30px' }}>
                  {products.slice(4, 8).map((product, index) => (
                    <Col span={6} key={index}>
                      <Card
                        hoverable
                        cover={<img alt={product.title} src={product.img} />}
                      >
                        <Card.Meta title={product.title} description={product.description} />
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
          </Col>

          <Col span={4}>
          </Col>
        </Row>

      </Content>
    </Layout>

  </>
);
export default Matrimonios;