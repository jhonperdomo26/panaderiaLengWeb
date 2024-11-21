import "../css/main.css";
import React, { useState } from "react";
import { Card, Col, Layout, Row } from 'antd';
import Naranja from '../img/Naranja.webp'
import Zanahoria from '../img/Zanahoria.webp'
import Verde from '../img/Verde.webp'
import Milo from '../img/Milo.webp'
import Americano from '../img/Americano.webp'
import Capu from '../img/Capu.webp'
import Choco from '../img/Choco.webp'
import Coke from '../img/Coke.webp'
import Expreso from '../img/Expreso.webp'
import Limonada from '../img/Limonada.webp'
import Avena from '../img/Avena.webp'
import Sevillana from '../img/Sevillana.webp'
import FondoBeb from '../img/FondoBeb.webp'

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
  backgroundImage: `url(${FondoBeb})`,
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

const { Content } = Layout;

const products = [
  { title: "Jugo de Naranja", img: Naranja, description:"Delicioso y refrescante"},
  { title: "Jugo de Zanahoria", img: Zanahoria, description:"Delicioso y saludable" },
  { title: "Batido Verde", img: Verde, description:"Saludable y fresco" },
  { title: "Milo Frío", img: Milo, description:"Delicioso y refrescante" },
  { title: "Americano", img: Americano, description:"Delicioso y reconfortante" },
  { title: "Capuccino", img: Capu, description:"Delicioso y reconfortante" },
  { title: "Chocolate", img: Choco, description:"Delicioso y reconfortante" },
  { title: "Gaseosa", img: Coke, description:"Deliciosa y refrescante" },
  { title: "Expreso", img: Expreso, description:"Delicioso y energizante" },
  { title: "Limonada", img: Limonada, description:"Deliciosa y refrescante" },
  { title: "Avena", img: Avena, description:"Deliciosa y muy tradicional" },
  { title: "Sevillana", img: Sevillana, description:"Deliciosa y muy tradicional" },
  ];

  const Bebidas = ({ addToCart }) => {
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
                  <span style={texto}>BEBIDAS</span>
                </div>
              </Col>
            </Row>
            {Array.from({ length: Math.ceil(products.length / 4) }, (_, i) => (
              <Row key={i} gutter={[16, 16]} justify="center" style={{  margin:'30px 200px' }}>
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
  
  export default Bebidas;
  