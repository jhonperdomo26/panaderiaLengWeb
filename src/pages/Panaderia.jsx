import "../css/main.css";
import React, { useState } from "react";
import { Col, Layout, Row } from 'antd';
import Croissant from '../img/croissant.png';
import PanQue from '../img/pandequeso.png';
import Brownie from '../img/brownie.png';
import PanBrioche from '../img/panbrioche.png';
import PanGalleta from '../img/pangalleta.png';
import Cucas from '../img/cucas.png';
import Cañas from '../img/cañas.png';
import Panzerotti from '../img/panzerotti.png';
import PanMasaMadre from '../img/panmasamadre.png';
import PanHawaiano from '../img/panhawaiano.png';
import Pandebono from '../img/pandebono.png';
import Almojabanas from '../img/almojabanas.png';
import Mogollas from '../img/mogolla.png';
import PanAliñado from '../img/panaliñado.png';
import MojiconQueso from '../img/mojiconconqueso.png';
import PanBatido from '../img/panbatido.png';
import FondoPan from '../img/FondoPan.webp'




const cajaDecoracion = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '150px',
  backgroundColor: 'rgba(114, 93, 66, 1)',
  borderRadius: '20px',
};

const texto = {
  fontSize: '50px',
  fontWeight: 'bold',
  color: 'white',
  textAlign: 'center',
};

const fondoPagina = {
  position: 'relative',
  minHeight: '100vh',
  width: '100%',
  overflow: 'hidden',
};

const fondoImagen = {
  backgroundImage: `url(${FondoPan})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  opacity: 0.2,
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

const styleIcono = {
  fontSize: '10px',
  color: 'white',
};

const { Content } = Layout;

const products = [
  { title: "Croissant", img: Croissant, description: "Pan hojaldrado con jamón y queso" },
  { title: "Pan Brioche Dulce", img: PanBrioche, description: "Pan suave y ligeramente dulce" },
  { title: "Pan de Queso", img: PanQue, description: "Pan relleno de queso" },
  { title: "Pan Galleta", img: PanGalleta, description: "Pan con cubierta dulce y crujiente" },
  { title: "Cucas", img: Cucas, description: "Deliciosas cucas huilenses" },
  { title: "Caña", img: Cañas, description: "Pan dulce con un toque de azúcar" },
  { title: "Panzerotti", img: Panzerotti, description: "Pan crujiente relleno de queso" },
  { title: "Pan de Masa Madre", img: PanMasaMadre, description: "Pan artesanal de levadura natural" },
  { title: "Pan Hawaiano", img: PanHawaiano, description: "Pan relleno de queso y piña" },
  { title: "Pandebono", img: Pandebono, description: "Hecho con queso, yuca y harina de maíz" },
  { title: "Almojabana", img: Almojabanas, description: "Hecha con queso y almidón de yuca" },
  { title: "Mogolla", img: Mogollas, description: "Pan dulce y esponjoso con bocadillo" },
  { title: "Pan aliñado", img: PanAliñado, description: "Preparado con aceite, ajo y especias" },
  { title: "Mojicón con Queso", img: MojiconQueso, description: "Pan dulce relleno de queso" },
  { title: "Brownie", img: Brownie, description: "Crujiente por fuera y suave por dentro." },
  { title: "Pan Batido", img: PanBatido, description: "Delicioso y recién horneado" },
];

const Panaderia = ({ addToCart }) => {
  const [isFlipped, setIsFlipped] = useState(Array(products.length).fill(false));
  const [quantities, setQuantities] = useState(Array(products.length).fill(0));

  const handleCardClick = (index) => {
    setIsFlipped((prevFlipped) => {
      const newFlipped = [...prevFlipped];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };

  const handleQuantityChange = (index, change, event) => {
    event.stopPropagation();
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(newQuantities[index] + change, 0);
    setQuantities(newQuantities);
  };

  const addToCartHandler = (index, event) => {
    event.stopPropagation();
    if (quantities[index] > 0) {
      addToCart(products[index], quantities[index]);
      setQuantities([...quantities.slice(0, index), 0, ...quantities.slice(index + 1)]);
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={fondoPagina}>
        <div style={fondoImagen}></div>
        <div style={contenido}>
          <Row justify="center" align="middle" style={{ marginTop: "30px", height: "150px" }}>
            <Col span={16}>
              <div style={cajaDecoracion}>
                <span style={texto}>PANADERÍA</span>
              </div>
            </Col>
          </Row>
          {Array.from({ length: Math.ceil(products.length / 4) }, (_, i) => (
            <Row key={i} gutter={[16, 16]} justify="center" style={{ marginTop: "30px" }}>
              {products.slice(i * 4, (i + 1) * 4).map((product, index) => (
                <Col key={index} span={6}>
                  <div
                    className={`custom-card ${isFlipped[i * 4 + index] ? "flipped" : ""}`}
                    onClick={() => handleCardClick(i * 4 + index)}
                    style={{ marginBottom: '20px' }}
                  >
                    <div className="card-inner">
                      <div className="card-front">
                        <div className="card-header">
                          <div className="card-image-wrapper">
                            <img src={product.img} alt={product.title} className="card-image" />
                          </div>
                        </div>
                        <h3 style={{ padding: '15px', fontWeight: 900 }}>{product.title}</h3>
                      </div>
                      <div className="card-back">
                        <div className="background-image" style={{ backgroundImage: `url(${product.img})` }} />
                        <div className="card-content">
                          <h3 className="product-name">{product.title}</h3>
                          <p>{product.description}</p>
                          <div className="quantity-controls">
                            <div className="arrow-buttons">
                              <button
                                className="quantity-button up"
                                onClick={(e) => handleQuantityChange(i * 4 + index, 1, e)}
                              >
                                ▲
                              </button>
                              <button
                                className="quantity-button down"
                                onClick={(e) => handleQuantityChange(i * 4 + index, -1, e)}
                              >
                                ▼
                              </button>
                            </div>
                            <span className="quantity">{quantities[i * 4 + index]}</span>
                          </div>
                          <button
                            className="add-to-cart"
                            onClick={(e) => { e.stopPropagation(); addToCartHandler(i * 4 + index, e); }}
                          >
                            Agregar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          ))}
        </div>
      </Content>
    </Layout>
  );
};

export default Panaderia;
