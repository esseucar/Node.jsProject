import {Route, Routes, Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import background from "./img/khas-logo.png";
import {useNavigate} from 'react-router-dom';


import Sidebar from './component/Sidebar';
import React, { useEffect, useState } from 'react';



function Portal() {
    // const navigate = useNavigate();
    // useEffect(()=>{
        
    //     var login=sessionStorage.getItem("login");
        
    //     if(login!='true'){
    //        navigate('/');
    //     }          
    //     },[]
    // );   
    return (
    <>
    <div className="row" style={{width:"100vw",height:"100vh", backgroundImage: "linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5))"}}>
        
            <div className="col-3" id="sidebar">
            <Sidebar gor_to="BasvuruGoruntule"
                    form_to="BasvuruFormu"                                  
                    iletisim_to="/portal/Iletisim"
                    sifre_to="/portal/Sifre"
                    />
            </div>
            <div className="col-8" id="icerikDiv">

                <div className="row">
                    
                    <div class=" text-center col-12 mt-4" style={{backgroundColor: "aliceblue"}}>
                            <img src={background}></img>
                            <h1 class="display-5 fw-bold"></h1>
                            <div class="col-lg-6 mx-auto">
                                <p class="lead mb-2">Erasmus programı kapsamında Almanya, Avusturya, Belçika, Bulgaristan, Çek Cumhuriyeti, Danimarka, Finlandiya, Fransa, Hırvatistan, Hollanda, İngiltere, İspanya, İtalya, Macaristan, Letonya, Litvanya, Polonya, Portekiz, Romanya, Sırbistan, Slovakya, Slovenya ve Yunanistan gibi 20’yi aşkın Avrupa ülkesindeki 106 üniversite ile Erasmus ikili anlaşmamız mevcuttur. Bu üniversitelerden bazıları:</p>                                
                            </div>
                            <div class="col-12">
                                <div class="row py-1">
                                    <div class="col-12 border-bottom">
                                        <h2 style={{backgroundColor: "aliceblue"}}>Anlaşmalı Üniversiteler</h2>
                                    </div>
                                <div class="row py-1 d-grid gap-2 d-sm-flex justify-content-sm-center">
                                    <div class="col-12 justify-content-sm-center" style={{backgroundColor: "aliceblue"}}>
                                        <table class="lead table table-striped">
                                            <tr class="align-content-center
                                            align-items-center">
                                                                                    
                                            </tr>
                                            <tr>
                                                <td>Sungkyunkwan University (Güney Kore)</td>
                                                <td>University of Seoul (Güney Kore)</td>
                                                <td>Zhejiang Gongshang University (Çin)</td>
                                            
                                                <td>Georgia State University (ABD)</td>
                                                <td>Virgina Technical University (ABD)</td>
                                                <td>University of Delhi (Hindistan)</td>                                                                    
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div> 
            </div>
    </div>      
    </>
    );
}

export default Portal;