import "../css/main.css";
import { Card, Col, Layout, Row } from 'antd';
import Caballito from '../img/Caballito.png'
import Croissant from '../img/croissant.png'
import PanQue from '../img/pandequeso.png'
import PanAli from '../img/PanAli.png'
import Brownie from '../img/brownie.png'


const { Meta } = Card;
const { Content } = Layout;

const products = [
  { title: "Croissant", img: Croissant, description:"Delicioso y recién horneado"},
  { title: "Pan Brioche Dulce", img: Caballito, description:"Delicioso y recién horneado" },
  { title: "Pan de Queso", img: PanQue, description:"Delicioso y recién horneado" },
  { title: "Pan Galleta", img: Caballito, description:"Delicioso y recién horneado" },
  { title: "Cucas", img: Caballito, description:"Delicioso y recién horneado" },
  { title: "Caña", img: Caballito, description:"Brownies melcochudos" },
  { title: "Panzerotti", img: Caballito, description:"Delicioso y recién horneado" },
  { title: "Pan de Masa Madre", img: Caballito, description:"Delicioso y recién horneado" },
  { title: "Pan Hawaiano", img: Caballito, description:"Delicioso y recién horneado" },
  { title: "Pandebono", img: Caballito, description:"Delicioso y recién horneado" },
  { title: "Almojabanas", img: Caballito, description:"Delicioso y recién horneado" },
  { title: "Mogollas", img: Caballito, description:"Delicioso y recién horneado" },
  { title: "Pan aliñado", img: PanAli, description:"Delicioso y recién horneado" },
  { title: "Mojicón con Queso", img: Caballito, description:"Delicioso y recién horneado" },
  { title: "Brownie", img: Brownie, description:"Delicioso y recién horneado" },
  { title: "Pan Batido", img: Caballito, description:"Delicioso y recién horneado" },
];

const Panaderia = () => {
  return (
    <>
    <Layout>
      <Content>
      <h1>Panadería</h1>
      <p>Bienvenido a la sección de panadería.</p>
      
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

export default Panaderia;
