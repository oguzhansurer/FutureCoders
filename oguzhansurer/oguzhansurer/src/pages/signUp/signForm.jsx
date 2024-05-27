import { Input , Button} from 'antd';
import Footer from '../../layouts/footer/footer';

const signForm = () => {
    return(
        <div className='sign-page-container'>
        
        <div className="sign-banner">
            <div className="title">
                <h1 style={{letterSpacing:"4px"}}>Student Registration</h1>
                <h4>Home  /  Student Registration</h4>
            </div>
        </div>
        <div className="sign-form">
           <div className="wrap-centered-form-div">
                <form >
                    First Name
                    <Input type="text" placeholder="Username or Email Address" />
                    Last Name
                    <Input type="text" placeholder="Password" />
                    User Name
                    <Input type="text" placeholder="Password" />
                    E-Mail
                    <Input type="text" placeholder="Password" />
                    Password
                    <Input type="text" placeholder="Password" />
                    Password confirmation
                    <Input type="text" placeholder="Password" />
                </form>
                <div className="submit-form">
                    <button>Register</button>
                </div>
           </div>
        </div>
        <Footer/>
        </div>
    )
}

export default signForm