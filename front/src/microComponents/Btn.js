function Btn({title,myClass,icon=null}) {
  return (
    <button className={"btn "+myClass }>
      {icon}
      {title}
    </button>
  );
}

export default Btn;