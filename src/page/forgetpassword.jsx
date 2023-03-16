import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import SocialMedia from "../component/sidebar/socialmedia";

const title = "Reset Password";

class ForgetPassword extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'Reset Password'} curPage={'Reset Pass'} />
                <div className="login-section padding-top padding-bottom">
                    <div className=" container">
                        <div className="account-wrapper">
                            <h3 className="title">{title}</h3>
                            <form className="account-form">
                                <div className="form-group">
                                    <input type="email" placeholder="Enter You Email" name="email" />
                                </div>
                                <div className="form-group">
                                    <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                                        <p className="mb-0">Don't have account?</p>
                                        <Link to="/signup">Sign Up</Link>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button className="d-block default-btn"><span>Send Code</span></button>
                                </div>
                            </form>
                            <div className="account-bottom">
                                <span className="d-block cate pt-10">Don’t Have any Account? <Link to="/login"> LogIn</Link></span>
                                <span className="or"><span>or</span></span>
                                <h5 className="subtitle">Login With Social Media</h5>
                                <SocialMedia />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}
 
export default ForgetPassword;