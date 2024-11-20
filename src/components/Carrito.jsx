import React from 'react';
import { Modal, Button } from 'antd'; // Importamos los componentes de Ant Design

const Carrito = ({ carrito, onClose }) => {
  return (
    <Modal
      title="Tu Carrito"
      visible={true} // El modal será visible si la propiedad `visible` es `true`
      onCancel={onClose} // Cerramos el modal al hacer clic en el botón de cerrar
      footer={[
        <Button key="back" onClick={onClose}>
          Cerrar
        </Button>,
      ]}
      width={500} // Ajustamos el ancho del modal
      style={{ top: 20 }}
    >
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p> // Si el carrito está vacío
      ) : (
        <div>
          {carrito.map((item, index) => (
            <div key={index} className="carrito-item">
              <h3>{item.title}</h3>
              <p>{item.price}</p>
              <p>Cantidad: 1</p>
            </div>
          ))}
        </div>
      )}
    </Modal>
  );
};

export default Carrito;
