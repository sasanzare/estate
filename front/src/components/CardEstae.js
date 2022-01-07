function Card({img,title}) { 
  return (
        <div className="p-3 pt-4">
        <div className="shadow-es text-center">
            <img src={img} className="w-100"/>
            <p>{title}</p>
        </div>

    </div>
  );
}

export default Card;