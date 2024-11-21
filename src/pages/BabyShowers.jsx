import styled from '@emotion/styled';
import '../css/main.css/';
import { Carousel } from 'antd';
import { Layout, Flex, Row, Col } from 'antd';
import { Card } from 'antd';
import TortaVanillaBabyShower from '../img/TortaVanillaBabyShower.webp';
import TortaChocolateBaby from '../img/TortaChocolateBaby.webp';
import TortaRosada from '../img/TortaRosada.webp';
import TortaBabyNombre from '../img/TortaBabyNombre.webp';

import CupcakesRA from '../img/CupcakesRA.webp';
import GalletasBabyShower2 from '../img/GalletasBabyShower2.webp';
import CakePops from '../img/CakePops.webp';
import TartaletasCrema from '../img/TartaletasCrema.webp';

import CoctelAzul from '../img/CoctelAzul.webp';
import PinkLemonade from '../img/PinkLemonade.webp';
import SmoothiesFrutas from '../img/SmoothiesFrutas.webp';
import BatidoFresaPlatano from '../img/BatidoFresaPlatano.webp';

import MiniSandwiches from '../img/MiniSandwiches.webp';
import BocaditosQueso from '../img/BocaditosQueso.webp';
import BrochetasFrutas from '../img/BrochetasFrutas.webp';
import CanapesVariados from '../img/CanapesVariados.webp';

const { Content } = Layout;
const { Meta } = Card;

const H1 = styled.h1`
  font-weight: bold;
  margin: 20px;
  font-size: 26px;
`

const H2 = styled.h1`
  font-weight: bold;
  margin: 10px;
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
  background-color: #905d01;
  margin: 20px 0px;
`

const HOfrec = styled.h1`
  font-size: 50px;
  font-weight: bold;
  color: white;
  text-align: center;
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

const tortasDeBabyShower = [
  { title: 'Torta Temática de Vainilla', img: TortaVanillaBabyShower, description: 'Suave y deliciosa, decorada con motivos de Baby Shower.' },
  { title: 'Torta de Chocolate', img: TortaChocolateBaby, description: 'Perfecta para celebrar la llegada de un niño, con detalles encantadores.' },
  { title: 'Torta Rosada', img: TortaRosada, description: 'Elegante y deliciosa, ideal para una temática femenina.' },
  { title: 'Torta Personalizada', img: TortaBabyNombre, description: 'Un diseño moderno que destaca el nombre del bebé.' },
];

const MesadePostres = [
  { title: 'Cupcakes Decorados', img: CupcakesRA, description: 'Diseñados con tiernos detalles en azul y rosa pastel.' },
  { title: 'Galletas de Bebé', img: GalletasBabyShower2, description: 'Un dulce recuerdo con diseños de sonajeros, biberones y más.' },
  { title: 'Cake Pops', img: CakePops, description: 'Pequeñas delicias fáciles de disfrutar para grandes y pequeños.' },
  { title: 'Mini Tartaletas de Crema', img: TartaletasCrema, description: 'Perfectas para una mesa de postres encantadora.' },
];

const Bebidas = [
  { title: 'Coctel Azul Brillante', img: CoctelAzul, description: 'Una bebida fresca y colorida para la ocasión.' },
  { title: 'Pink Lemonade', img: PinkLemonade, description: 'Un toque rosado y refrescante, ideal para Baby Showers.' },
  { title: 'Smoothies de Frutas', img: SmoothiesFrutas, description: 'Opciones saludables y llenas de sabor.' },
  { title: 'Batido de Fresa y Plátano', img: BatidoFresaPlatano, description: 'Una combinación cremosa y dulce que encanta a todos.' },
];

const Bocadillos = [
  { title: 'Mini Sándwiches', img: MiniSandwiches, description: 'Pequeños y decorados, perfectos para compartir.' },
  { title: 'Bocaditos de Queso y Uva', img: BocaditosQueso, description: 'Sencillos, elegantes y deliciosos.' },
  { title: 'Brochetas de Frutas', img: BrochetasFrutas, description: 'Coloridas y saludables, perfectas para los pequeños invitados.' },
  { title: 'Canapés Variados', img: CanapesVariados, description: 'Sabores diversos en presentaciones encantadoras.' },
];


const BabyShowers = () => (
  <>

    <Layout>
      <Content className='FondoPan'>
        <Carousel arrows autoplay infinite={false} >
          <div>
            <h3 style={contentStyle}>
              <div className='TortaBabyShower'>
                <div className='CajaLeft'>
                  <span className='TextoEvento'>TORTAS PARA</span>
                  <span className='TextoEvento'>BABY SHOWER</span>
                </div>                
              </div>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <div className='CupcakesBabyShower'>
                <div className='CajaRight'>
                  <span className='TextoEvento'>CUPCAKES PARA</span>
                  <span className='TextoEvento'>BABY SHOWERS</span>
                </div>                
              </div>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <div className='MacaronTonosPastel'>
                <div className='CajaLeft'>
                  <span className='TextoEvento'>MACARONS EN</span>
                  <span className='TextoEvento'>TONOS PASTEL</span>
                </div>                
              </div>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <div className='GalletasBabyShower'>
                <div className='CajaRight'>
                  <span className='TextoEvento'>GALLETAS PARA</span>
                  <span className='TextoEvento'>BABY SHOWERS</span>
                </div>
              </div>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <div className='Tartaletas'>
                <div className='CajaLeft'>
                  <span className='TextoEvento'>MINI TARTALETAS</span>
                  <span className='TextoEvento'>DE FRUTA</span>
                </div>
              </div>
            </h3>
          </div>        
        </Carousel>

        <Row style={{ margin: '5px 0px' }}>
          <Col span={4}>
          </Col>

          <Col span={16}>
            <H1>Baby Showers</H1>
            <P1>
              En nuestra panadería, entendemos que cada Baby Shower es un momento único para celebrar la llegada de un nuevo miembro a la familia. Ofrecemos una deliciosa variedad de productos personalizados, desde tiernas tortas temáticas hasta cupcakes, galletas y postres que encantarán a todos tus invitados.
            </P1>
            <P1>
              Nos encargamos de añadir dulzura y encanto a tu celebración, cuidando cada detalle para que el evento sea inolvidable. ¡Confía en nosotros para endulzar este hermoso comienzo!
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
            <H2>Tortas de Boda</H2>
            <div style={{ padding: '20px 0px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                <Row gutter={[16, 16]} justify="center">
                  {tortasDeBabyShower.slice(0, 4).map((tortasDeBabyShower, index) => (
                    <Col span={6} key={index}>
                      <Card
                        hoverable
                        cover={<img alt={tortasDeBabyShower.title} src={tortasDeBabyShower.img} style={{ width: '100%', height: '275px' }}/>}
                      >
                        <Card.Meta title={tortasDeBabyShower.title} description={tortasDeBabyShower.description} style={{ width: '100%', height: '100px'}}/>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
              <H2>Mesa de Postres</H2>
              <div style={{ padding: '20px 0px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                <Row gutter={[16, 16]} justify="center">
                  {MesadePostres.slice(0, 4).map((MesadePostres, index) => (
                    <Col span={6} key={index}>
                      <Card
                        hoverable
                        cover={<img alt={MesadePostres.title} src={MesadePostres.img} style={{ width: '100%', height: '275px' }}/>}
                      >
                        <Card.Meta title={MesadePostres.title} description={MesadePostres.description} style={{ width: '100%', height: '100px'}}/>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>              
              <H2>Bebidas</H2>
              <div style={{ padding: '20px 0px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                <Row gutter={[16, 16]} justify="center">
                  {Bebidas.slice(0, 4).map((Bebidas, index) => (
                    <Col span={6} key={index}>
                      <Card
                        hoverable
                        cover={<img alt={Bebidas.title} src={Bebidas.img} style={{ width: '100%', height: '275px' }}/>}
                      >
                        <Card.Meta title={Bebidas.title} description={Bebidas.description} style={{ width: '100%', height: '100px'}}/>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
              <H2>Bocadillos</H2>
              <div style={{ padding: '20px 0px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                <Row gutter={[16, 16]} justify="center">
                  {Bocadillos.slice(0, 4).map((Bocadillos, index) => (
                    <Col span={6} key={index}>
                      <Card
                        hoverable
                        cover={<img alt={Bocadillos.title} src={Bocadillos.img} style={{ width: '100%', height: '250px' }}/>}
                      >
                        <Card.Meta title={Bocadillos.title} description={Bocadillos.description} style={{ width: '100%', height: '100px'}}/>
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
export default BabyShowers;