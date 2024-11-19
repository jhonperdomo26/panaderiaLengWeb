import "../css/main.css";
import { Card, Col, Layout, Row } from 'antd';
import Yaguara from '../img/Yaguara.webp'
import Cumple from '../img/Cumple.webp'
import Opita from '../img/Opita.webp'
import Sorpresa from '../img/Sorpresa.webp'

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

const { Content } = Layout;

const products = [
  { title: "Combo Yaguareño", img: Yaguara, description:"Tamal acompañado de quesillo y chocolate"},
  { title: "Opita", img: Opita, description:"Almojabana acompañada con chocolate" },
  { title: "Cumpleaños", img: Cumple, description:"Torta de chocolate con gaseosa 1.25lts" },
  { title: "Desayuno Sorpresa", img: Sorpresa, description:"Desayuno para Celebrar tus fechas especiales" },
  ];

const Combos = () => {
  return (
    <>
    <Layout>
    <Content style={{ minHeight: '100vh' }}>
        <Row justify="center" align="middle" style={{ marginTop: "30px", height: "150px" }}>
            <Col span={16}>
                <div style={cajaDecoracion}>
                  <span style={texto}>COMBOS</span>
                </div>  
            </Col>
        </Row>  
      
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
