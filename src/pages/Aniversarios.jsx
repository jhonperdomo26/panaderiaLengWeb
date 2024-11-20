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

const tortasDeBoda = [
  { title: 'Torta Clásica de Vainilla', img: TortaVanilla, description: 'Elegancia en cada bocado, decorada con flores de azúcar.' },
  { title: 'Torta de Chocolate y Frutas', img: TortaChocolate, description: 'Una combinación exquisita de chocolate y frutos rojos.' },
  { title: 'Torta Red Velvet', img: TortaRedVelvet, description: 'El toque perfecto de sofisticación y dulzura.' },
  { title: 'Torta Naked Almendras', img: TortaNaked, description: 'Un diseño moderno con sabor artesanal.' },
];

const MesadePostres = [
  { title: 'Mini Tartaletas de Frutas', img: TartaletasFrutas, description: 'Coloridas y deliciosas, perfectas para cualquier mesa.' },
  { title: 'Macarrones Franceses', img: Macarrones, description: 'Un toque de elegancia con sabores variados.' },
  { title: 'Brownies Gourmet', img: BrowniesGourmet, description: 'Un clásico irresistible con ingredientes premium.' },
  { title: 'Cheesecake en Vasito', img: CheesecakeVasito, description: 'Portátiles y llenos de sabor, perfectos para tus invitados.' },
];

const Bebidas = [
  { title: 'Coctel de Champagne', img: CoctelChampagne, description: 'Elegante y burbujeante, perfecto para brindar.' },
  { title: 'Limonada con Romero', img: LimonadaRomero, description: 'Una combinación única de frescura y aroma.' },
  { title: 'Agua Infusionada', img: AguaInfusionada, description: 'Refrescante y decorativa, con frutas y hierbas.' },
  { title: 'Mojito Sin Alcohol', img: MojitoSinAlcohol, description: 'Fresco y cítrico, ideal para todos los invitados.' },
];

const Bocadillos = [
  { title: 'Mini Quiches', img: MiniQuiches, description: 'Sabores variados, perfectos como entradas.' },
  { title: 'Empanaditas Gourmet', img: Empanaditas, description: 'Crocantes y rellenas de ingredientes frescos.' },
  { title: 'Canapés de Salmón', img: CanapesSalmon, description: 'Un toque de lujo en cada bocado.' },
  { title: 'Rollitos Jamón y Queso', img: RollitosJamon, description: 'Clásicos y deliciosos, amados por todos.' },
];


const Aniversarios = () => (
  <>

    <Layout>
      <Content className='FondoPan'>
        <Carousel arrows autoplay infinite={false} >
          <div>
            <h3 style={contentStyle}>
              <div className='Torta3Pisos'>
                <div className='CajaLeft'>
                  <span className='TextoEvento'>TORTA DE</span>
                  <span className='TextoEvento'>BODAS</span>
                </div>                
              </div>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <div className='CupcakesDecorados'>
                <div className='CajaRight'>
                  <span className='TextoEvento'>CUPCAKES</span>
                  <span className='TextoEvento'>DECORADOS</span>
                </div>                
              </div>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <div className='PostresGourmet'>
                <div className='CajaLeft'>
                  <span className='TextoEvento'>POSTRES</span>
                  <span className='TextoEvento'>GOURMET</span>
                </div>                
              </div>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <div className='GalletasPersonalizadas'>
                <div className='CajaRight'>
                  <span className='TextoEvento'>GALLETAS</span>
                  <span className='TextoEvento'>PERSONALIZADAS</span>
                </div>
              </div>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <div className='MesaPostres'>
                <div className='CajaLeft'>
                  <span className='TextoEvento'>MESA DE</span>
                  <span className='TextoEvento'>POSTRES</span>
                </div>
              </div>
            </h3>
          </div>        
        </Carousel>

        <Row style={{ margin: '5px 0px' }}>
          <Col span={4}>
          </Col>

          <Col span={16}>
            <H1>Matrimonios</H1>
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
            <H2>Tortas de Boda</H2>
            <div style={{ padding: '20px 0px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                <Row gutter={[16, 16]} justify="center">
                  {tortasDeBoda.slice(0, 4).map((tortasDeBoda, index) => (
                    <Col span={6} key={index}>
                      <Card
                        hoverable
                        cover={<img alt={tortasDeBoda.title} src={tortasDeBoda.img} style={{ width: '100%', height: '275px' }}/>}
                      >
                        <Card.Meta title={tortasDeBoda.title} description={tortasDeBoda.description} style={{ width: '100%', height: '100px'}}/>
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
export default Aniversarios;