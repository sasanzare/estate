import { Container,Row,Col } from 'react-bootstrap';
import Search from '../blocks/search/Search';
import Title from '../microComponents/Title';
import Carousel from '../blocks/carousel/Carousel';
import Sugess from '../blocks/sugess/Sugess';
import RegisterCard from '../components/RegisterCard';
import ArticleCards from '../blocks/articleCards/Cards';
function Home() {
    const data = {
        "cards": [
          {
            'img' : './img/article1.png',
            'title': 'خرید خانه در شیراز',
           'content' : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،',
           'href':'',
          },
          {
            'img' : './img/article2.png',
            'title': 'خرید خانه در تهران',
           'content' : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،',
           'href':'',
          },
          {
            'img' : './img/article3.png',
            'title': 'نکات قبل از خرید ملک',
           'content' : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،',
           'href':'',
          },
        ]
    };
  return (
        <Container  className="Home pt-5 mt-5 pb-4">
            <Row>
                <Col sm={12} className='text-center pt-3'>
                    <h1 className='h5 fw-bold' style={{ fontFamily: 'yekan'}}>
                        خرید خانه و آپارتمان با املاک ساسان</h1>
                        <span>جستجو خود را آغاز کنید!</span>
                </Col>
                <Col lg={10} sm={12} className='mx-auto'><Search/></Col>
                <Title title="آژانس‌های املاک برتر"/>
                <Col sm={12} className='pt-5'><Carousel/></Col>
                <Title title="املاک پیشنهادی ساسان"/>
                <Col sm={12} className='pt-5'><Sugess/></Col>
                <Title title="ورود و ثبت‌نام"/>
                <Col md={6} sm={12} className='pt-5'>
                    <RegisterCard title="ثبت‌نام رایگان کاربر" content="برای درج رایگان انواع آگهی ملک ثبت‌نام کرده و وارد حساب کاربری خود شوید." btn="ثبت نام کاربر" />
                </Col>
                <Col md={6} sm={12} className='pt-5'>
                    <RegisterCard title="ثبت‌نام پیشرفته مشاورین املاک" content="برای درج رایگان انواع آگهی ملک ثبت‌نام کرده و وارد حساب کاربری خود شوید." btn="ثبت‌نام مشاور" />
                </Col>
                <Title title="مجله املاک ساسان"/>
                
            </Row>
            <ArticleCards data={data} myClass="pt-5 "/>
        </Container>
  );
}

export default Home;