import './index.css'

const Tharun = props => {
  const {user, removeCapital} = props
  const {name, imageUrl, id} = user

  const clickbutton = () => {
    removeCapital(id)
  }
  return (
    <li className="container1">
      <img src={imageUrl} alt="thumbnail" className="img" />
      <div className="container12">
        <p className="heading">{name}</p>
        <button type="button" className="button" onClick={clickbutton}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default Tharun
