import { Navbar,Container,Nav,Row,Col } from 'react-bootstrap';
function Header() {
  return (
    <div className="Header">
        <Navbar className='dir-l shadow-sm' bg="white" expand="lg">
          <Container>
            <a className="btn btn-es fw-bold px-4 " href="#home">ثبت آگهی</a>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                  <Container className='pt-2'>
                      <Row>
                          <Col lg={4} className='ps-2'>
                            <a className="btn fw-bold px-3 btn-border" href="#">ورود مشاور</a>
                            <a className="btn fw-bold px-4 btn-border ms-2" href="#">ورود کاربر</a>
                          </Col>
                          <Col lg={6} >
                            <Nav defaultActiveKey="/home" className='dir-r pe-0' as="ul">
                              <Nav.Item as="li">
                                <Nav.Link href="/home">خرید</Nav.Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Nav.Link eventKey="link-1">رهن و اجاره</Nav.Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">مشاورین املاک</Nav.Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">مزایده</Nav.Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">مناقصه</Nav.Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">بلاگ</Nav.Link>
                              </Nav.Item>
                            </Nav>
                          </Col>
                          <Col sm className='dir-r pt-1 text-es fw-bold h3'>
                            <span>Estate</span>
                          </Col>
                        </Row>
                  </Container>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  );
}

export default Header;



