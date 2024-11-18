import 'antd/dist/reset.css';
import '../css/main.css';
import { DownOutlined } from '@ant-design/icons';
import { Layout, Menu, Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';
import LogoSimple from '../img/LogoSimple.webp';
import styled from '@emotion/styled';

const Imagen = styled.img`
  display: block;
  margin: 0 auto;
  width: 72px;
  height: 72px;
  cursor: pointer;
`


const items = [
  {
    label: <Link to="/Panaderia">Panaderia</Link>,
    key: "1",
  },
  {
    label: <Link to="/Pasteleria">Pastelería</Link>,
    key: "2",
  },
  {
    label: <Link to="/Desayunos">Desayunos</Link>,
    key: "3",
  },
  {
    label: <Link to="/Bebidas">Bebidas</Link>,
    key: "4",
  },
  {
    label: <Link to="/Combos">Combos</Link>,
    key: "5",
  },
];

const { Header } = Layout;

const Cabecera = () => {
  return (
    <Layout>
      <Header className="Cabeza" style={{ backgroundColor: '#f0ca83', display: 'flex', justifyContent: 'space-between', alignItems: 'center'  }}>
        <Link to="/" className="Logo">
        <Imagen src={LogoSimple}></Imagen>
        </Link>
        <div style={{ marginLeft:'auto'}}>
          <Menu theme='#f0ca83' mode="horizontal" selectable={false} style={{ lineHeight: '70px', width: '400px', alignItems: 'center', fontSize:'20px', fontWeight:'bold', justifyContent: 'space-between'}}>
            <Menu.Item key="1">
              <Dropdown
                menu={{
                  items,
                }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space style={{color:'#541e12'}}>
                    Menú
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </Menu.Item>

            <Menu.Item key="2">
              <Link to="/Nosotros" style={{color:'#541e12'}}>Nosotros</Link>
            </Menu.Item>

            <Menu.Item key="3">
              <Link to="/Eventos" style={{color:'#541e12'}}>Eventos</Link>
            </Menu.Item>

            <Menu.Item key="4">
              <Link to="/API" style={{color:'#541e12'}}>API</Link>
            </Menu.Item>
          </Menu>
        </div>
      </Header>
    </Layout>
  );
};

export default Cabecera;
