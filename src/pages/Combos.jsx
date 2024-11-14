import "../css/main.css";
import { Card, Col, Layout, Row } from 'antd';
import Croissant from '../img/croissant.png'
import PanQue from '../img/pandequeso.png'
import PanBrioche from '../img/panbrioche.png'
import PanGalleta from '../img/pangalleta.png'


const { Content } = Layout;

const products = [
  { title: "Combo Yaguareño", img: Croissant, description:"Tamal acompañado de quesillo y chocolate"},
  { title: "Opita", img: PanBrioche, description:"Delicioso y recién horneado" },
  { title: "Cumpleaños", img: PanQue, description:"Torta de chocolate con gaseosa 1.25lts" },
  { title: "Desayuno Sorpresa", img: PanGalleta, description:"Delicioso y recién horneado" },
  ];

const Combos = () => {
  return (
    <>
    <Layout>
      <Content>
      <h1>Combos</h1>
      <p>Bienvenido a la sección de Combos.</p>
      
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

export default Combos;
