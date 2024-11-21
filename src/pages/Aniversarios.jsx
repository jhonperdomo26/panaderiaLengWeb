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

import { useTranslation } from "react-i18next";

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

const tortasDeAniversario = [
  { title: 'Torta Chocolate/Avellanas', img: TortaVanilla, description: 'Rica y cremosa, decorada con un elegante toque de avellanas.' },
  { title: 'Torta Frutos Rojos', img: TortaChocolate, description: 'Ligera y delicada, con un diseño romántico para tu celebración.' },
  { title: 'Torta Zanahoria Nueces', img: TortaRedVelvet, description: 'Un clásico irresistible con un sabor cálido y especiado.' },
  { title: 'Torta de Tres Leches', img: TortaNaked, description: 'Dulce y jugosa, perfecta para disfrutar en pareja o con invitados especiales.' },
];

const MesadePostres = [
  { title: 'Mini Tartas de Chocolate', img: TartaletasFrutas, description: 'Deliciosas y sofisticadas, ideales para complementar tu celebración.' },
  { title: 'Macarons Personalizados', img: Macarrones, description: 'Delicados y con colores temáticos para tu aniversario.' },
  { title: 'Cheesecake de Maracuyá', img: BrowniesGourmet, description: 'Un postre refrescante con un toque tropical.' },
  { title: 'Mini Éclairs', img: CheesecakeVasito, description: 'Pequeñas delicias rellenas con sabores exquisitos.' },
];

const Bebidas = [
  { title: 'Coctel Bellini', img: CoctelChampagne, description: 'Un clásico elegante para brindar por el amor.' },
  { title: 'Té Frío de Hibisco', img: LimonadaRomero, description: 'Refrescante y con un color vibrante, ideal para celebraciones al aire libre.' },
  { title: 'Espresso Martini', img: AguaInfusionada, description: 'Un toque de café y glamour en cada sorbo.' },
  { title: 'Limonada de Lavanda', img: MojitoSinAlcohol, description: 'Sofisticada y aromática, perfecta para acompañar tus momentos especiales.' },
];

const Bocadillos = [
  { title: 'Canapés Queso y Miel', img: MiniQuiches, description: 'Delicados y llenos de sabor, una opción sofisticada.' },
  { title: 'Brochetas Caprese', img: Empanaditas, description: 'Frescas y ligeras, ideales para abrir el apetito.' },
  { title: 'Mini Croissants Rellenos', img: CanapesSalmon, description: 'Un clásico reinventado con rellenos gourmet.' },
  { title: 'Tartaletas de Espárragos', img: RollitosJamon, description: 'Elegancia y sabor en un pequeño bocado.' },
];


const Aniversarios = () => {
  const {t} = useTranslation();
  return(
  <>

    <Layout>
      <Content className='FondoPan'>
        <Carousel arrows autoplay infinite={false} >
          <div>
            <h3 style={contentStyle}>
              <div className='Torta3Pisos'>
                <div className='CajaLeft'>
                  <span className='TextoEvento'>{t("TORTA DE")}</span>
                  <span className='TextoEvento'>{t("ANIVERSARIO")}</span>
                </div>                
              </div>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <div className='CupcakesDecorados'>
                <div className='CajaRight'>
                  <span className='TextoEvento'>{t("MACARONS")}</span>
                  <span className='TextoEvento'>{t("DE CELEBRACIÓN")}</span>
                </div>                
              </div>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <div className='PostresGourmet'>
                <div className='CajaLeft'>
                  <span className='TextoEvento'>{t("CUPCAKES PARA")}</span>
                  <span className='TextoEvento'>{t("ANIVERSARIOS")}</span>
                </div>                
              </div>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <div className='GalletasPersonalizadas'>
                <div className='CajaRight'>
                  <span className='TextoEvento'>{t("MINITARTAS DE")}</span>
                  <span className='TextoEvento'>{t("FRUTAS")}</span>
                </div>
              </div>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <div className='MesaPostres'>
                <div className='CajaLeft'>
                  <span className='TextoEvento'>{t("GALLETAS")}</span>
                  <span className='TextoEvento'>{t("DECORADAS")}</span>
                </div>
              </div>
            </h3>
          </div>        
        </Carousel>

        <Row style={{ margin: '5px 0px' }}>
          <Col span={4}>
          </Col>

          <Col span={16}>
            <H1>{t("Aniversarios")}</H1>
            <P1>
            {t("P1A1")}
            </P1>
            <P1>
            {t("P1A2")} 
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
              <HOfrec>{t("¿Qué ofrecemos?")}</HOfrec>
            </ContenOfrec>
          </Col>
          <Col span={4}>
          </Col>
        </Row>

        <Row style={{ margin: '5px 0px' }}>
          <Col span={4}>
          </Col>

          <Col span={16}>
            <H2>Tortas de Aniversario</H2>
            <div style={{ padding: '20px 0px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                <Row gutter={[16, 16]} justify="center">
                  {tortasDeAniversario.slice(0, 4).map((tortasDeAniversario, index) => (
                    <Col span={6} key={index}>
                      <Card
                        hoverable
                        cover={<img alt={tortasDeAniversario.title} src={tortasDeAniversario.img} style={{ width: '100%', height: '275px' }}/>}
                      >
                        <Card.Meta title={tortasDeAniversario.title} description={tortasDeAniversario.description} style={{ width: '100%', height: '100px'}}/>
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
  )
};
export default Aniversarios;