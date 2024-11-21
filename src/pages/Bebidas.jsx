import { useState } from "react";
import { Layout, Row, Col, Button, Modal } from 'antd';
import Naranja from '../img/Naranja.webp';
import Zanahoria from '../img/Zanahoria.webp';
import Verde from '../img/Verde.webp';
import Milo from '../img/Milo.webp';
import Americano from '../img/Americano.webp';
import Capu from '../img/Capu.webp';
import Choco from '../img/Choco.webp';
import Coke from '../img/Coke.webp';
import Expreso from '../img/Expreso.webp';
import Limonada from '../img/Limonada.webp';
import Avena from '../img/Avena.webp';
import Sevillana from '../img/Sevillana.webp';
import FondoBeb from '../img/FondoBeb.webp';
import { useTranslation } from "react-i18next";

// Estilos en línea
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




const Bebidas = () => {
  const { t } = useTranslation(); 

  const products = [
    { title: [t("Jugo de Naranja")], img: Naranja, description:[t("DJugo de Naranja")], price: 10 },
    { title: [t("Jugo de Zanahoria")], img: Zanahoria, description:[t("DJugo de Zanahoria")], price: 10 },
    { title: [t("Batido Verde")], img: Verde, description: [t("DBatido Verde")], price: 10 },
    { title: [t("Milo Frío")], img: Milo, description: [t("DMilo Frío")], price: 10 },
    { title: [t("Americano")], img: Americano, description: [t("DAmericano")], price: 10 },
    { title: [t("Capuccino")], img: Capu, description:[t("DCapuccino")], price: 10 },
    { title: [t("Chocolate")], img: Choco, description:[t("DChocolate")], price: 10 },
    { title: [t("Gaseosa")], img: Coke, description:[t("DGaseosa")], price: 10 },
    { title: [t("Expreso")], img: Expreso, description:[t("DExpreso")], price: 10 },
    { title: [t("Limonada")], img: Limonada, description:[t("DLimonada")], price: 10 },
    { title: [t("Avena")], img: Avena, description: [t("DAvena")], price: 10 },
    { title: [t("Sevillana")], img: Sevillana, description:[t("DSevillana")], price: 10 },
  ];
  
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState(Array(products.length).fill(0));
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isFlipped, setIsFlipped] = useState(Array(products.length).fill(false));

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
      setIsModalVisible(true);  // Mostrar modal del carrito al agregar un producto
    }
  };

  const handleCardClick = (index) => {
    setIsFlipped((prevFlipped) => {
      const newFlipped = [...prevFlipped];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={fondoPagina}>
        <div style={fondoImagen}></div>
        <div style={contenido}>
          <Row justify="center" align="middle" style={{ marginTop: "30px", height: "150px" }}>
            <Col span={16}>
              <div style={cajaDecoracion}>
                <span style={texto}>{t("BEBIDAS")}</span>
              </div>
            </Col>
          </Row>
          {Array.from({ length: Math.ceil(products.length / 4) }, (_, i) => (
            <Row key={i} gutter={[16, 16]} justify="center" style={{ margin:'30px 200px' }}>
              {products.slice(i * 4, (i + 1) * 4).map((product, index) => (
                <Col key={index} span={6}>
                  <div
                    className={`custom-card ${isFlipped[i * 4 + index] ? "flipped" : ""}`}
                    onClick={() => handleCardClick(i * 4 + index)}  // Al hacer clic en la tarjeta, se voltea
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
                          <p><strong>${product.price}</strong></p>
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
                            {t("Agregar")}
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

        {/* Modal con carrito */}
              <Modal
        title="Tu Carrito"
        visible={isModalVisible}
        onCancel={handleCloseModal}
        footer={[
          <Button key="back" onClick={handleCloseModal}>
            {t("Cerrar")}
          </Button>,
        ]}
        width={500}
        style={{ top: 20 }}
      >
        {cart.length === 0 ? (
          <p>{t("El carrito está vacío.")}</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div key={index} className="carrito-item" style={{ display: 'flex', marginBottom: '15px' }}>
                <img src={item.img} alt={item.title} style={{ width: '50px', marginRight: '10px' }} />
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
      </Content>
    </Layout>
  );
};

export default Bebidas;
