import styled from "@emotion/styled";
import "../css/main.css/";
import { Layout, Flex, Row, Col, Space } from "antd";
import PaqCom from "../img/ComBeb.jpg";
import PanOrigen from "../img/PanOrigen.jpg";
import MPostres from "../img/MPostres.jpg";
import Bebi from "../img/Bebi.jpg";

const { Content } = Layout;

const Pan = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
`;

const ImagenPan = styled.img`
  width: 100%;
  height: auto;
`;

const ContenedorImagen = styled.div`
  width: 28%;
  height: 100%;
`;

const ImagenCombeb = styled.img`
  width: 145%;
  margin-left: 100px;
  height: auto;
  border-radius: 10px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.25);
`;
const ImagenPost = styled.img`
  width: 145%;
  margin-right: 100px;
  margin-left: 45px;
  height: auto;
  border-radius: 10px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.25);
`;

const H1 = styled.h1`
  margin: 20px;
  font-size: 26px;
`;

const H2 = styled.h2`
  font-size: 24px;
`;
const P = styled.p`
  margin: 20px;
  font-size: 18px;
  width: 100%;
  line-height: 1.5;
`;

const P1 = styled.p`
  margin: 20px;
  font-size: 18px;
  line-height: 1.5;
`;
const P2 = styled.p`
  font-size: 18px;
  text-align: right;
  line-height: 1.5;
  margin-left: 60px;
`;


const Eventose = () => (
  <>
    <Layout>
      <Content>
        <Pan>
          <ImagenPan src={PanOrigen} />
        </Pan>
        <Row style={{ margin: "5px 0px" }}>
          <Col span={4}></Col>
          <Col span={16}>
            <Flex justify="center" vertical>
              <H1>Eventos Especiales</H1>
              <Flex align="center" text-align="justify">
                <div style={{ width: "100%" }}>
                  <P>
                    <H2>
                      Matrimonios | Baby Showers | Aniversarios | Cumpleaños
                    </H2>
                    En nuestra panadería, sabemos que los momentos importantes
                    merecen ser acompañados de lo mejor. Ya sea un matrimonio,
                    un baby shower, un aniversario o un cumpleaños, nuestros
                    productos artesanales están diseñados para agregar un toque
                    de dulzura a tus celebraciones. Desde elegantes tortas de
                    bodas hasta delicados cupcakes personalizados, creamos con
                    pasión para que cada bocado refleje la alegría de tus
                    momentos especiales. ¡Deja que nuestros sabores formen parte
                    de tus recuerdos inolvidables!
                  </P>
                  <P style={{ marginBottom: "20px" }}> </P>
                </div>
              </Flex>

              <Flex align="center" justify="left" text-align="justify">
                <div style={{ width: "60%" }}>
                  <P1>
                    <H2>Comida & Bebida</H2>
                  </P1>
                  <P1>
                    En nuestra panadería, no solo nos especializamos en postres;
                    también ofrecemos una selección exquisita de comida salada y
                    bebidas diseñadas para complementar cualquier celebración.
                    Desde elegantes bocadillos hasta opciones refrescantes de
                    bebidas, nuestro menú está pensado para satisfacer todos los
                    gustos.
                  </P1>
                  <P style={{ marginBottom: "20px" }}> </P>
                  <P1>
                    Cuéntanos más sobre tu evento y crearemos un menú que se
                    adapte a tus necesidades. ¡Haz que tu ocasión especial sea
                    deliciosa en todos los sentidos!
                  </P1>
                  <P style={{ marginBottom: "20px" }}> </P>
                </div>
                <ContenedorImagen>
                  <Flex align="center" justify="center">
                    <ImagenCombeb src={Bebi} />
                  </Flex>
                </ContenedorImagen>
              </Flex>

              <Flex align="center" justify="right">
                <ContenedorImagen>
                  <Flex align="left" justify="center">
                    <ImagenPost src={MPostres} />
                  </Flex>
                </ContenedorImagen>
                <div style={{ width: "60%" }}>
                  <P2>
                    <H2>Mesa de postres</H2>
                  </P2>
                  <P2>
                    Haz que tu evento sea inolvidable con nuestra exclusiva Mesa
                    de Postres Completa. En Panadería Horneados, creamos mesas
                    personalizadas que combinan diseño y sabor, perfectas para
                    complementar tus celebraciones.
                  </P2>
                  <P2>
                    Sabemos que los detalles importan, y una mesa de postres
                    puede ser el centro de atención en cualquier celebración.
                    Para matrimonios, cumpleaños, aniversarios o cualquier
                    evento especial, nuestras mesas de postres están diseñadas
                    para impresionar tanto visualmente como en sabor.
                  </P2>
                  <P style={{ marginBottom: "50px" }}> </P>
                </div>
              </Flex>

              <Flex align="center" justify="left" text-align="justify">
                <div style={{ width: "60%" }}>
                  <P1>
                    <H2>Paquete Completo</H2>
                  </P1>
                  <P1>
                    Con nuestro Paquete Completo, nos encargamos de cada detalle
                    para que tu evento sea un éxito. Desde el pastel perfecto
                    hasta una deliciosa selección de bocadillos y bebidas,
                    ofrecemos una experiencia integral que hará de tu
                    celebración algo inolvidable.
                  </P1>
                  <P1>
                    Nuestro equipo personaliza cada paquete según tus
                    necesidades, para que tengas todo lo que necesitas en un
                    solo lugar. Ya sea un matrimonio, cumpleaños, baby shower o
                    aniversario, creamos un menú a medida, con productos frescos
                    y de calidad, cuidando la presentación y el sabor en cada
                    plato.
                  </P1>
                  <P style={{ marginBottom: "20px" }}> </P>
                </div>
                <ContenedorImagen>
                  <P style={{ marginBottom: "20px" }}> </P>
                  <Flex align="center" justify="center">
                    <ImagenCombeb src={PaqCom} />
                  </Flex>
                </ContenedorImagen>
              </Flex>
              <P style={{ marginBottom: "40px" }}> </P>
            </Flex>
          </Col>
          <Col span={4}></Col>
        </Row>
        <Space> </Space>
      </Content>
    </Layout>
  </>
);
export default Eventose;
