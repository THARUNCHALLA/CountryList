import './index.css'

const CountryLists = props => {
  const {user12, clickTharun} = props
  const {name, id, isVisited} = user12

  const capitalclick = () => {
    clickTharun(id)
  }

  return (
    <li className="list_Container">
      <div className="center12">
        <p className="heading">{name}</p>(
        {isVisited ? (
          <p className="heading2">Visited</p>
        ) : (
          <button type="button" className="button1" onClick={capitalclick}>
            Visit
          </button>
        )}
      </div>
    </li>
  )
}
export default CountryLists
