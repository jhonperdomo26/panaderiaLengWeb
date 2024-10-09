import { Col, Row, Space } from 'antd';
import React from 'react';
import { FacebookOutlined, InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons';

const Footer = () => {
    return (
        <footer>
            
            <Row className="container p-3 text-white text-center">
                <Col span={8}>LOGO</Col>
                <Col span={8}>
                    <div>Teléfonos</div>
                    <div>(608) 863 3424 - (+57) 312 536 2218</div>
                    <Space> </Space>
                    <div>Lunes - Domingo</div>
                    <div>5 A.M - 10 P.M</div>
                    <Space> </Space>
                    <div>Cra 7 #56-16</div>
                    <Space> </Space>
                    <div>panhorneados@gmail.com</div>
                </Col>
                <Col span={8}>
                    <Row>
                        <FacebookOutlined style={{ fontSize: '32px', transform: 'translateX(+50%)' }}/>
                    </Row>
                    <Space> </Space>
                    <Row>
                        <InstagramOutlined style={{ fontSize: '32px', transform: 'translateX(+50%)'  }}/>
                    </Row>
                    <Space> </Space>
                    <Row>
                        <WhatsAppOutlined style={{ fontSize: '32px', transform: 'translateX(+50%)'  }}/>
                    </Row>
                </Col>
            </Row>
            
            <div>
                <hr></hr>
            <p style={{transform: 'translateX(+45%)'}}>&copy; 2024    Panaderia Horneados</p>
            </div>
        </footer>
    );
}

export default Footer;
