import styled from '@emotion/styled';
import '../css/main.css/';
import { Carousel } from 'antd';
import { Layout, Flex, Row, Col } from 'antd';
import { Card } from 'antd';
import TortaVanilla from '../img/TortaVanilla.webp';
import TortaChocolate from '../img/tortachoco.png';
import TortaRedVelvet from '../img/TortaRedVelvet.webp';
import TortaNaked from '../img/TortaNaked.webp';

import TartaletasFrutas from '../img/TartaletasFrutas.webp';
import Macarrones from '../img/Macarrones.webp';
import BrowniesGourmet from '../img/BrowniesGourmet.webp';
import CheesecakeVasito from '../img/CheesecakeVasito.webp';

import CoctelChampagne from '../img/CoctelChampagne.webp';
import LimonadaRomero from '../img/LimonadaRomero.webp';
import AguaInfusionada from '../img/AguaInfusionada.webp';
import MojitoSinAlcohol from '../img/MojitoSinAlcohol.webp';

import MiniQuiches from '../img/MiniQuiches.webp';
import Empanaditas from '../img/Empanaditas.webp';
import CanapesSalmon from '../img/CanapesSalmon.webp';
import RollitosJamon from '../img/RollitosJamon.webp';

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

const tortasDeCumpleaños = [
  { title: 'Torta Arcoíris', img: TortaVanilla, description: 'Un estallido de colores para hacer sonreír a todos.' },
  { title: 'Torta de Chocolate', img: TortaChocolate, description: 'Pura indulgencia, perfecta para los amantes del chocolate.' },
  { title: 'Torta de Frutas Tropicales', img: TortaRedVelvet, description: 'Refrescante y ligera, ideal para fiestas al aire libre.' },
  { title: 'Torta Temática', img: TortaNaked, description: 'Diseñada según tus sueños, desde personajes hasta paisajes.' },
];

const MesadePostres = [
  { title: 'Cupcakes Personalizados', img: TartaletasFrutas, description: 'Pequeñas delicias que combinan con el tema de tu fiesta.' },
  { title: 'Galletas Decoradas', img: Macarrones, description: 'Un toque dulce y creativo que encanta a niños y adultos.' },
  { title: 'Cake Pops de Colores', img: BrowniesGourmet, description: 'Bocados divertidos y fáciles de disfrutar.' },
  { title: 'Gelatinas Multicolor', img: CheesecakeVasito, description: 'Llamativas y refrescantes, un clásico de los cumpleaños.' },
];

const Bebidas = [
  { title: 'Batidos de Sabores', img: CoctelChampagne, description: 'Frutales y cremosos, perfectos para cualquier edad.' },
  { title: 'Limonada Azul', img: LimonadaRomero, description: 'Un toque especial y vibrante para la fiesta.' },
  { title: 'Chocolatada Fría', img: AguaInfusionada, description: 'Un favorito para los más pequeños.' },
  { title: 'Sodas Artesanales', img: MojitoSinAlcohol, description: 'Burbujeantes y coloridas, ideales para brindar.' },
];

const Bocadillos = [
  { title: 'Mini Hamburguesas', img: MiniQuiches, description: 'Diversión en tamaño pequeño, irresistibles para todos.' },
  { title: 'Hot Dogs Miniatura', img: Empanaditas, description: 'Un clásico que nunca pasa de moda.' },
  { title: 'Palomitas Saborizadas', img: CanapesSalmon, description: 'Crocantes y coloridas, el snack perfecto.' },
  { title: 'Mini Pizzas', img: RollitosJamon, description: 'Pequeñas y sabrosas, hechas para compartir.' },
];

const Cumpleaños = () => (
  <>

    <Layout>
      <Content className='FondoPan'>
      <Carousel arrows autoplay infinite={false}>
        <div>
          <h3 style={contentStyle}>
            <div className='TortaCumpleaños'>
              <div className='CajaLeft'>
                <span className='TextoEvento'>TORTAS</span>
                <span className='TextoEvento'>DE CUMPLEAÑOS</span>
              </div>
            </div>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <div className='CupcakesColoridos'>
              <div className='CajaRight'>
                <span className='TextoEvento'>CUPCAKES</span>
                <span className='TextoEvento'>COLORIDOS</span>
              </div>
            </div>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <div className='SnacksDivertidos'>
              <div className='CajaLeft'>
                <span className='TextoEvento'>SNACKS</span>
                <span className='TextoEvento'>DIVERTIDOS</span>
              </div>
            </div>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <div className='GalletasFiesta'>
              <div className='CajaRight'>
                <span className='TextoEvento'>GALLETAS</span>
                <span className='TextoEvento'>TEMÁTICAS</span>
              </div>
            </div>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <div className='MesaCumpleaños'>
              <div className='CajaLeft'>
                <span className='TextoEvento'>MESA DE</span>
                <span className='TextoEvento'>CUMPLEAÑOS</span>
              </div>
            </div>
          </h3>
        </div>
      </Carousel>

        <Row style={{ margin: '5px 0px' }}>
          <Col span={4}>
          </Col>

          <Col span={16}>
            <H1>Cumpleaños</H1>
            <P1>
              Porque un cumpleaños no está completo sin un toque dulce, en nuestra panadería ofrecemos una variedad de opciones que harán de tu fiesta un evento memorable. Desde coloridas tortas temáticas hasta cupcakes decorados, galletas y postres que se adaptan a tus gustos y estilo.
            </P1>
            <P1>
              Estamos aquí para ayudarte a crear momentos llenos de sabor y alegría. ¡Celebra con nosotros y déjanos endulzar tu día especial!
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
            <H2>Tortas de Cumpleaños</H2>
            <div style={{ padding: '20px 0px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                <Row gutter={[16, 16]} justify="center">
                  {tortasDeCumpleaños.slice(0, 4).map((tortasDeCumpleaños, index) => (
                    <Col span={6} key={index}>
                      <Card
                        hoverable
                        cover={<img alt={tortasDeCumpleaños.title} src={tortasDeCumpleaños.img} style={{ width: '100%', height: '275px' }}/>}
                      >
                        <Card.Meta title={tortasDeCumpleaños.title} description={tortasDeCumpleaños.description} style={{ width: '100%', height: '100px'}}/>
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
export default Cumpleaños;