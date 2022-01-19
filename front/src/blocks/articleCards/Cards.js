import {Row,Col } from 'react-bootstrap';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
function ArticleCards({data,myClass=null}) {
  
    const cards = data.cards.map((card) =>(
        <Col lg={4} md={6} sm={12} className={"ArticleCards "+ myClass}>
             <ArticleCard img={card.img} title={card.title} content={card.content} href={card.href} />
        </Col>
    ));
  return (
        <Row>
            {cards}
        </Row>
  );
}

export default ArticleCards;



