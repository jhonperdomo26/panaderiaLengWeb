import React, { useState } from "react";
import "../css/main.css";
import { Layout, Row, Col } from "antd"; 
import Yaguara from '../img/Yaguara.webp'
import Cumple from '../img/Cumple.webp'
import Opita from '../img/Opita.webp'
import Sorpresa from '../img/Sorpresa.webp'
import FondoPan from '../img/FondoPan.webp'



const cajaDecoracion = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '150px',
  backgroundColor: 'rgba(114, 93, 66, 1)',
  borderRadius: '20px'
};

const texto = {
  fontSize: '50px',
  fontWeight: 'bold',
  color: 'white',
  textAlign: 'center'
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
  zIndex: 2,                     // Asegura que el contenido esté encima del fondo
  padding: '20px',
};

const styleIcono = {
  fontSize: '10px',
  color: 'white',
};

const { Content } = Layout;

const products = [
  { title: "Combo Yaguareño", img: Yaguara, description: "Tamal acompañado de quesillo y chocolate" },
  { title: "Delicombo el Opita", img: Opita, description: "Almojabana acompañada con chocolate" },
  { title: "Combo Cumpleañero", img: Cumple, description: "Torta de chocolate con gaseosa 1.25lts" },
  { title: "Desayuno Sorpresa", img: Sorpresa, description: "Desayuno para Celebrar tus fechas especiales" },
];

const CustomCards = ({ addToCart }) => {
  const [isFlipped, setIsFlipped] = useState(Array(products.length).fill(false));
  const [quantities, setQuantities] = useState(Array(products.length).fill(0));

  const handleCardClick = (index) => {
    setIsFlipped((prevFlipped) => {
      const newFlipped = [...prevFlipped];
      newFlipped[index] = !prevFlipped[index];
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
                    <span style={texto}>COMBOS</span>
                  </div>  
              </Col>
          </Row>  

        
        <Row justify="center" style={{ marginTop: '20px' }}>
          <Col span={17}>
            <div className="custom-card-container">
              <div className="card-grid" style={{ width: '100%' }}>
                {products.map((product, index) => (
                  <div
                    key={index}
                    className={`custom-card ${isFlipped[index] ? "flipped" : ""}`}
                    onClick={() => handleCardClick(index)}
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
                                onClick={(e) => handleQuantityChange(index, 1, e)}
                              >
                                ▲
                              </button>
                              <button
                                className="quantity-button down"
                                onClick={(e) => handleQuantityChange(index, -1, e)}
                              >
                                ▼
                              </button>
                            </div>
                            <span className="quantity">{quantities[index]}</span>
                          </div>
                          <button
                            className="add-to-cart"
                            onClick={(e) => { e.stopPropagation(); addToCartHandler(index, e); }}
                          >
                            Agregar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
=======
  { title: "Opita", img: Opita, description: "Almojabana acompañada con chocolate" },
  { title: "Cumpleaños", img: Cumple, description: "Torta de chocolate con gaseosa 1.25lts" },
  { title: "Desayuno Sorpresa", img: Sorpresa, description: "Desayuno para Celebrar tus fechas especiales" },
];

const CustomCards = ({ addToCart }) => {
  const [isFlipped, setIsFlipped] = useState(Array(products.length).fill(false));
  const [quantities, setQuantities] = useState(Array(products.length).fill(0));

  const handleCardClick = (index) => {
    setIsFlipped((prevFlipped) => {
      const newFlipped = [...prevFlipped];
      newFlipped[index] = !prevFlipped[index];
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
    <Layout>
      <Content style={{ minHeight: '150vh' }}>
        {/* Contenedor del título alineado con las tarjetas */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "30px", marginBottom: "30px" }}>
          <div style={{ ...cajaDecoracion, width: 'calc(100% - 32px)' }}>
            <span style={texto}>COMBOS</span>
          </div>
        </div>

        {/* Contenedor de las tarjetas */}
        <div className="custom-card-container">
          <div className="card-grid" style={{ width: '100%' }}>
            {products.map((product, index) => (
              <div
                key={index}
                className={`custom-card ${isFlipped[index] ? "flipped" : ""}`}
                onClick={() => handleCardClick(index)}
                style={{ marginBottom: '20px' }} // Para separar las tarjetas
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
                            onClick={(e) => handleQuantityChange(index, 1, e)}
                          >
                            ▲
                          </button>
                          <button
                            className="quantity-button down"
                            onClick={(e) => handleQuantityChange(index, -1, e)}
                          >
                            ▼
                          </button>
                        </div>
                        <span className="quantity">{quantities[index]}</span>
                      </div>
                      <button
                        className="add-to-cart"
                        onClick={(e) => { e.stopPropagation(); addToCartHandler(index, e); }}
                      >
                        Añadir al carrito
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default CustomCards;
