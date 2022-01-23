import Title from '../../microComponents/Title';
import { Container,Row,Col } from 'react-bootstrap';
import SingleSelect from '../../components/SingleSelect';
import { Button,Form } from 'react-bootstrap';
import ImgUpload from '../../components/imgUpload/ImgUpload';
import Place from '../../components/place/Place';
import './New.css'
function New() { 
  return (
    <div className="New pt-5">
     <Container>
       <Row>
         <Col sm={12}>
         <Title title="ثبت آگهی املاک"/>
         </Col>
         <Col sm={12} className=''>
         <Form className="row pt-4 mt-3" >
            <Col sm={12}>
            <SingleSelect val={[
                "مرودشت",
                "شیراز",
                "لار",
                "زرقان",
                "نورآباد",
                "فسا"
            ]} 
            name="city" 
            title="شهر"
             myClass="col-lg-5 col-md-6 col-sm-9 col-12 mb-4 mx-auto text-dark"/>
            </Col>
            <Col sm={12}>
                <SingleSelect val={[
                    "معالی آباد",
                    "قصردشت",
                    "فرهنگ شهر",
                    "تاچارا",
                ]} 
                name="location" 
                title="محدوده"
                myClass="col-lg-5 col-md-6 col-sm-9 col-12 mb-4 mx-auto"/>
             </Col>
             <Col sm={12}>
                <SingleSelect val={[
                    "فروش مسکونی",
                    "اجاره مسکونی",
                    "فروش اداری و تجاری",
                    "اجاره اداری و تجاری",
                    "اجاره کوتاه مدت",
                    "پروژه های ساخت و ساز",
      
                ]} 
                name="type" 
                title="نوع ملک"
                myClass="col-lg-5 col-md-6 col-sm-9 col-12 mb-4 mx-auto"/>
            </Col>
            <Col sm={12}>
                <Form.Group className="col-lg-5 col-md-6 col-sm-9 col-12 mb-4 mx-auto" >
                  <Form.Control className='form-es border-0 shadow-es' type="number" placeholder="قیمت" />
                </Form.Group>
             </Col>
             <Col sm={12}>
                <Form.Group className="col-lg-5 col-md-6 col-sm-9 col-12 mb-4 mx-auto" >
                  <Form.Control className='form-es border-0 shadow-es' name="area" type="number" placeholder="متراژ" />
                </Form.Group>
             </Col>
             <Col sm={12}>
                <SingleSelect val={[
                    "45",
                    "50",
                    "60",
                    "65",
                ]} 
                name="assignment" 
                title="نوع واگذاری"
                myClass="col-lg-5 col-md-6 col-sm-9 col-12 mb-4 mx-auto"/>
            </Col>
            <Col sm={12}>
                <SingleSelect val={[
                    "1",
                    "2",
                    "3",
                    "4",
                ]} 
                name="room" 
                title="تعداد خواب"
                myClass="col-lg-5 col-md-6 col-sm-9 col-12 mb-4 mx-auto"/>
             </Col>
            <Col sm={12}>
                <SingleSelect val={[
                    "مشاوره املاک سبحان",
                    "مشاوره املاک حسین",
                    "مشاوره املاک سعیدی",
                ]} 
                name="author" 
                title="آگهی کننده"
                myClass="col-lg-5 col-md-6 col-sm-9 col-12 mb-4 mx-auto"/>
             </Col>
            <Col sm={12}>
                <SingleSelect val={[
                    "مشاور املاک سبحان",
                    "مشاور املاک حسین",
                    "مشاور املاک سعیدی",
                ]} 
                name="code" 
                title="کد مشاور املاک"
                myClass="col-lg-5 col-md-6 col-sm-9 col-12 mb-4 mx-auto"/>
             </Col>
             <Col sm={12}>
                <Form.Group className="col-lg-5 col-md-6 col-sm-9 col-12 mb-4 mx-auto" >
                  <Form.Control className='form-es border-0 shadow-es' type="number" placeholder="شماره تماس" />
                </Form.Group>
             </Col>
             <Col sm={12}>
                <Form.Group className="col-lg-5 col-md-6 col-sm-9 col-12 mb-4 mx-auto" >
                  <Form.Control className='form-es border-0 shadow-es'  placeholder="عنوان آگهی" />
                </Form.Group>
             </Col>
             <Col sm={12}>
                 <Form.Group className="col-lg-5 col-md-6 col-sm-9 col-12 mb-4 mx-auto" >
                    <Form.Control className='form-es border-0 shadow-es' as="textarea" rows={6} placeholder='توضیحات آگهی' />
                </Form.Group>
             </Col>
             <Col sm={12}>
                 <ImgUpload/>
             </Col>
             <Col sm={12}>
               <Place/>
             </Col>
            <div className='col-12 text-center mt-2'>
              <Button className='btn mx-auto btn-es shadow-es fw-bold col-lg-2 col-md-4 col-sm-6 col-12' type="submit">
                  ثبت آگهی
              </Button>
            </div>
        </Form>
         </Col>
         
       </Row>
     </Container>
    </div> 
  );
}

export default New;