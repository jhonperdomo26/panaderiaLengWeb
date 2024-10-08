import 'antd/dist/reset.css';
import '../css/main.css';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const Cabecera = () => {
  return (
    <Header className='Cabeza'>
      <div className='Logo'>
        Panadería
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
        <Menu.Item key="1">Menú</Menu.Item>
        <Menu.Item key="2">Nosotros</Menu.Item>
        <Menu.Item key="3">Eventos</Menu.Item>
        <Menu.Item key="3">API</Menu.Item>
      </Menu>
    </Header>
  )
}

export default Cabecera