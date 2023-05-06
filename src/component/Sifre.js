import React, { useState,useEffect } from 'react';

import {useNavigate} from 'react-router-dom';

import Sidebar from "./Sidebar.js";
import axios from 'axios';


function Sifre() {
  const navigate = useNavigate();
  // useEffect(()=>{
      
  //     var login=sessionStorage.getItem("login");
      
  //     if(login!='true'){
  //        navigate('/');
  //     }          
  //     },[]
  // );   
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [yeniSifre, setYeniSifre] = useState('');
  const [error, setError] = useState('');
  const [success, setSucces] = useState('');
  const id = sessionStorage.getItem('id');

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {      
      const response = await axios.post('http://localhost:3001/sifreDegistir', { password, yeniSifre, id });
      if (response.status === 200 && response.data.message === "1") {
          setError("")
          setSucces("Şifre Güncelleme Basarılı! Girişe Yönlendiriliyor..");
          setTimeout(() => {
              navigate("/");  
          }, 2000);
        
      }
      else 
      {
        setSucces("");
        setError("Şifre Değiştirilemedi!");
      }  
    }
    catch (err) {
      console.log(err);
    }
    
    

  }

  return (
    <>
      <div className="row" style={{width:"100vw",height:"100vh", backgroundImage: "linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5))"}}>
        <div className="col-4">
            <Sidebar 
                sifre_active="active" 
                sifre_disable="disabled" 
                gor_to="/portal/BasvuruGoruntule"
                iletisim_to="/portal/Iletisim"                   
                form_to="/portal/BasvuruFormu"
                />                        
        </div>
        <div className='col-7'>
            <div className="row justify-content-center" id="register">
            <h1 className="h3 mb-3 fw-normal mt-5" id="register_yazi">              
              Portal Şifre Güncelleme
            </h1>
            <form onSubmit={handleSubmit} id="signin_form">
              <div>
                <label htmlFor="email">Email adresi</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Mail adresiniz"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="password">Şifre</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Şifre"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="yeniSifre">Yeni Şifre</label>
                <input
                  type="password"
                  className="form-control"
                  id="yeniSifre"
                  placeholder="Yeni Şifre"
                  value={yeniSifre}
                  onChange={(e) => setYeniSifre(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"class="w-100 btn btn-lg btn-primary mt-2 mb-3"               
              >
                Kaydet
              </button>
            </form>
            {error && <p style={{ color: 'red' }}> {error} </p>}
            {success && <p style={{color: 'green'}}> {success} </p>}
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
}

export default Sifre;