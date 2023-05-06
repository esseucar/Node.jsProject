import React, {useEffect} from 'react';
import Sidebar from './Sidebar.js';
import{useNavigate} from 'react-router-dom';

function Iletisim(){
    const navigate = useNavigate();
    // useEffect(()=>{
        
    //     var login=sessionStorage.getItem("login");
        
    //     if(login!='true'){
    //        navigate('/');
    //     }          
    //     },[]
    // );   
    return(
        <div className="row" style={{width:"100vw",height:"100vh", backgroundImage: "linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5))"}}>
            <div className="col-4">
                <Sidebar 
                    iletisim_active="active" 
                    iletisim_disable="disabled" 
                    gor_to="/portal/BasvuruGoruntule"
                    form_to="/portal/BasvuruFormu"
                    sifre_to="/portal/Sifre"
                    />
            </div>
            <div className="col-7">
        
                <div style={{backgroundColor:"gray",borderRadius: "25px",fontFamily  : 'Droid Sans',color: "whitesmoke", marginTop:"5rem"}}>
                    <div className="container text-center">
                        <div class="row">
                            <div class="col-6">
                                <div class="contact-info-one__single wow fadeInUp animated" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationName: "fadeInUp"}}>
                                    <div class="contact-info-one__icon"><i class="kipso-icon-placeholder"></i>
                                        
                                    </div>
                                    <h2 class="contact-info-one__title">Adres</h2>
                                    <p class="contact-info-one__text">Kadir Has University<br/> Cibali, Kadir Has Cd., 34083 <br/>Fatih / İstanbul</p>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="contact-info-one__single wow fadeInDown animated" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationName: "fadeInDown"}}>
                                    <div class="contact-info-one__icon"><i class="kipso-icon-contact"></i>
                                    </div>
                                    <h2 class="contact-info-one__title">İletişim</h2>
                                    <p class="contact-info-one__text">E-posta: <a href="mailto:aday@khas.edu.tr"
                                    style={{textDecoration: "none", color: "white"
                                    }}>aday@khas.edu.tr</a>
                                    <br/>Tel: <a href="tel:02125336532" 
                                    style={{textDecoration: "none", color:"white"
                                    }}>+90 (212) 533 65 32</a><br/></p>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
                <div class="container" >
                    <div class="main-content mag-content clearfix">
                        <br/><br/>
                        <div class="row">
                            <div class="col-md-12">
                                <article class="post-wrapper">
                                    <div class="post-content clearfix" >
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.0243876494196!2d28.95751266686554!3d41.02472238964946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b541e530250b4b%3A0xe5f319d20cd93902!2sKadir+Has+%C3%9Cniversitesi!5e0!3m2!1str!2str!4v1491311385648" width="100%" height="300" frameborder="0" style={{border:"0", marginBottom: "15px"}} allowfullscreen=""></iframe>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                    <br/>
                </div>               
            </div>
        </div>  
        
    );
}

export default Iletisim;