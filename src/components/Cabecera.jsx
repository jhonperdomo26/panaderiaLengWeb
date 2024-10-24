import 'antd/dist/reset.css';
import '../css/main.css';
import { DownOutlined } from '@ant-design/icons';
import { Layout, Menu, Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';

const items = [
  {
    label: <Link to="/Panaderia">Panadería</Link>,
    key: '1',
  },
  {
    label: <Link to="/Pasteleria">Pastelería</Link>,
    key: '2',
  },
  {
    label: 'Desayunos',
    key: '3',
  },
  {
    label: 'Bebidas',
    key: '4',
  },
  {
    label: 'Combos',
    key: '5',
  },

];

const { Header } = Layout;

const Cabecera = () => {
  return (
    <Layout>
      <Header className='Cabeza'>

        <Link to="/" className='Logo'>
          Panadería
        </Link>

        <Menu theme="dark" mode="horizontal" selectable={false} style={{ lineHeight: '64px' }}>
          <Menu.Item key="1">
            <Dropdown
              menu={{
                items,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Menú
                  <DownOutlined />  
                </Space>
              </a>
            </Dropdown>
          </Menu.Item>

          <Menu.Item key="2">
            <Link to="/Nosotros">Nosotros</Link>
          </Menu.Item>

          <Menu.Item key="3">
            <Link to="/Eventos">Eventos</Link>
          </Menu.Item>

          <Menu.Item key="4">API</Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default Cabecera