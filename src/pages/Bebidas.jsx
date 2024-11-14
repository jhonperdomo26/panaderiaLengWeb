import "../css/main.css";
import { Card, Col, Layout, Row } from 'antd';
import Croissant from '../img/croissant.png'
import PanQue from '../img/pandequeso.png'
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


const { Content } = Layout;

const products = [
  { title: "Jugo de Naranja", img: Croissant, description:"Delicioso y recién horneado"},
  { title: "Jugo de Zanahoria", img: PanBrioche, description:"Delicioso y recién horneado" },
  { title: "Batido Verde", img: PanQue, description:"Delicioso y recién horneado" },
  { title: "Milo Frío", img: PanGalleta, description:"Delicioso y recién horneado" },
  { title: "Americano", img: Cucas, description:"Delicioso y recién horneado" },
  { title: "Capuccino", img: Cañas, description:"Brownies melcochudos" },
  { title: "Chocolate", img: Panzerotti, description:"Delicioso y recién horneado" },
  { title: "Gaseosa", img: PanMasaMadre, description:"Delicioso y recién horneado" },
  { title: "Expreso", img: PanHawaiano, description:"Delicioso y recién horneado" },
  { title: "Limonada", img: Pandebono, description:"Delicioso y recién horneado" },
  { title: "Avena", img: Almojabanas, description:"Delicioso y recién horneado" },
  { title: "Sevillana", img: Mogollas, description:"Delicioso y recién horneado" },
  ];

const Bebidas = () => {
  return (
    <>
    <Layout>
      <Content>
      <h1>Desayunos</h1>
      <p>Bienvenido a la sección de desayuno.</p>
      
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

export default Bebidas;
