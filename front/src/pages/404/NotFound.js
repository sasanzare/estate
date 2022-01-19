import React from 'react';
import { Link } from 'react-router-dom';
import { Container,Row,Col } from 'react-bootstrap';
import './NotFound.css'
const NotFound = () => (
  <div className='NotFound vh-95 d-flex align-items-center'>
      <Container className='pt-5'>
          <Row>
              <Col className=' d-flex justify-content-end col-lg-4 col-md-5 col-sm-7 col-11 mx-auto pt-4'>
                <div class="es-elevator bg-light rounded-4">
                    <div class="es-floor  d-flex justify-content-center">
                        <h3 className='text-es text-center rounded-3  px-3 pt-2 mt-1 fw-bold border'>404</h3>
                    </div>
                    <div id="doors" class="es-doors bg-white rounded-4 shadow-lg d-flex justify-content-center align-items-center flex-column">
                        <p className='fw-bold'>
                        این راه به جایی نمی‌رسد!
                        </p>
                        <Link to="/" className='btn btn-es col-8 rounded-3 he-fit' >بازگشت به خانه</Link>
                    </div>
                    
                    <div class="es-switch rounded-2 shadow-sm">
                        <Link to="/about"></Link>
                        <Link to="/contact"></Link>
                    </div>
                </div>

              </Col>
          </Row>
      </Container>
  </div>
);

export default NotFound;