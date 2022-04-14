import React from 'react';
import google from '../../images/google.png'
import facebook from '../../images/facebook.png'
import github from '../../images/github.png'

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex items-center justify-content-center'>
                <div className='border-primary  border-t-2 w-2/5'></div>
                <p className='mx-3 mt-2'>Or</p>
                <div className='border-t-2 border-primary  w-2/5'></div>
            </div>
            <div>
                <button className=' d-block mx-auto btn btn-primary w-50 d-flex justify-center'>
                    <img className='mx-3' src={google} alt="" />
                    Google LogIn</button>
            </div>
            <div>
                <button className='my-2 d-block mx-auto btn btn-primary w-50 d-flex justify-center'>
                    <img className='mx-3' src={facebook} alt="" />
                    Facebook LogIn</button>
            </div>
            <div>
                <button className=' d-block mx-auto btn btn-primary w-50 d-flex justify-center'>
                    <img className='mx-3' src={github} alt="" />
                    Google LogIn</button>
            </div>
        </div>
    );
};

export default SocialLogin;