import { Container,Row,Col } from 'react-bootstrap';
import ArticleCards from '../blocks/articleCards/Cards';
import Title from '../microComponents/Title';
import Pagination from 'react-bootstrap/Pagination'

function Articles(){
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
    let paginationConfig = {
        totalPages: 22,
        currentPage: 15,
        showMax: 5,
        size: "lg",
        threeDots: true,
        prevNext: true,
        href: 'http://localhost/items?page=*', 
        pageOneHref: 'http://localhost/items',
        borderColor: 'red',
        activeBorderColor: 'black',
        activeBgColor: 'grey',
        disabledBgColor: 'red',
        activeColor: 'red',
        color: 'purple',
        disabledColor: 'green',
        circle: true,
        shadow: true
      };
    return(
        <div className="Articles">
            <Container className="pt-5 pb-4">
                <Title title="مجله های املاک ساسان"/>
                <ArticleCards data={data} myClass="pt-4 px-3 mt-2"/>
                <Row className='pt-5'>
                    <Col lg={5} md={6} className='mx-auto'>
                        <Pagination {...paginationConfig} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Articles;