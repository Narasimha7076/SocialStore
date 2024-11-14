// import React, { useEffect } from 'react';
// import './Login.css';

// const Login = () => {
//     useEffect(() => {
//         const container = document.getElementById('container');
//         setTimeout(() => {
//             container.classList.add('sign-in');
//         }, 200);
//     }, []);

//     const toggle = () => {
//         const container = document.getElementById('container');
//         container.classList.toggle('sign-in');
//         container.classList.toggle('sign-up');
//     };

//     return (

        
//         <div id="container" className="container">
//             <div className="row">
//                 {/* SIGN UP */}
//                 <div className="col align-items-center flex-col sign-up">
//                     <div className="form-wrapper align-items-center">
//                         <div className="form sign-up">
//                             <div className="input-group">
//                                 <i className='bx bxs-user'></i>
//                                 <input type="text" placeholder="Username" />
//                             </div>
//                             <div className="input-group">
//                                 <i className='bx bx-mail-send'></i>
//                                 <input type="email" placeholder="Email" />
//                             </div>
//                             <div className="input-group">
//                                 <i className='bx bxs-lock-alt'></i>
//                                 <input type="password" placeholder="Password" />
//                             </div>
//                             <div className="input-group">
//                                 <i className='bx bxs-lock-alt'></i>
//                                 <input type="password" placeholder="Confirm password" />
//                             </div>
//                             <button>
//                                 Sign up
//                             </button>
//                             <p>
//                                 <span>
//                                     Already have an account?
//                                 </span>
//                                 <b onClick={toggle} className="pointer">
//                                     Sign in here
//                                 </b>
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 {/* SIGN IN */}
//                 <div className="col align-items-center flex-col sign-in">
//                     <div className="form-wrapper align-items-center">
//                         <div className="form sign-in">
//                             <div className="input-group">
//                                 <i className='bx bxs-user'></i>
//                                 <input type="text" placeholder="Username" />
//                             </div>
//                             <div className="input-group">
//                                 <i className='bx bxs-lock-alt'></i>
//                                 <input type="password" placeholder="Password" />
//                             </div>
//                             <button>
//                                 Sign in
//                             </button>
//                             <p>
//                                 <b>
//                                     Forgot password?
//                                 </b>
//                             </p>
//                             <p>
//                                 <span>
//                                     Don't have an account?
//                                 </span>
//                                 <b onClick={toggle} className="pointer">
//                                     Sign up here
//                                 </b>
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* CONTENT SECTION */}
//             <div className="row content-row">
//                 <div className="col align-items-center flex-col">
//                     <div className="text sign-in">
//                         <h2>Welcome to SocialStore!</h2>
//                     </div>
//                     <div className="img sign-in"></div>
//                 </div>
//                 <div className="col align-items-center flex-col">
//                     <div className="img sign-up"></div>
//                     <div className="text sign-up">
//                         <h2>Join with us</h2>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;

// import React, { useState, useEffect } from 'react';
// import './Login.css';

// const Login = () => {
//     const [isSigningIn, setIsSigningIn] = useState(true); // Track if we're in sign-in or sign-up mode
//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     });

//     useEffect(() => {
//         const container = document.getElementById('container');
//         setTimeout(() => {
//             container.classList.add('sign-in');
//         }, 200);
//     }, []);

//     const toggle = () => {
//         const container = document.getElementById('container');
//         container.classList.toggle('sign-in');
//         container.classList.toggle('sign-up');
//         setIsSigningIn(!isSigningIn); // Toggle between sign-in and sign-up
//     };

//     const handleChange = (e) => {
//         console.log(e.target);
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (formData.password !== formData.confirmPassword) {
//             alert('Passwords do not match');
            
//         }
//         const url = `http://localhost:3000/${isSigningIn ? 'login' : 'register'}`;
//         console.log(url);

//         try {
//             const response = await fetch(url, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     username: formData.username,
//                     email: isSigningIn ? undefined : formData.email, // Send email only for sign-up
//                     password: formData.password,
//                 }),
//             });

//             if (response.ok) {
//                 // Redirect or display success message here
//                 alert('Form submitted successfully');
//                 window.location.href = 'http://localhost:5173/app#dashboard'; // Adjust redirection as needed
//             } else {
//                 alert('Failed to submit form');
//             }
//         } catch (error) {
//             console.error('Error submitting form:', error);
//         }
//     };

//     return (
//         <div id="container" className="container">
//             <div className="row">
//                 {/* SIGN UP */}
//                 <div className="col align-items-center flex-col sign-up">
//                     <div className="form-wrapper align-items-center">
//                         <form onSubmit={handleSubmit} className="form sign-up">
//                             <div className="input-group">
//                                 <i className='bx bxs-user'></i>
//                                 <input
//                                     type="text"
//                                     placeholder="Username"
//                                     name="username"
//                                     value={formData.username}
//                                     onChange={handleChange}
//                                     required
//                                 />
//                             </div>
//                             <div className="input-group">
//                                 <i className='bx bx-mail-send'></i>
//                                 <input
//                                     type="email"
//                                     placeholder="Email"
//                                     name="email"
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                     required
//                                 />
//                             </div>
//                             <div className="input-group">
//                                 <i className='bx bxs-lock-alt'></i>
//                                 <input
//                                     type="password"
//                                     placeholder="Password"
//                                     name="password"
//                                     value={formData.password}
//                                     onChange={handleChange}
//                                     required
//                                 />
//                             </div>
//                             <div className="input-group">
//                                 <i className='bx bxs-lock-alt'></i>
//                                 <input
//                                     type="password"
//                                     placeholder="Confirm password"
//                                     name="confirmPassword"
//                                     value={formData.confirmPassword}
//                                     onChange={handleChange}
//                                     required
//                                 />
//                             </div>
//                             <button type="submit">
//                                 Sign up
//                             </button>
//                             <p>
//                                 <span>Already have an account?</span>
//                                 <b onClick={toggle} className="pointer">Sign in here</b>
//                             </p>
//                         </form>
//                     </div>
//                 </div>
//                 {/* SIGN IN */}
//                 <div className="col align-items-center flex-col sign-in">
//                     <div className="form-wrapper align-items-center">
//                         <form onSubmit={handleSubmit} className="form sign-in">
//                             <div className="input-group">
//                                 <i className='bx bxs-user'></i>
//                                 <input
//                                     type="text"
//                                     placeholder="Username"
//                                     name="username"
//                                     value={formData.username}
//                                     onChange={handleChange}
//                                     required
//                                 />
//                             </div>
//                             <div className="input-group">
//                                 <i className='bx bxs-lock-alt'></i>
//                                 <input
//                                     type="password"
//                                     placeholder="Password"
//                                     name="password"
//                                     value={formData.password}
//                                     onChange={handleChange}
//                                     required
//                                 />
//                             </div>
//                             <button type="submit">
//                                 Sign in
//                             </button>
//                             <p>
//                                 <b>Forgot password?</b>
//                             </p>
//                             <p>
//                                 <span>Don't have an account?</span>
//                                 <b onClick={toggle} className="pointer">Sign up here</b>
//                             </p>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//             {/* CONTENT SECTION */}
//             <div className="row content-row">
//                 <div className="col align-items-center flex-col">
//                     <div className="text sign-in">
//                         <h2>Welcome to SocialStore!</h2>
//                     </div>
//                     <div className="img sign-in"></div>
//                 </div>
//                 <div className="col align-items-center flex-col">
//                     <div className="img sign-up"></div>
//                     <div className="text sign-up">
//                         <h2>Join with us</h2>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;


// import React, { useState, useEffect } from 'react';
// import './Login.css';

// const Login = () => {
//     const [isSigningIn, setIsSigningIn] = useState(true); // Track if we're in sign-in or sign-up mode
//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     });
//     const [isPasswordVisible, setPasswordVisible] = useState(false); // Track password visibility
//     // const [isPasswordVisible1, setPasswordVisible1] = useState(false);
//     // const [isPasswordVisible2, setPasswordVisible2] = useState(false);
//     const [error, setError] = useState(''); // Track password match error

//     useEffect(() => {
//         const container = document.getElementById('container');
//         setTimeout(() => {
//             container.classList.add('sign-in');
//         }, 200);
//     }, []);

//     const toggle = () => {
//         const container = document.getElementById('container');
//         container.classList.toggle('sign-in');
//         container.classList.toggle('sign-up');
//         setIsSigningIn(!isSigningIn); // Toggle between sign-in and sign-up
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handlePasswordVisibility = () => {
//         setPasswordVisible(!isPasswordVisible);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!isSigningIn && formData.password !== formData.confirmPassword) {
//             setError('Passwords do not match');
//             return;
//         }
//         setError(''); // Reset error if passwords match

//         const url = `http://localhost:3000/${isSigningIn ? 'login' : 'register'}`;

//         try {
//             const response = await fetch(url, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     username: formData.username,
//                     email: isSigningIn ? undefined : formData.email, // Send email only for sign-up
//                     password: formData.password,
//                 }),
//             });

//             if (response.ok) {
//                 alert('Form submitted successfully');
//                 window.location.href = 'http://localhost:5173/app#dashboard'; // Adjust redirection as needed
//             } else {
//                 alert('Failed to submit form');
//             }
//         } catch (error) {
//             console.error('Error submitting form:', error);
//         }
//     };

//     return (
//         <div id="container" className="container">
//             <div className="row">
//                 {/* SIGN UP */}
//                 <div className="col align-items-center flex-col sign-up">
//                     <div className="form-wrapper align-items-center">
//                         <form onSubmit={handleSubmit} className="form sign-up">
//                             <div className="input-group">
//                                 <i className='icons bx bxs-user'></i>
//                                 <input
//                                     type="text"
//                                     placeholder="Username"
//                                     name="username"
//                                     value={formData.username}
//                                     onChange={handleChange}
//                                     required
//                                 />
//                             </div>
//                             <div className="input-group">
//                                 <i className='icons bx bx-mail-send'></i>
//                                 <input
//                                     type="email"
//                                     placeholder="Email"
//                                     name="email"
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                     required
//                                 />
//                             </div>
//                             <div className="input-group">
//                                 <i className='icons bx bxs-lock-alt'></i>
//                                 <input
//                                     type={isPasswordVisible ? "text" : "password"}
//                                     placeholder="Password"
//                                     name="password"
//                                     value={formData.password}
//                                     onChange={handleChange}
//                                     required
//                                 />
//                                 <i
//                                     className={`eye-icon ${isPasswordVisible ? 'bx bx-hide' : 'bx bx-show'}`}
//                                     onClick={handlePasswordVisibility}
//                                     style={{ cursor: 'pointer', marginLeft: '8px' }}
//                                 ></i>
//                             </div>
//                             <div className="input-group">
//                                 <i className='icons bx bxs-lock-alt'></i>
//                                 <input
//                                     type={isPasswordVisible ? "text" : "password"}
//                                     placeholder="Confirm password"
//                                     name="confirmPassword"
//                                     value={formData.confirmPassword}
//                                     onChange={handleChange}
//                                     required
//                                 />
//                                 <i
//                                     className={`eye-icon ${isPasswordVisible ? 'bx bx-hide' : 'bx bx-show'}`}
//                                     onClick={handlePasswordVisibility}
//                                     style={{ cursor: 'pointer', marginLeft: '8px' }}
//                                 ></i>
//                             </div>
//                             {error && <p className="error">{error}</p>} {/* Display error if passwords don't match */}
//                             <button type="submit">
//                                 Sign up
//                             </button>
//                             <p>
//                                 <span>Already have an account?</span>
//                                 <b onClick={toggle} className="pointer">Sign in here</b>
//                             </p>
//                         </form>
//                     </div>
//                 </div>
//                 {/* SIGN IN */}
//                 <div className="col align-items-center flex-col sign-in">
//                     <div className="form-wrapper align-items-center">
//                         <form onSubmit={handleSubmit} className="form sign-in">
//                             <div className="input-group">
//                                 <i className='icons bx bxs-user'></i>
//                                 <input
//                                     type="text"
//                                     placeholder="Username"
//                                     name="username"
//                                     value={formData.username}
//                                     onChange={handleChange}
//                                     required
//                                 />
//                             </div>
//                             <div className="input-group">
//                                 <i className='icons bx bxs-lock-alt'></i>
//                                 <input
//                                     type={isPasswordVisible ? "text" : "password"}
//                                     placeholder="Password"
//                                     name="password"
//                                     value={formData.password}
//                                     onChange={handleChange}
//                                     required
//                                 />
//                                 <i
//                                     className={`eye-icon ${isPasswordVisible ? 'bx bx-hide' : 'bx bx-show'}`}
//                                     onClick={handlePasswordVisibility}
//                                     style={{ cursor: 'pointer', marginLeft: '8px' }}
//                                 ></i>
//                             </div>
//                             <button type="submit">
//                                 Sign in
//                             </button>
//                             <p>
//                                 <b>Forgot password?</b>
//                             </p>
//                             <p>
//                                 <span>Don't have an account?</span>
//                                 <b onClick={toggle} className="pointer">Sign up here</b>
//                             </p>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//             {/* CONTENT SECTION */}
//             <div className="row content-row">
//                 <div className="col align-items-center flex-col">
//                     <div className="text sign-in">
//                         <h2>Welcome to SocialStore!</h2>
//                     </div>
//                     <div className="img sign-in"></div>
//                 </div>
//                 <div className="col align-items-center flex-col">
//                     <div className="img sign-up"></div>
//                     <div className="text sign-up">
//                         <h2>Join with us</h2>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if (!isSigningIn && formData.password !== formData.confirmPassword) {
    //         setError('Passwords do not match');
    //         return;
    //     }
    //     setError('');
    
    //     const url = `http://localhost:3000/${isSigningIn ? 'login' : 'register'}`;
    
    //     try {
    //         const response = await fetch(url, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 username: formData.username,
    //                 email: isSigningIn ? undefined : formData.email,
    //                 password: formData.password,
    //             }),
    //         });
    
    //         if (response.ok) {
    //             alert('Form submitted successfully');
    //             window.location.href = 'http://localhost:5173/app#dashboard';
    //         } else if (response.status === 409) { 
    //             const errorData = await response.json();
    //             setError(errorData.message); // Display specific error message
    //         } else {
    //             alert('Failed to submit form');
    //         }
    //     } catch (error) {
    //         console.error('Error submitting form:', error);
    //     }
    // };


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.css';

const Login = ({ setIsAuthenticated }) => {
    const [isSigningIn, setIsSigningIn] = useState(true);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [isPasswordVisible, setPasswordVisible] = useState(false); // For sign-in password
    const [isSignUpPasswordVisible, setSignUpPasswordVisible] = useState(false); // For sign-up password
    const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false); // For confirm password
    const [error, setError] = useState(''); 
    const [login_error,setLoginError] = useState('');

    useEffect(() => {
        const container = document.getElementById('container');
        setTimeout(() => {
            container.classList.add('sign-in');
        }, 200);
    }, []);

    const toggle = () => {
        const container = document.getElementById('container');
        container.classList.toggle('sign-in');
        container.classList.toggle('sign-up');
        setIsSigningIn(!isSigningIn); 
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const navigate = useNavigate();

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isSigningIn && formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        setError('');
    
        const url = `http://localhost:3000/${isSigningIn ? 'login' : 'register'}`;
    
        try {
            const response = await fetch(url, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: formData.username,
                    email: isSigningIn ? undefined : formData.email,
                    password: formData.password,
                }),
            });
    
            if (response.ok) {
                setIsAuthenticated(true);
                navigate('/app');
            } else if (response.status === 404) { 
                const errorData = await response.json();
                setLoginError(errorData.message); // Display specific error message
            } else if(response.status === 401){
                const errorData = await response.json();
                setLoginError(errorData.message); // Display specific error message from the server
            } else if(response.status === 409){
                const errorData = await response.json();
                setError(errorData.message); // Display specific error message from the server
            } 
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    

    return (
        <div id="container" className="container">
            <div className="row">
                {/* SIGN UP */}
                <div className="col align-items-center flex-col sign-up">
                    <div className="form-wrapper align-items-center">
                        <form onSubmit={handleSubmit} className="form sign-up">
                            <div className="input-group">
                                <i className='icons bx bxs-user'></i>
                                <input
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <i className='icons bx bx-mail-send'></i>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <i className='icons bx bxs-lock-alt'></i>
                                <input
                                    type={isSignUpPasswordVisible ? "text" : "password"}
                                    placeholder="Password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                <i
                                    className={`eye-icon ${isSignUpPasswordVisible ? 'bx bx-hide' : 'bx bx-show'}`}
                                    onClick={() => setSignUpPasswordVisible(!isSignUpPasswordVisible)}
                                    style={{ cursor: 'pointer', marginLeft: '8px' }}
                                ></i>
                            </div>
                            <div className="input-group">
                                <i className='icons bx bxs-lock-alt'></i>
                                <input
                                    type={isConfirmPasswordVisible ? "text" : "password"}
                                    placeholder="Confirm password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                                <i
                                    className={`eye-icon ${isConfirmPasswordVisible ? 'bx bx-hide' : 'bx bx-show'}`}
                                    onClick={() => setConfirmPasswordVisible(!isConfirmPasswordVisible)}
                                    style={{ cursor: 'pointer', marginLeft: '8px' }}
                                ></i>
                            </div>
                            {error && <p className="error">{error}</p>}
                            <button type="submit">
                                Sign up
                            </button>
                            <p>
                                <span>Already have an account?</span>
                                <b onClick={toggle} className="pointer">Sign in here</b>
                            </p>
                        </form>
                    </div>
                </div>
                {/* SIGN IN */}
                <div className="col align-items-center flex-col sign-in">
                    <div className="form-wrapper align-items-center">
                        <form onSubmit={handleSubmit} className="form sign-in">
                            <div className="input-group">
                                <i className='icons bx bxs-user'></i>
                                <input
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <i className='icons bx bxs-lock-alt'></i>
                                <input
                                    type={isPasswordVisible ? "text" : "password"}
                                    placeholder="Password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                <i
                                    className={`eye-icon ${isPasswordVisible ? 'bx bx-hide' : 'bx bx-show'}`}
                                    onClick={() => setPasswordVisible(!isPasswordVisible)}
                                    style={{ cursor: 'pointer', marginLeft: '8px' }}
                                ></i>
                            </div>
                            {login_error && <p className="error">{login_error}</p>}
                            <button type="submit">
                                Sign in
                            </button>
                            <p>
                                <b>Forgot password?</b>
                            </p>
                            <p>
                                <span>Don't have an account?</span>
                                <b onClick={toggle} className="pointer">Sign up here</b>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            {/* CONTENT SECTION */}
            <div className="row content-row">
                <div className="col align-items-center flex-col">
                    <div className="text sign-in">
                        <h2>Welcome to SocialStore!</h2>
                    </div>
                    <div className="img sign-in"></div>
                </div>
                <div className="col align-items-center flex-col">
                    <div className="img sign-up"></div>
                    <div className="text sign-up">
                        <h2>Join with us</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;



    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if (!isSigningIn && formData.password !== formData.confirmPassword) {
    //         setError('Passwords do not match');
    //         return;
    //     }
    //     setError('');
    
    //     const url = `http://localhost:3000/${isSigningIn ? 'login' : 'register'}`;
    
    //     try {
    //         const response = await fetch(url, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 username: formData.username,
    //                 email: isSigningIn ? undefined : formData.email,
    //                 password: formData.password,
    //             }),
    //         });
    
    //         if (response.ok) {
    //             window.location.href = 'http://localhost:5173/app#dashboard';
    //         } else {
    //             const errorData = await response.json().catch(() => ({ message: response.statusText }));
    //             if (response.status === 404 || response.status === 401 || response.status === 409) {
    //                 setError(errorData.message);
    //             }
    //         }
    //     } catch (error) {
    //         console.error('Error submitting form:', error);
    //     }
    // };
    
