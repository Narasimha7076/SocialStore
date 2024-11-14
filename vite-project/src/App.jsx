import React, { useState, useEffect } from 'react';
import './components/Home.css';
import Dashboard from './components/Dashboard';
import Social from './components/Social';
import Posttoproduct from './components/PosttoProduct';
import Products from './components/Products';
import Settings from './components/Settings';
import Logout from './components/Logout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function App() {

    const navigate = useNavigate();
    const [isSideMenuVisible, setSideMenuVisible] = useState(true);
    const [isDarkTheme, setDarkTheme] = useState(false);


    const toggleMenu = () => {
        setSideMenuVisible(!isSideMenuVisible);
    };

    const toggleTheme = () => {
        setDarkTheme(!isDarkTheme);
        document.body.classList.toggle('dark-theme-variables');
    };

    const [activeLink, setActiveLink] = useState('dashboard'); // Default active link

    // Function to handle link click and change active link
    const handleLinkClick = (linkName) => {
        setActiveLink(linkName); // Set the clicked link as active
    };

    const renderComponent = () => {
        switch (activeLink) {
            case 'dashboard':
                return <Dashboard />;
            case 'social-media':
                return <Social />;
            case 'posttoproduct':
                return <Posttoproduct />;
            case 'products':
                return <Products />;
            case 'settings':
                return <Settings />;
            case 'logout':
                return <Logout />;
            default:
                return <Dashboard />;
        }
    };

    

    const handleLogout = async () => {
        try {
            const response = await axios.get("http://localhost:3000/logout", {
                withCredentials: true,
            });
            if (response.status === 200) {
                console.log(response.data.message);
                
                // Clear any authentication data
                localStorage.removeItem('authToken');
                sessionStorage.clear();
                
                // Redirect to login and prevent navigating back
                navigate('/', { replace: true });
                window.location.reload();
            }
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };
    


    return (
        <div className={`cont ${isDarkTheme ? 'dark-theme-variables' : ''}`}>
            <aside style={{ display: isSideMenuVisible ? 'block' : 'none' }}>
                <div className="top">
                    <div className="logo">
                        <h2>SOCIAL <span className="primary">STORE</span></h2>
                    </div>
                    <div className="close" id="close-btn" onClick={toggleMenu}>
                        <span className="material-symbols-outlined">close</span>
                    </div>
                </div>

                

<div className="sidebar">
            <a
                href="#dashboard"
                className={activeLink === 'dashboard' ? 'active' : ''}
                onClick={() => handleLinkClick('dashboard')}
            >
                <span className="material-symbols-outlined">grid_view</span>
                <h3>Dashboard</h3>
            </a>
            <a
                href="#social-media"
                className={activeLink === 'social-media' ? 'active' : ''}
                onClick={() => handleLinkClick('social-media')}
            >
                <span className="material-symbols-outlined">person_outline</span>
                <h3>Social Media</h3>
            </a>
            <a
                href="#posttoproduct"
                className={activeLink === 'posttoproduct' ? 'active' : ''}
                onClick={() => handleLinkClick('posttoproduct')}
            >
                <span className="material-symbols-outlined">sync_alt</span>
                <h3>Post to Product</h3>
            </a>
            <a
                href="#products"
                className={activeLink === 'products' ? 'active' : ''}
                onClick={() => handleLinkClick('products')}
            >
                <span className="material-symbols-outlined">receipt_long</span>
                <h3>Listings</h3>
            </a>
            <a
                href="#settings"
                className={activeLink === 'settings' ? 'active' : ''}
                onClick={() => handleLinkClick('settings')}
            >
                <span className="material-symbols-outlined">settings</span>
                <h3>Settings</h3>
            </a>
            <a
            href="#"
            className={activeLink === 'logout' ? 'active' : ''}
            onClick={(e) => {
                e.preventDefault(); // Prevent default link behavior
                handleLogout();
            }}
        >
            <span className="material-symbols-outlined">logout</span>
            <h3>Logout</h3>
        </a>
        </div>

                
            </aside>

            <main>
            {renderComponent()}
            </main>

            <div className="right">
                <div className="top">
                    <button id="menu-bar" onClick={toggleMenu}>
                        <span className="material-symbols-outlined">menu</span>
                    </button>

                    <div className="theme-toggler" onClick={toggleTheme}>
                        <span className={`material-symbols-outlined ${!isDarkTheme ? 'active' : ''}`}>light_mode</span>
                        <span className={`material-symbols-outlined ${isDarkTheme ? 'active' : ''}`}>dark_mode</span>
                    </div>

                    <div className="profile">
                        <div className="info">
                            <p><b>Leoh</b></p>
                            <p>Admin</p>
                        </div>
                        <div className="profile-photo">
                            <img src="https://i.postimg.cc/k5kz0TjQ/1381511-588644811197844-1671954779-n.jpg" alt="profile" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;


{/* <div className="sidebar">
                    <a >
                        <span className="material-symbols-outlined">grid_view</span>
                        <h3>Dashboard</h3>
                    </a>
                    <a href="#" className="active">
                        <span className="material-symbols-outlined">person_outline</span>
                        <h3>Social Media</h3>
                    </a>
                    <a href="#">
                        <span className="material-symbols-outlined">insights</span>
                        <h3>Analytics</h3>
                    </a>
                    <a href="#">
                        <span className="material-symbols-outlined">receipt_long</span>
                        <h3>Products</h3>
                    </a>
                    <a href="#">
                        <span className="material-symbols-outlined">settings</span>
                        <h3>Settings</h3>
                    </a>
                    <a href="#" >
                        <span className="material-symbols-outlined">logout</span>
                        <h3>Logout</h3>
                    </a>
                </div> */}

    // useEffect(() => {
    //     // Check session status on component mount
    //     const checkSessionStatus = async () => {
    //         try {
    //             const response = await axios.get("http://localhost:3000/session-status", {
    //                 withCredentials: true,
    //             });
                                
    //             if (!response.data.authenticated) {
    //                 // If not authenticated, redirect to login page
    //                 navigate("/", { replace: true });
    //             }
    //         } catch (error) {
    //             // In case of an error (e.g., 401), redirect to login
    //             console.log("Bye");

    //             navigate("/", { replace: true });
    //         }
    //     };

    //     checkSessionStatus();
    // }, [navigate]);
