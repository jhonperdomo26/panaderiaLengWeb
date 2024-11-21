import "../css/main.css";
import { Card, Col, Layout, Row } from 'antd';
import BrazoReina from '../img/brazodereina.png'
import Tresleches from '../img/tresleches.png'
import Ponque from '../img/ponque.png'
import TortaZana from '../img/tortazanahoria.png'
import TortaChoco from '../img/tortachoco.png'
import TortaAmapola from '../img/tortaamapola.png'
import TortaRed from '../img/tortared.png'
import Cupcakes from '../img/cupcakes.png'
import TortaFrutRojos from '../img/tortafrutrojos.png'
import HojaldrePollo from '../img/hojaldrepollo.png'
import Milhojas from '../img/milhojas.png'
import CheesecakeFrutos from '../img/cheesecakefrutos.png'
import TortaAlmojabana from '../img/tortaalmojabana.png'
import EmpanadaPollo from '../img/empanadapollo.png'
import EmpanadaCarne from '../img/empanadacarne.png'
import TortaMilky from '../img/tortamilky.png'
import FondoPas from '../img/FondoPas.webp'

const cajaDecoracion = {
  display:'flex',
  alignItems:'center',
  justifyContent: 'center',
  width: '100%',
  height: '150px',
  backgroundColor: 'rgba(114, 93, 66, 1)',
  borderRadius: '20px'
};

const texto = {
  fontSize: '50px',
  fontWeight: 'bold',
  color:'white',
  textAlign: 'center'
};

const fondoPagina = {
  position: 'relative',           
  minHeight: '100vh',
  width: '100%',
  overflow: 'hidden',            
};

const fondoImagen = {
  backgroundImage: `url(${FondoPas})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  opacity: 0.4,              
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 1,
};

const contenido = {
  position: 'relative',
  zIndex: 2,                    
  padding: '20px',
};

const { Content } = Layout;

const products = [
  { title: "Brazo de Reina", img: BrazoReina, description:"Delicioso y recién horneado"},
  { title: "Torta de Tres Leches", img: Tresleches, description:"Delicioso y recién horneado" },
  { title: "Ponqué Trandicional", img: Ponque, description:"Delicioso y recién horneado" },
  { title: "Torta de Red Velvet", img: TortaRed, description:"Delicioso y recién horneado" },
  { title: "Torta de Zanahoria", img: TortaZana, description:"Delicioso y recién horneado" },
  { title: "Torta de Chocolate", img: TortaChoco, description:"Brownies melcochudos" },
  { title: "Torta de Naranja con Amapola", img: TortaAmapola, description:"Delicioso y recién horneado" },
  { title: "Milhoja de Arequipe", img: Milhojas, description:"Delicioso y recién horneado" },
  { title: "Cheesecake de Frutos Rojos", img: CheesecakeFrutos, description:"Delicioso y recién horneado" },
  { title: "Caja Cupcakes x4", img: Cupcakes, description:"Delicioso y recién horneado" },
  { title: "Torta Almojabana", img: TortaAlmojabana, description:"Delicioso y recién horneado" },
  { title: "Torta Frutos Rojos", img: TortaFrutRojos, description:"Delicioso y recién horneado" },
  { title: "Torta Milky Way", img: TortaMilky, description:"Delicioso y recién horneado" },
  { title: "Hojaldre de Pollo", img: HojaldrePollo, description:"Delicioso y recién horneado" },
  { title: "Empanada Pollo", img: EmpanadaPollo, description:"Delicioso y recién horneado" },
  { title: "Empanada Carne", img: EmpanadaCarne, description:"Delicioso y recién horneado" },
];

const Pasteleria = () => {
  return (
    <>
    <Layout style={{ minHeight: '100vh' }}>
    <Content style={fondoPagina}>
      <div style={fondoImagen}></div>
      <div style={contenido}>
        <Row justify="center" align="middle" style={{ marginTop: "30px", height: "150px" }}>
            <Col span={16}>
                <div style={cajaDecoracion}>
                  <span style={texto}>PASTELERÍA</span>
                </div>  
            </Col>
        </Row>  
        

        {Array.from({ length: 4 }, (_, i) => (
                <Row key={i} gutter={[16, 16]} justify="center" style={{ marginTop: "30px" }}>
                  {products.slice(i * 4, (i + 1) * 4).map((product, index) => (
                    <Col span={4} key={index}>
                      <Card hoverable cover={<img alt={product.title} src={product.img} />}>
                        <Card.Meta title={product.title} description={product.description} />
                      </Card>
                    </Col>
                  ))}
                </Row>
              ))}

        <Row gutter={[16, 16]} justify="center" style={{ marginTop: "30px" }}> </Row>
      
      </div>
      </Content>
    </Layout>

    </>
    
  );
};

export default Pasteleria;
