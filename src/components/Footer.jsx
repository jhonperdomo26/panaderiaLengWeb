import { Col, Row, Space } from 'antd';
import React from 'react';
import { FacebookOutlined, InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons';
import styled from '@emotion/styled'
import Logo from '../img/logoHorneados.png'

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 250px auto 0 auto;
  display: block;
`
const Contenedor = styled.div`
  background: #D6C9A6;
`
const Texto = styled.h2`
  font-family: "Sansita Swashed", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
  margin-top: 10px;
`


const Footer = () => {
    return (
        <footer>
            <Contenedor>
            <Row>
                <Col span={8} className='Logo'>
                <Imagen src={Logo}></Imagen>
                </Col>
                <Col span={8}>
                    <Texto>Teléfonos</Texto>
                    <Texto>(608) 863 3424 - (+57) 312 536 2218</Texto>
                    <Space> </Space>
                    <Texto>Lunes - Domingo</Texto>
                    <Texto>5 a.m - 10 p.m</Texto>
                    <Space> </Space>
                    <Texto>Cra 7 #56-16</Texto>
                    <Space> </Space>
                    <Texto>panhorneados@gmail.com</Texto>
                </Col>
                <Col span={8} style={{alignContent:'center'}}>
                    <Row style={{alignItems: 'center'}}>
                        <FacebookOutlined style={{ fontSize: '50px', transform: 'translateX(+60%)', margin:'15px' }}/>
                        <a 
                            href='https://www.facebook.com/profile.php?id=61566846787614'
                            target="_blank" 
                            style={{transform: 'translateX(+9%)',
                                color:'black'
                            }}
                        >
                        <Texto > Panadería Horneados </Texto>
                        </a>
                        
                    </Row>
                    <Space> </Space>
                    <Row style={{alignItems: 'center'}}>
                        <InstagramOutlined style={{ fontSize: '50px', transform: 'translateX(+60%)', margin:'15px' }}/>
                        <a 
                            href='https://www.instagram.com/panaderiahorneados1/'
                            target="_blank" 
                            style={{transform: 'translateX(+9%)',
                                color:'black'
                            }}
                        >
                            <Texto > @panaderiahorneados1 </Texto>
                        </a>
                        
                    </Row>
                    <Space> </Space>
                    <Row style={{alignItems: 'center'}}>
                        <WhatsAppOutlined style={{ fontSize: '45px', transform: 'translateX(+75%)', margin:'15px'  }}/>
                        <a 
                            href='https://api.whatsapp.com/send?phone=573125362118'
                            target="_blank" 
                            style={{transform: 'translateX(+15%)',
                                color:'black'
                            }}
                        >
                            <Texto >    (+57) 312 536 2218 </Texto>
                        </a>
                    </Row>
                </Col>
            </Row>
            <hr></hr>
            <div style={{ fontSize: '20px', textAlign: 'center'}}>
            &copy; 2024    Panaderia Horneados
            </div>
            </Contenedor>
        </footer>
    );
}

export default Footer;
