import './layout.scss';
import AuthImage from '../../assets/icons/auth-illustrator.png'

const AuthLayout = ({ children }) => {
  return (
    <div className="authlayout-container">
        <div className='authlayout-container__firstSection'>
            <img src={AuthImage} />
        </div>
        <div className='authlayout-container__secondSection'>{children}</div>
    </div>
  )
}

export default AuthLayout