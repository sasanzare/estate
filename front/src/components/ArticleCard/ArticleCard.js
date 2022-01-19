import {Link} from "react-router-dom";
import './ArticleCard.css';
function ArticleCard({img,title,content,href}) { 
  return (
    <div className="ArticleCard rounded-3 text-center shadow-es pb-3">
        <img src={img} className="w-100" height={200} />
        <h6 className='pt-3 text-truncate fw-bold'>{title}</h6>
        <p className='px-3 f-15 lh-lg content' style={{height:120}}>{content}</p>
        <Link  to={href} className="btn btn-es col-lg-6 col-md-8 col-8 rounded-3 he-fit">مشاهده ادامه مطلب</Link>
    </div>
  );
}

export default ArticleCard;