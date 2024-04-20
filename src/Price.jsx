function Price() {
    return(
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E7ECFF" fill-opacity="0.5" d="M0,192L120,208C240,224,480,256,720,261.3C960,267,1200,245,1320,234.7L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        <section className="price-bg py-20">
                <div className="container flex flex-col justify-center items-center">
                    <h1 className="price-topic">A Price To Suit Everyone</h1>
                    <p className="price-paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                    <h2 className="price-topic mt-10 price-lg">$40</h2>
                    <span className="price price-md  flex ">UI Design Kit</span>
      
                    <div className="content-choice-group">
                        <p className="price-sm text-center">See, One price. Simple.</p>
                        <div className="main-btn mt-5">
                                        <button>
                                            Purchase Now
                                        </button>
                        </div>
                    </div>
                </div>
        </section>
        </>
       
    )
}
export default Price