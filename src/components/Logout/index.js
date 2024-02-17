import './index.css'
import '../Message'

const Logout = props => {
  const {logout} = props

  return (
    <div>
      <button className="button" type="button" onClick={logout}>
        Logout
      </button>
    </div>
  )
}

export default Logout
