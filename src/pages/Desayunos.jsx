import "../css/main.css";
import React, { useState } from "react";
import { Card, Col, Layout, Row } from "antd";
import Pericos from "../img/Pericos.webp";
import Rancheros from "../img/Rancheros.webp";
import OmelettePollo from "../img/OmelettePollo.webp";
import OmeletteRanch from "../img/OmeletteRanch.webp";
import Calentado from "../img/Calentado.webp";
import CrepePollo from "../img/CrepePollo.webp";
import Waffle from "../img/Waffle.webp";
import TostadasFra from "../img/TostadasFra.webp";
import Bistec from "../img/Bistec.webp";
import SanPollo from "../img/SanPollo.webp";
import Tamal from "../img/Tamal.webp";
import Fruta from "../img/Fruta.webp";
import FondoDes from "../img/FondoDes.webp";

const cajaDecoracion = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "150px",
  backgroundColor: "rgba(114, 93, 66, 1)",
  borderRadius: "20px",
};

const texto = {
  fontSize: "50px",
  fontWeight: "bold",
  color: "white",
  textAlign: "center",
};

const fondoPagina = {
  position: "relative",
  minHeight: "100vh",
  width: "100%",
  overflow: "hidden",
};

const fondoImagen = {
  backgroundImage: `url(${FondoDes})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  opacity: 0.2,
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1,
};

const contenido = {
  position: "relative",
  zIndex: 2,
  padding: "20px",
};

const { Content } = Layout;

const products = [
  { title: "Huevos Pericos", img: Pericos, description: "Huevos con Cebolla y Tomate" },
  { title: "Huevos Rancheros", img: Rancheros, description: "Huevos batidos con Salchicha" },
  { title: "Omelette de Pollo", img: OmelettePollo, description: "Delicioso Omelette con Pollo" },
  { title: "Omelette Ranchero", img: OmeletteRanch, description: "Delicioso Omelette con Jamón y Queso" },
  { title: "Calentado", img: Calentado, description: "Calentado de Arroz con Frijoles" },
  { title: "Crepe de Pollo", img: CrepePollo, description: "Tortilla Delgada de Trigo con Pollo" },
  { title: "Waffles de Buñuelo", img: Waffle, description: "Deliciosos Waffles de Mezcla de Buñuelos" },
  { title: "Tostadas Francesas", img: TostadasFra, description: "Pan Dorado con Miel y Frutas" },
  { title: "Carne al Bistec", img: Bistec, description: "Delicioso y recién horneado" },
  { title: "Sandwich de Pollo", img: SanPollo, description: "Delicioso y recién horneado" },
  { title: "Tamal", img: Tamal, description: "Delicioso y recién horneado" },
  { title: "Ensalada de Frutas", img: Fruta, description: "Delicioso y recién horneado" },
];

const Desayunos = ({ addToCart }) => {
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
    <Layout style={{ minHeight: "100vh" }}>
      <Content style={fondoPagina}>
        <div style={fondoImagen}></div>
        <div style={contenido}>
          <Row justify="center" align="middle" style={{ marginTop: "30px", height: "150px" }}>
            <Col span={16}>
              <div style={cajaDecoracion}>
                <span style={texto}>DESAYUNOS</span>
              </div>
            </Col>
          </Row>
          {Array.from({ length: Math.ceil(products.length / 4) }, (_, i) => (
            <Row key={i} gutter={[16, 16]} justify="center" style={{ margin: "30px 200px" }}>
              {products.slice(i * 4, (i + 1) * 4).map((product, index) => (
                <Col key={index} span={6}>
                  <div
                    className={`custom-card ${isFlipped[i * 4 + index] ? "flipped" : ""}`}
                    onClick={() => handleCardClick(i * 4 + index)}
                    style={{ marginBottom: "20px" }}
                  >
                    <div className="card-inner">
                      <div className="card-front">
                        <div className="card-header">
                          <div className="card-image-wrapper">
                            <img src={product.img} alt={product.title} className="card-image" />
                          </div>
                        </div>
                        <h3 style={{ padding: "15px", fontWeight: 900 }}>{product.title}</h3>
                      </div>
                      <div className="card-back">
                        <div
                          className="background-image"
                          style={{ backgroundImage: `url(${product.img})` }}
                        />
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
                            onClick={(e) => addToCartHandler(i * 4 + index, e)}
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

export default Desayunos;

