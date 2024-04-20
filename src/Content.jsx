import icon_1 from './assets/Icon.svg'
import content_1_img from './assets/undraw_mobile_login_ikmv.svg'
import content_2_img from './assets/undraw_happy_news_hxmt.svg'
import content_3_img from './assets/undraw_social_influencer_sgsv.svg'
import content_4_img from './assets/undraw_mention_6k5d.svg'
function Content(){
    return(
        <>
        <section className="my-40">
            <div className="container">
                        <div className="content-1  flex justify-center items-center">
                            <div className="grid md:grid-cols-2">
                                <div className="content-1-describe">
                                    <div className="content-topic">Light, Fast & Powerful</div>
                                    <p className="content-paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient 
                                    montes, nascetur ridiculus </p>
                                    <p className="content-paragraph">mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                                    <div className="content-choice flex  justify-between">
                                        <div className="content-choice-group  flex flex-col">
                                            <img src={icon_1} alt="" />
                                            <h1>Title Goes Here</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                                        </div>
                                        <div className="content-choice-group  flex flex-col">
                                            <img src={icon_1} alt="" />
                                            <h1>Title Goes Here</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-1-img">
                                    <img src={content_1_img} alt="" />
                                </div>
                            </div>
                            
                        </div>
                 
             
            </div>
        </section>
        <section className="my-40">
            <div className="container">
                        <div className="content-2  flex justify-center items-center">
                            <div className="grid md:grid-cols-2 gap-20 items-center">
                                <div className="content-2-img">
                                    <img src={content_2_img} alt="" />
                                </div>
                                <div className="content-2-describe flex flex-col justify-start content-center">
                                    <div className="content-topic">Light, Fast & Powerful</div>
                                    <p className="content-paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient 
                                    montes, nascetur ridiculus </p>
                                    <p className="content-paragraph">mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                                    
                                </div>
                            </div>
                            
                        </div>
                 
             
            </div>
        </section>
        <section className="my-40">
            <div className="container">
                        <div className="content-2  flex justify-center items-center">
                            <div className="grid md:grid-cols-2 gap-20 items-center">
                                <div className="content-2-img">
                                    <img src={content_3_img} alt="" />
                                </div>
                                <div className="content-2-describe flex flex-col justify-start content-center">
                                    <div className="content-topic">Light, Fast & Powerful</div>
                                    <p className="content-paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient 
                                    montes, nascetur ridiculus </p>
                                    <p className="content-paragraph">mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                                    
                                </div>
                            </div>
                            
                        </div>
                 
             
            </div>
        </section>
        <section className="my-40">
            <div className="container">
                        <div className="content-2  flex justify-center items-center">
                            <div className="grid md:grid-cols-2 gap-20 items-center">
                                <div className="content-2-img">
                                    <img src={content_4_img} alt="" />
                                </div>
                                <div className="content-2-describe flex flex-col justify-start content-center">
                                    <div className="content-topic">Light, Fast & Powerful</div>
                                    <p className="content-paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient 
                                    montes, nascetur ridiculus </p>
                                    <p className="content-paragraph">mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                                    <div className="main-btn mt-5">
                                    <button>
                                        Purchase UI Kit
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
export default Content