import "../css/main.css";
import { Card, Col, Layout, Row, Flex } from 'antd';
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
import { useTranslation } from "react-i18next";


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
  { title: "Croissant", img: Croissant, description:"Delicioso y recién horneado"},
  { title: "Pan Brioche Dulce", img: PanBrioche, description:"Delicioso y recién horneado" },
  { title: "Pan de Queso", img: PanQue, description:"Delicioso y recién horneado" },
  { title: "Pan Galleta", img: PanGalleta, description:"Delicioso y recién horneado" },
  { title: "Cucas", img: Cucas, description:"Delicioso y recién horneado" },
  { title: "Caña", img: Cañas, description:"Brownies melcochudos" },
  { title: "Panzerotti", img: Panzerotti, description:"Delicioso y recién horneado" },
  { title: "Pan de Masa Madre", img: PanMasaMadre, description:"Delicioso y recién horneado" },
  { title: "Pan Hawaiano", img: PanHawaiano, description:"Delicioso y recién horneado" },
  { title: "Pandebono", img: Pandebono, description:"Delicioso y recién horneado" },
  { title: "Almojabanas", img: Almojabanas, description:"Delicioso y recién horneado" },
  { title: "Mogollas", img: Mogollas, description:"Delicioso y recién horneado" },
  { title: "Pan aliñado", img: PanAliñado, description:"Delicioso y recién horneado" },
  { title: "Mojicón con Queso", img: MojiconQueso, description:"Delicioso y recién horneado" },
  { title: "Brownie", img: Brownie, description:"Delicioso y recién horneado" },
  { title: "Pan Batido", img: PanBatido, description:"Delicioso y recién horneado" },
];

const Panaderia = () => {
  const {t} = useTranslation();
  return (
    <>
    <Layout>
      <Content style={{ minHeight: '150vh' }}>

      <Row justify="center" align="middle" style={{ marginTop: "30px", height: "150px" }}>
          <Col span={16}>
              <div style={cajaDecoracion}>
                <span style={texto}>{t("Panadería")}</span>
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

export default Panaderia;