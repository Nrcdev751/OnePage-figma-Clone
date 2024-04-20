import instagram from './assets/icon/Instagram.svg'
import youtube from './assets/icon/youtube.svg'
import twitter from './assets/icon/twitter.svg'
import facebook from './assets/icon/facebook.svg'
import linkin from './assets/icon/linkin.svg'
function Footer(){
    return(
        <>
            <section className="footer-bg py-10">
                <div className="container">
                    <article className="flex flex-col md:flex-row justify-between items-center">
                        <div className="copyright footer-text-sm copyright-colour">
                            <p>©2023 Yourcompany</p>
                        </div>
                        <div className="logo">
                            <p>Landing</p>
                        </div>
                        <div className="main-btn">
                            <button>Purchase now</button>
                        </div>
                    </article>
                    <hr className="footer-line" />
                    <div className="footer-contact flex flex-col md:flex-row md:justify-between">
                        <ul className="footer-menu flex flex-col md:flex-row items-center my-5 md:my-0 md:justify-between ">
                           <li><a href="">Home</a></li>
                           <li><a href="">About</a></li>
                           <li><a href="">Contact</a></li>
                        </ul>
                        <ul className="footer-menu flex justify-between ">
                           <li><a href=""><img src={facebook} alt="" /></a></li>
                           <li><a href=""><img src={linkin} alt="" /></a></li>
                           <li><a href=""><img src={twitter} alt="" /></a></li>
                           <li><a href=""><img src={youtube} alt="" /></a></li>
                           <li><a href=""><img src={instagram} alt="" /></a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Footer