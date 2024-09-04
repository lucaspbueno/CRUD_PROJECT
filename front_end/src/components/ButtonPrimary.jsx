function ButtonPrimary({ text, type }) {
  return (
    <button className="btn btn-primary text-white" type={ `${type ? type : 'button'}` }>{ text }</button>
  )
}

export default ButtonPrimary