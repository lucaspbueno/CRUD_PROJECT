function ButtonPrimary({ text, type = "button" }) {
  return (
    <button type={type} className="btn btn-primary text-white">{text}</button>
  )
}

export default ButtonPrimary