import styled from '@emotion/styled';
import '../css/main.css/';
import { Layout, Flex, Row, Col } from 'antd';
import ImagenJuan from '../img/JuanPanaderia.jpg';
import PanOrigen from '../img/PanOrigen.jpg'
import Calidad from '../img/CalidadBlancoSVG.svg'
import Cercania from '../img/CercaniaBlancoSVG.svg'
import Innovacion from '../img/InnovacionBlancoSVG.svg'
import Responsabilidad from '../img/ResponsabilidadBlancoSVG.svg'

const { Content } = Layout;

const Pan = styled.div`
  width: 100%;
  height: 600px;
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
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.25); 
`

const ValorIcono = styled.div`
  background-color: black;
  color: white;
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.5s ease-in-out;
`

const ValorTexto = styled.h2`
  margin: 8% 2%;
  text-align: center;
  font-size: 20px;
`

const H1 = styled.h1`
  margin: 1%;
  font-size: 26px;
`

const H2 = styled.h2`
  margin: 2%;
  font-size: 20px;
`

const P = styled.p`
  margin: 2%;
  font-size: 16px;
`

const ImagenLogo = styled.img`
  width: 80px;  
`

const MisionVision = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 48%;
  height: 250px;
  border: solid black 2px;
  border-radius: 15px;
  padding: 2%;
`

const styleIcono = {
  fontSize: '60px',
}

const Nosotros = () => (
  <>
    <Layout>
      <Content>
        <Pan>
          <ImagenPan src={PanOrigen} alt="Imagen de unos panes al inicio de la pagina Nosotros"/>
        </Pan>
        <Row style={{ margin: '5px 0px' }}>
          <Col span={4}>
          </Col>
          <Col span={16}>
            <Flex align='center' justify='center' vertical>
              <H1>Historia y Origen</H1>
              <Flex align='center' justify='space-evenly'>
                <div style={{width: '68%'}}>
                  <P>
                    La Panadería Horneados se fundó en 2019 en la ciudad de Neiva, Huila, un lugar donde la cultura y la tradición culinaria se entrelazan con la calidez de su gente. La idea de abrir la panadería 
                    nació en la mente de Ana y Juan, una pareja de jóvenes emprendedores que, después de años de soñar con un negocio propio, decidieron dar el salto y compartir su amor por la cocina.
                  </P>
                  <P>
                    Horneados comenzó con una pequeña selección de panes artesanales, que rápidamente ganaron popularidad entre los habitantes de la zona. La combinación de recetas tradicionales y un toque innovador 
                    en su preparación hizo que sus productos se destacaran. Con el tiempo, la panadería amplió su oferta, incluyendo tortas para celebraciones, desayunos variados y deliciosas bebidas, desde aromáticos
                    cafés hasta refrescantes batidos.
                  </P>
                  <P>
                    A lo largo de los años, Horneados ha mantenido su compromiso con la calidad y la satisfacción del cliente. Laura y Andrés creen que cada cliente es parte de la familia, y por eso se esfuerzan por ofrecer 
                    un servicio cálido y acogedor. La panadería ha sido reconocida en Neiva no solo por la calidad de sus productos, sino también por su participación en eventos comunitarios y su apoyo a iniciativas locales.
                  </P>
                </div>
                <ContenedorImagen>
                  <Flex align='center' justify='center'>
                    <ImagenHistoria src={ImagenJuan} alt="Juan preparando pan"/>
                  </Flex>
                </ContenedorImagen>
              </Flex>
            </Flex>
          </Col>
          <Col span={4}>
          </Col>
        </Row>

        <Row style={{ margin: '10px 0px'}}>
          <Col span={4}>
          </Col>
          <Col span={16}>
            <Flex align='center' justify='center' vertical style={{width: '100%'}}>

              <H1>Valores</H1>
              <Flex align='center' justify='space-evenly' style={{width: '100%', padding: '5px'}}>
                <ValorIcono className='AnimValor'>
                  <ImagenLogo src={Calidad} alt="Logo del valor de la calidad"/>
                </ValorIcono>
                <ValorIcono className='AnimValor'>
                  <ImagenLogo src={Cercania} alt="Logo del valor de la cercanía" />
                </ValorIcono>
                <ValorIcono className='AnimValor'>
                  <ImagenLogo src={Innovacion} alt="Logo del valor de la innovación" />
                </ValorIcono>
                <ValorIcono className='AnimValor'>
                  <ImagenLogo src={Responsabilidad} alt="Logo del valor de la responsabilidad" />
                </ValorIcono>
              </Flex>
              <Flex align='center' justify='space-evenly' style={{width: '100%'}}>
                <Col span={4}>
                  <ValorTexto>Calidad</ValorTexto>
                </Col>
                <Col span={4}>
                  <ValorTexto>Cercanía</ValorTexto>
                </Col>
                <Col span={4}>
                  <ValorTexto>Innovación</ValorTexto>
                </Col>
                <Col span={4}>
                  <ValorTexto>Responsabilidad</ValorTexto>
                </Col>
              </Flex>
              
            </Flex>
          </Col>
          <Col span={4}>
          </Col>
        </Row>

        <Row style={{ height: '250px', width: '100%', margin: '10px 0px'}}>
          <Col span={4}>
          </Col>
          <Col span={16}>

          <Flex align='center' justify='space-evenly'>
            <MisionVision>
              <H2>Misión</H2>
              <P>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum rerum earum quasi autem reprehenderit ea illo soluta labore esse. Non minus amet explicabo fuga perspiciatis natus ducimus laboriosam tempore quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ratione magnam, voluptates cumque, modi adipisci laborum, dolor earum neque sapiente assumenda molestias? Ducimus officiis molestias, similique nisi delectus ipsam iste?
              </P>
            </MisionVision>
            <MisionVision>
              <H2>Visión</H2>
              <P>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius ab natus quos velit pariatur blanditiis laborum voluptatum, quaerat magni! Omnis voluptate iure quisquam harum consectetur alias sapiente pariatur illo nulla? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident earum voluptatibus quibusdam repellat dignissimos esse aspernatur nemo, nesciunt maiores quidem, dicta ullam delectus voluptatem dolore, est illo enim at soluta.</P>
            </MisionVision>
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