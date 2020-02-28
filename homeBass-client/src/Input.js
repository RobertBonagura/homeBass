const Input = (props) => {
    return (  
  <div className="form-group">
    <label className="form-label">{props.title}</label>
    <input
      className="form-input"
      id={props.name}
      name={props.name}
      type={props.type}
      value={props.value}
      handleChange={props.onChange}
      placeholder={props.placeholder} 
    />
  </div>
  )
}

export default Input;