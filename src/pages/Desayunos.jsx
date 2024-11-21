import React, { useState } from "react";
import "../css/main.css";
import { Layout, Row, Col, Modal, Button } from "antd";
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
  { title: "Huevos Pericos", img: Pericos, description: "Huevos con Cebolla y Tomate", price: 10 },
  { title: "Huevos Rancheros", img: Rancheros, description: "Huevos batidos con Salchicha", price: 10 },
  { title: "Omelette de Pollo", img: OmelettePollo, description: "Delicioso Omelette con Pollo", price: 10 },
  { title: "Omelette Ranchero", img: OmeletteRanch, description: "Delicioso Omelette con Jamón y Queso", price: 10 },
  { title: "Calentado", img: Calentado, description: "Calentado de Arroz con Frijoles", price: 10 },
  { title: "Crepe de Pollo", img: CrepePollo, description: "Tortilla Delgada de Trigo con Pollo", price: 10 },
  { title: "Waffles de Buñuelo", img: Waffle, description: "Deliciosos Waffles de Mezcla de Buñuelos", price: 10 },
  { title: "Tostadas Francesas", img: TostadasFra, description: "Pan Dorado con Miel y Frutas", price: 10 },
  { title: "Carne al Bistec", img: Bistec, description: "Delicioso y recién horneado", price: 10 },
  { title: "Sandwich de Pollo", img: SanPollo, description: "Delicioso y recién horneado", price: 10 },
  { title: "Tamal", img: Tamal, description: "Delicioso y recién horneado", price: 10 },
  { title: "Ensalada de Frutas", img: Fruta, description: "Delicioso y recién horneado", price: 10 },
];

const Desayunos = () => {
  const [isFlipped, setIsFlipped] = useState(Array(products.length).fill(false));
  const [quantities, setQuantities] = useState(Array(products.length).fill(0));
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [cart, setCart] = useState([]);

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
      const newItem = { ...products[index], quantity: quantities[index] };
      setCart((prevCart) => [...prevCart, newItem]);
      setQuantities([...quantities.slice(0, index), 0, ...quantities.slice(index + 1)]);
      setIsModalVisible(true); // Mostrar el modal al agregar el producto
    }
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
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
            <Row key={i} gutter={[16, 16]} justify="center" style={{ margin: "30px 200px " }}>
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
                          <p>
                            <strong>${product.price}</strong>
                          </p>
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
                            onClick={(e) => {
                              e.stopPropagation();
                              addToCartHandler(i * 4 + index, e);
                            }}
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

      {/* Modal para mostrar el carrito */}
      <Modal
        title="Tu Carrito"
        visible={isModalVisible}
        onCancel={handleCloseModal}
        footer={[
          <Button key="back" onClick={handleCloseModal}>
            Cerrar
          </Button>,
        ]}
        width={500}
        style={{ top: 20 }}
      >
        {cart.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div key={index} className="carrito-item" style={{ display: "flex", marginBottom: "15px" }}>
                <img src={item.img} alt={item.title} style={{ width: "50px", marginRight: "10px" }} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{`Precio: $${item.price}`}</p>
                  <p>{`Cantidad: ${item.quantity}`}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </Modal>
    </Layout>
  );
};

export default Desayunos;
