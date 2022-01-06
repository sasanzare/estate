import { Container,Row,Col } from 'react-bootstrap';
import Header from '../blocks/header/Header.js';
import Footer from '../blocks/footer/Footer';
import Search from '../blocks/search/Search';
function Home() {
  return (
    <div className="Home">
      <Header />
        <Container  className="pt-5">
            <Row>
                <Col sm={12} className='text-center'>
                    <h1 className='h5 fw-bold' style={{ fontFamily: 'yekan'}}>
                        خرید خانه و آپارتمان با املاک ساسان</h1>
                        <span>جستجو خود را آغاز کنید!</span>
                </Col>
                <Col sm={12}><Search/></Col>
            </Row>
        </Container>
        <Footer/>
    </div>
  );
}

export default Home;