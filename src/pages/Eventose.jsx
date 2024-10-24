import styled from '@emotion/styled';
import '../css/main.css/';
import { Layout, Flex, Row, Col } from 'antd';
import ComBeb from '../img/ComBeb.jpg';
import PanOrigen from '../img/PanOrigen.jpg'

const { Content } = Layout;

const Pan = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
`

const ImagenPan = styled.img`
  width: 100%;
  height: auto;
`

const ContenedorImagen = styled.div`
  width: 28%;
  height: 100%;
`

const ImagenHistoria = styled.img`
  width: 145%;
  margin-left: 100px;
  height: auto;
  border-radius: 10px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.25); 
`


const H1 = styled.h1`
  margin: 20px;
  font-size: 26px;
`

const H2 = styled.h2`
  margin: 2%;
  font-size: 24px;
`

const P = styled.p`
  margin: 20px;
  font-size: 18px;
`

const P1 = styled.p`
  margin: 2%;
  font-size: 18px;
`



const Eventose = () => (
  <>
    <Layout>
      <Content>
        <Pan>
          <ImagenPan src={PanOrigen} alt="Imagen de unos panes al inicio de la pagina Nosotros" />
        </Pan>
        <Row style={{ margin: '5px 0px' }}>
          <Col span={4}>
          </Col>
          <Col span={16}>
            <Flex justify='center' vertical>
              <H1>Eventos Especiales</H1>
              <H2>Matrimonios | Baby Showers | Aniversarios | Cumpleaños</H2>
              <Flex align='center' justify='space-evenly' text-align='justify'>
                    <div style={{ width: '100%' }}>
                    <P>
                    En nuestra panadería, sabemos que los momentos importantes merecen ser acompañados de lo mejor. Ya sea un matrimonio, un baby shower, un aniversario o un cumpleaños, nuestros productos artesanales están diseñados para agregar un toque de dulzura a tus celebraciones.
                    Desde elegantes tortas de bodas hasta delicados cupcakes personalizados, creamos con pasión para que cada bocado refleje la alegría de tus momentos especiales. ¡Deja que nuestros sabores formen parte de tus recuerdos inolvidables!
                    </P>
                    <P style={{ marginBottom: '20px'}}> </P>
                    </div>
              </Flex>

              <H1>Comida & Bebida</H1>
              <Flex align='center' justify='space-evenly' text-align='justify'>
                    <div style={{ width: '60%' }}>
                    <P>
                        La Panadería Horneados se fundó en 2019 en la ciudad de Neiva, Huila, un lugar donde la cultura y la tradición culinaria se entrelazan con la calidez de su gente. La idea de abrir la panadería
                        nació en la mente de Ana y Juan, una pareja de jóvenes emprendedores que, después de años de soñar con un negocio propio, decidieron dar el salto y compartir su amor por la cocina.
                    </P>
                    <P style={{ marginBottom: '20px'}}> </P>
                    <P>
                        Horneados comenzó con una pequeña selección de panes artesanales, que rápidamente ganaron popularidad entre los habitantes de la zona. La combinación de recetas tradicionales y un toque innovador
                        en su preparación hizo que sus productos se destacaran. Con el tiempo, la panadería amplió su oferta, incluyendo tortas para celebraciones, desayunos variados y deliciosas bebidas, desde aromáticos
                        cafés hasta refrescantes batidos.
                    </P>
                    </div>
                    <ContenedorImagen>
                    <Flex align='center' justify='center'>
                        <ImagenHistoria src={ComBeb} alt="Juan preparando pan" />
                    </Flex>
                    </ContenedorImagen>
              </Flex>

            </Flex>
          </Col>
          <Col span={4}>
          </Col>
        </Row>

        <Row style={{ margin: '10px 0px' }}>
          <Col span={4}>
          </Col>
          <Col span={16}>
          </Col>
          <Col span={4}>
          </Col>
        </Row>

        <Row style={{ height: '250px', width: '100%', margin: '10px 0px' }}>
          <Col span={4}>
          </Col>
          <Col span={16}>

          </Col>
          <Col span={4}>
          </Col>
        </Row>
      </Content>
    </Layout>

  </>
);
export default Eventose;