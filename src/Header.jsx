import { useState,useEffect } from "react"
import hero_img from './assets/designer_1.svg'

function Header(){
    const [isMenuOpen,setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return(
        <>
             <section className="hero-pattern">
                <div className="container">
                    <nav className="flex justify-between text-center  py-3">
                        <div className="md:hidden flex items-center">
                            <button onClick={toggleMenu} id="menu-toggle" className="text-dark z-20">
                                <svg 
                                fill='none' stroke='currentColor' stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-6 h-6">
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                        <ul className="nav-menu">
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                        <div className="nav-logo">
                            <p className="logo">Landing</p>
                        </div>
                        <div className="nav-btn">
                            <button className="">Buy Now</button>
                        </div>
                    </nav>

                    {isMenuOpen ? (
                        <ul className="nav-sm-menu flex-col bg-white-500 md:hidden z-20 transition-all">
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            <div className="nav-sm-btn">
                                <button>Buy Now</button>
                            </div>
                        </ul>
            ) : null
            
            }
                    <div className="section-header">
                        <div className="header-about">
                            <br /><br /><br /><br />
                            <img src={hero_img} className="flex float-end md:hidden hero-img  w-80 h-80 " alt="" />
                            <p className="header-topic">Introduce Your Product Quickly & Effectively</p>
                            <p className="header-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, 
                            nascetur ridiculus </p>
                            <p className="header-content">mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat 
                            massa quis enim.</p>
                            <div className="header-btn md:flex">
                            <div className="main-btn mt-5">
                                <button>
                                    Purchase UI Kit
                                </button>
                            </div>
                            <div className="sec-btn md:mx-2 mt-5">
                                <button>
                                    Learn More
                                </button>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                </div>
                
             </section>
             
             
        </>
    )
}
export default Header