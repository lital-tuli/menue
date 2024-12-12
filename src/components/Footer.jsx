function Footer({developerName}) {
    return (  
        <>
        <div className="container">
            <p>this site was developed by : {developerName}</p>
            <i className="fa-brands fa-square-whatsapp"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-square-facebook"></i>
                <i className="fa-brands fa-square-instagram"></i>

        </div>
        </>
    );
}

export default Footer;