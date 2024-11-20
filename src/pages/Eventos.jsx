import styled from '@emotion/styled';
import '../css/main.css/';
import { Layout, Flex, Row, Col, Card } from 'antd';
import Matrimonio from '../img/Matrimonio.webp'
import BabyShower from '../img/BabyShower.webp'
import Aniversario from '../img/Aniversario.webp'
import Cumpleanos from '../img/Cumpleanos.webp'
import PaqCom from '../img/ComBeb.webp';
import MPostres from '../img/MPostres.webp';
import Bebidas from '../img/Bebidas.webp';
import { Link } from 'react-router-dom';

const { Content } = Layout;

const Pan = styled.div`
  width: 100%;
  height: 400px;
`

const ImagenPan = styled.img`
  width: 100%;
  height: auto;
`

const ContenedorImagen = styled.div`
  width: 40%;
  height: 100%;
`

const ImagenComidaBebida = styled.img`
  width: 400px;
  border-radius: 10px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.25); 
`

const ImagenPaqueteCompleto = styled.img`
  width: 400px;
  border-radius: 10px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.25); 
`

const ImagenPostres = styled.img`
  width: 400px;
  border-radius: 10px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.25);
`

const HEventosEspeciales = styled.h1`
  font-weight: bold;
  margin: 20px;
  font-size: 26px;
`

const ContenEventos = styled.div`
  font-size: 24px;
  margin: 20px;
`

const HImpar = styled.h1`
  font-weight: bold;
  font-size: 24px;
  margin: 20px;
`

const HPar = styled.h2`
  font-weight: bold;
  font-size: 24px;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const P1 = styled.p`
  margin: 20px;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 400;
`

const P2 =styled.p`
  margin: 20px;
  font-size: 18px;
  text-align: right;
  line-height: 1.5;
  font-weight: 400;
`

const eventos = [
  { 
    title: 'Matrimonios', 
    img: Matrimonio, 
    description: "Celebra el amor con nuestros pasteles y decoraciones únicas para matrimonios, para hacer de tu día especial un momento inolvidable.", 
    link: "/Matrimonios" 
  },
  { 
    title: 'Baby Showers', 
    img: BabyShower, 
    description: "Dale la bienvenida a tu bebé con una mesa de dulces adorable y personalizada, diseñada para llenar de ternura y sabor este momento especial.", 
    link: "/BabyShowers" 
  },
  { 
    title: 'Aniversarios', 
    img: Aniversario, 
    description: "Conmemora un año más de amor con una celebración dulce y elegante. Nuestros pasteles de aniversario están hechos para reflejar la historia que celebran.", 
    link: "/Aniversarios" 
  },
  { 
    title: 'Cumpleaños', 
    img: Cumpleanos, 
    description: "Haz de tu cumpleaños una celebración memorable con pasteles y postres personalizados, ideales para compartir y disfrutar en grande.", 
    link: "/Cumpleaños" 
  }
];

const Eventos = () => (
  <>
    <Layout>
      <Content className='FondoPan'>
        <Pan>
          <div className='PanOrigen'>
          </div>
        </Pan>
        <Row style={{ margin: '5px 0px' }}>
          <Col span={4}>
          </Col>
          <Col span={16}>
            <Flex justify='center' vertical>
            <HEventosEspeciales>Eventos Especiales</HEventosEspeciales>
              <Flex align="right" text-align="justify" vertical>
                <div style={{ padding: '20px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                  <Row gutter={[16, 16]} justify="center">
                    {eventos.map((eventos, index) => (
                      <Col span={6} key={index} className='CartaEvento'>
                        <Link to={eventos.link} style={{ display: 'block' }}>
                          <Card
                            hoverable
                            cover={<img alt={eventos.title} src={eventos.img} style={{ width: '100%', height: '300px'}} />}
                          >
                            <Card.Meta title={eventos.title} description={eventos.description} style={{ width: '100%', height: '175px'}}/>
                          </Card>
                        </Link>
                      </Col>
                    ))}
                  </Row>
                </div>
                <P1>
                  En nuestra panadería, sabemos que los momentos importantes merecen ser acompañados de lo mejor. Ya sea un matrimonio, un baby shower, un aniversario o un cumpleaños, nuestros productos artesanales están diseñados para agregar un toque de dulzura a tus celebraciones.
                  Desde elegantes tortas de bodas hasta delicados cupcakes personalizados, creamos con pasión para que cada bocado refleje la alegría de tus momentos especiales. ¡Deja que nuestros sabores formen parte de tus recuerdos inolvidables!
                </P1>
              </Flex>

              <hr style={{ color: 'gray'}} />

              <Flex align='center' justify='space-evenly'>
                <div style={{ width: '50%' }}>
                  <HImpar>Comida & Bebida</HImpar>
                  <P1>
                    En nuestra panadería, no solo nos especializamos en postres; también ofrecemos una selección exquisita de comida salada y bebidas diseñadas para complementar cualquier celebración. Desde elegantes bocadillos hasta opciones refrescantes de bebidas, nuestro menú está 
                    pensado para satisfacer todos los gustos.
                  </P1>
                  <P1>
                    Cuéntanos más sobre tu evento y crearemos un menú que se adapte a tus necesidades. ¡Haz que tu ocasión especial sea deliciosa en todos los sentidos!
                  </P1>
                </div>
                <ContenedorImagen>
                  <Flex align='center' justify='center'>
                    <ImagenComidaBebida src={Bebidas} />
                  </Flex>
                </ContenedorImagen>
              </Flex>

              <hr style={{ color: 'gray'}} />

              <Flex align='center' justify='space-evenly'>

                <ContenedorImagen>
                  <Flex align='left' justify='center'>
                    <ImagenPostres src={MPostres} />
                  </Flex>
                </ContenedorImagen>

                <div style={{ width: '50%' }}>
                  <HPar>Mesa de postres</HPar>
                  <P2>
                    Haz que tu evento sea inolvidable con nuestra exclusiva Mesa de Postres Completa. En Panadería Horneados, creamos mesas personalizadas que combinan diseño y sabor, perfectas para complementar tus celebraciones.
                  </P2>
                  <P2>
                    Sabemos que los detalles importan, y una mesa de postres puede ser el centro de atención en cualquier celebración. Para matrimonios, cumpleaños, aniversarios o cualquier evento especial, nuestras mesas de 
                    postres están diseñadas para impresionar tanto visualmente como en sabor.
                  </P2>
                </div>
                
              </Flex>

              <hr style={{ color: 'gray'}} />

              <Flex align='center' text-align='justify' style={{ justifyContent: 'space-evenly'}}>
                <div style={{ width: '50%' }}>
                  <HImpar>Paquete Completo</HImpar>
                  <P1>
                    Con nuestro Paquete Completo, nos encargamos de cada detalle para que tu evento sea un éxito. Desde el pastel perfecto hasta una deliciosa selección de bocadillos y bebidas, ofrecemos una experiencia integral 
                    que hará de tu celebración algo inolvidable. 
                  </P1>
                  <P1>Nuestro equipo personaliza cada paquete según tus necesidades, para que tengas todo lo que necesitas en un solo lugar. Ya sea un matrimonio, cumpleaños, baby shower 
                  o aniversario, creamos un menú a medida, con productos frescos y de calidad, cuidando la presentación y el sabor en cada plato.</P1>
                  </div>
                  <ContenedorImagen>
                    <Flex align='center' justify='center'>
                      <ImagenPaqueteCompleto src={PaqCom} />
                    </Flex>
                  </ContenedorImagen>
              </Flex>

            </Flex>
          </Col>
          <Col span={4}>
          </Col>
        </Row>

      </Content>
    </Layout>

  </>
);
export default Eventos;