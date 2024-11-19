import "../css/main.css";
import { Card, Col, Layout, Row } from 'antd';
import Pericos from '../img/Pericos.webp';
import Rancheros from '../img/Rancheros.webp'
import OmelettePollo from '../img/OmelettePollo.webp'
import OmeletteRanch from '../img/OmeletteRanch.webp'
import Calentado from '../img/Calentado.webp'
import CrepePollo from '../img/CrepePollo.webp'
import Waffle from '../img/Waffle.webp'
import TostadasFra from '../img/TostadasFra.webp'
import Bistec from '../img/Bistec.webp'
import SanPollo from '../img/SanPollo.webp'
import Tamal from '../img/Tamal.webp'
import Fruta from '../img/Fruta.webp'

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
  { title: "Huevos Pericos", img: Pericos, description:"Huevos con Cebolla y Tomate"},
  { title: "Huevos Rancheros", img: Rancheros, description:"Huevos batidos con Salchicha" },
  { title: "Omelette de Pollo", img: OmelettePollo, description:"Delicioso Omelette con Pollo" },
  { title: "Omelette Ranchero", img: OmeletteRanch, description:"Delicioso Omelette con Jamón y Queso" },
  { title: "Calentado", img: Calentado, description:"Calentado de Arroz con Frijoles" },
  { title: "Crepe de Pollo", img: CrepePollo, description:"Tortilla Delgada de Trigo con Pollo" },
  { title: "Waffles de Buñuelo", img: Waffle, description:"Deliciosos Waffles de Mezcla de Buñuelos" },
  { title: "Tostadas Francesas", img: TostadasFra, description:"Pan Dorado con Miel y Frutas" },
  { title: "Carne al Bistecc", img: Bistec, description:"Delicioso y recién horneado" },
  { title: "Sandwich de Pollo", img: SanPollo, description:"Delicioso y recién horneado" },
  { title: "Tamal", img: Tamal, description:"Delicioso y recién horneado" },
  { title: "Ensalada de Frutas", img: Fruta, description:"Delicioso y recién horneado" },
  ];


const Desayunos = () => {
  return (
    <>
    <Layout>
    <Content style={{ minHeight: '150vh' }}>
        <Row justify="center" align="middle" style={{ marginTop: "30px", height: "150px" }}>
            <Col span={16}>
                <div style={cajaDecoracion}>
                  <span style={texto}>DESAYUNOS</span>
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

      </Content>
    </Layout>

    </>
    
  );
};

export default Desayunos;
