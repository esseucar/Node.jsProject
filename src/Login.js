import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import background from "./img/background.jpg";
import axios from 'axios';
function Login() {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const [success,setSuccess]=useState('');
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {

            const response = await axios.post('http://localhost:3001/',
                {
                    email,
                    password
                }
            );
            if (response.status === 200) {
                
                if (response.data.message === "1") {
                              
                
                    sessionStorage.setItem("id", response.data.id);
                    sessionStorage.setItem("isLogin","1");
                    sessionStorage.setItem("user",email);
                    setSuccess('Giriş Başarili. Yonlendiriliyorsunuz...');
                    setTimeout(() => {
                        navigate('/portal');
                    }, 2000);
                    setEmail('');
                    setPassword('');
                    setError('');
                }
                else  {
                    setSuccess("");
                    setError("Kullanıcı bulunamadı!")
                }
                
            }
        }
        catch (err) {
            setError('Kullanici adi ve sifre kontrolünde hata olustu.');
        }

    }
    return (
        
        <div style={{ backgroundImage: `url(${background})`,
        backgroundRepeat:"no-repeat",
        backgroundAttachment:"fixed",
        backgroundSize:"cover",
        height:"100vh"}}>

        <div class="row" style={{height:"90px"}}>
            <div class="col-12"></div>
            </div>
            <div class="row justify-content-center ">
            <div class="col-4" style={{backgroundColor:"white", borderRadius:"2rem"}}>

                <form name="giris" onSubmit={handleSubmit} >
                    
                    <h1 class="h3 mb-3 fw-normal mt-4">Giriş Yap</h1>                   
                        
                        <input  class="form-control mt-2" type="email" 
                            
                            value={email} 
                            onChange= {(e) => setEmail(e.target.value)}
                            required placeholder="name@example.com"/>
                        <input type="password" class="form-control mt-2" 
                            placeholder="Şifre"
                            value={password}
                            onChange= {(e) => setPassword(e.target.value)}
                            required />
                    
                <div class="form-floating py-2">
                    <p id="sonuc" style={{backgroundColor: "aliceblue", borderRadius:"5px"}}></p>
                    <button class="w-100 btn btn-lg btn-primary mt-2 mb-3" type="submit">Giriş</button>
                
                </div>
                </form>
                
                {error && <p style={{color:'red'}}> {error} </p> }
                {success && <p style={{color:'green'}}> {success} </p> }

                <p className='mb-4'>
                    Hesabınız yok mu? <Link to="/kayit" style={{textDecorationLine:"none"}}>Kayıt Ol!</Link>
                    {/* <a class="align-content-center"><button type="button" class="w-100 btn btn-lg btn-secondary mb-3">Kayıt Ol</button></a> */}
                </p>
            </div>
        </div>
    </div>
        
    );
}

export default Login;