import "../css/main.css";
import { Card, Col, Layout, Row } from 'antd';
import Croissant from '../img/croissant.png'
import PanQue from '../img/pandequeso.png'
import Brownie from '../img/brownie.png'
import PanBrioche from '../img/panbrioche.png'
import PanGalleta from '../img/pangalleta.png'
import Cucas from '../img/cucas.png'
import Cañas from '../img/cañas.png'
import Panzerotti from '../img/panzerotti.png'
import PanMasaMadre from '../img/panmasamadre.png'
import PanHawaiano from '../img/panhawaiano.png'
import Pandebono from '../img/pandebono.png'
import Almojabanas from '../img/almojabanas.png'
import Mogollas from '../img/mogolla.png'
import PanAliñado from '../img/panaliñado.png'
import MojiconQueso from '../img/mojiconconqueso.png'
import PanBatido from '../img/panbatido.png'


const { Content } = Layout;

const products = [
  { title: "Brazo de Reina", img: Croissant, description:"Delicioso y recién horneado"},
  { title: "Torta de Tres Leches", img: PanBrioche, description:"Delicioso y recién horneado" },
  { title: "Ponqué Trandicional", img: PanQue, description:"Delicioso y recién horneado" },
  { title: "Torta de Red Velvet", img: PanGalleta, description:"Delicioso y recién horneado" },
  { title: "Torta de Zanahoria", img: Cucas, description:"Delicioso y recién horneado" },
  { title: "Torta de Chocolate", img: Cañas, description:"Brownies melcochudos" },
  { title: "Torta de Naranja con Amapola", img: Panzerotti, description:"Delicioso y recién horneado" },
  { title: "Milhoja de Arequipe", img: PanMasaMadre, description:"Delicioso y recién horneado" },
  { title: "Cheesecake de Frutos Rojos", img: PanHawaiano, description:"Delicioso y recién horneado" },
  { title: "Caja de Cupcakes x4", img: Pandebono, description:"Delicioso y recién horneado" },
  { title: "Torta de Almojabana", img: Almojabanas, description:"Delicioso y recién horneado" },
  { title: "Torta de Frutos Rojos", img: Mogollas, description:"Delicioso y recién horneado" },
  { title: "Torta de Milky Way", img: PanAliñado, description:"Delicioso y recién horneado" },
  { title: "Hojaldre de Pollo", img: MojiconQueso, description:"Delicioso y recién horneado" },
  { title: "Empanada de Pollo", img: Brownie, description:"Delicioso y recién horneado" },
  { title: "Empanada de Carne", img: PanBatido, description:"Delicioso y recién horneado" },
];

const Pasteleria = () => {
  return (
    <>
    <Layout>
      <Content>
      <h1>Pastelería</h1>
      <p>Bienvenido a la sección de pastelería.</p>
      
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
