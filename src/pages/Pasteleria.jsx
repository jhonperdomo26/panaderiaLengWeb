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
  { title: "Caja de Cupcakes x4", img: Cupcakes, description:"Delicioso y recién horneado" },
  { title: "Torta de Almojabana", img: TortaAlmojabana, description:"Delicioso y recién horneado" },
  { title: "Torta de Frutos Rojos", img: TortaFrutRojos, description:"Delicioso y recién horneado" },
  { title: "Torta de Milky Way", img: TortaMilky, description:"Delicioso y recién horneado" },
  { title: "Hojaldre de Pollo", img: HojaldrePollo, description:"Delicioso y recién horneado" },
  { title: "Empanada de Pollo", img: EmpanadaPollo, description:"Delicioso y recién horneado" },
  { title: "Empanada de Carne", img: EmpanadaCarne, description:"Delicioso y recién horneado" },
];

const Pasteleria = () => {
  return (
    <>
    <Layout>
      <Content>

      <div gutter={[16, 16]} justify="center" style={{ marginTop: "30px", textAlign: "center" }}>
        <h1>Pastelería</h1>
        <p>Bienvenido a la sección de pastelería.</p>
      </div>
      
      <Row gutter={[16, 16]} justify="center" style={{ marginTop: "30px" }}>
        {products.slice(0, 4).map((product, index) => (
          <Col span={4} key={index}>
            <Card
              hoverable
              cover={<img alt={product.title} src={product.img} />}
            >
              <Card.Meta
                title={product.title}
                description={product.description}
              />
            </Card>
          </Col>
        ))}
      </Row>

      <Row gutter={[16, 16]} justify="center" style={{ marginTop: "30px" }}>
        {products.slice(4, 8).map((product, index) => (
          <Col span={4} key={index}>
            <Card
              hoverable
              cover={<img alt={product.title} src={product.img} />}
            >
              <Card.Meta
                title={product.title}
                description={product.description}
              />
            </Card>
          </Col>
        ))}
      </Row>

      <Row gutter={[16, 16]} justify="center" style={{ marginTop: "30px" }}>
        {products.slice(8, 12).map((product, index) => (
          <Col span={4} key={index}>
            <Card
              hoverable
              cover={<img alt={product.title} src={product.img} />}
            >
              <Card.Meta
                title={product.title}
                description={product.description}
              />
            </Card>
          </Col>
        ))}
      </Row>

      <Row gutter={[16, 16]} justify="center" style={{ marginTop: "30px" }}>
        {products.slice(12, 16).map((product, index) => (
          <Col span={4} key={index}>
            <Card
              hoverable
              cover={<img alt={product.title} src={product.img} />}
            >
              <Card.Meta
                title={product.title}
                description={product.description}
              />
            </Card>
          </Col>
        ))}
      </Row>

      <Row gutter={[16, 16]} justify="center" style={{ marginTop: "30px" }}> </Row>

      </Content>
    </Layout>

    </>
    
  );
};

export default Pasteleria;
