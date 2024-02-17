import './index.css'

const Login = props => {
  const {login} = props
  return (
    <div>
      <button className="button" type="button" onClick={login}>
        Login
      </button>
    </div>
  )
}

export default Login
