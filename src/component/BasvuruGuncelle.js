import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import axios from 'axios';
function BasvuruGuncelle() {
    
    const navigate = useNavigate('');
    const id = sessionStorage.getItem('id');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    
    const [ad, setAd] = useState('');
    const [soyad, setSoyad] = useState('');
    const [dogumTarihi, setDogumTarihi] = useState('');
    const [cinsiyet, setCinsiyet] = useState('');    
    const [eMail, setEMail] = useState('');
    const [telNo, setTelNo] = useState('');
    const [milliyet1, setMilliyet1] = useState('');
    const [tcPasapportNo, setTcPasapportNo] = useState('');
    const [engelDurum, setEngelDurum] = useState('');
    const [EngelDurum_aciklama, setEngelDurum_aciklama] = useState('');
    const [mezuniyetdurum, setMezuniyetDurum] = useState('');
    const [mezuniyetTarih, setmezuniyetTarih] = useState('');
    const [ortalama, setOrtalama] = useState('');
    const [universite, setUniversite] = useState('');
    const [fakulte, setFakulte] = useState('');
    const [bolum, setBolum] = useState('');
    const [ulke, setUlke] = useState('');
    const [il, setIl] = useState('');
    const [ilce, setIlce] = useState('');
    const [postaKutusu, setPostaKutusu] = useState('');
    const [mahalle, setMahalle] = useState('');
    const [adr_aciklama, setAdr_aciklama] = useState('');
    const [cvbelge, setCVbelge] = useState('');
    const [niyetbelge, setNiyetbelge] = useState('');
    const [pasaportbelge, setPasaportbelge] = useState('');
    const [ikametgahbelge, setIkametgahbelge] = useState('');
    const [diplomabelge, setDiplomabelge] = useState('');
    const [ingyeterlilikbelge, setIngyeterlilikbelge] = useState('');
    const [bilgi,setBilgi]=useState('');

    const  AciklamaGoster = () =>{
        var engeldurum = document.getElementById("engel").value;
        var aciklamaDiv = document.getElementById("aciklamaDiv");
        if (engeldurum == "var") {
            aciklamaDiv.style.display = "block";
        } else {
            aciklamaDiv.style.display = "none";
        }  
    }


    const Kimlik =()=>{
        var kimlik = document.getElementById("uyruk").value;
        var pasaportDiv = document.getElementById("pasaportDiv");
        var tcDiv = document.getElementById("tcDiv");
        if (kimlik == "diger") {
            tcDiv.style.display = "block";
            pasaportDiv.style.display = "none";
        } else if(kimlik == null){
            pasaportDiv.style.display = "block";
            tcDiv.style.display = "none";
        } else{
            pasaportDiv.style.display = "block";
            tcDiv.style.display = "none";
        } 
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (ad, soyad, dogumTarihi, eMail, telNo,cinsiyet, milliyet1, tcPasapportNo, engelDurum, EngelDurum_aciklama, mezuniyetdurum,mezuniyetTarih, ortalama,universite, fakulte,bolum,ulke,il,ilce,postaKutusu,mahalle,adr_aciklama ,cvbelge, niyetbelge, pasaportbelge, ikametgahbelge, diplomabelge, ingyeterlilikbelge != '') {

            
            try {
                const response = await axios.post("http://localhost:3001/formGoster", { id });
               
                    setBilgi(response.data);


                

                const response2 = await axios.post("http://localhost:3001/formGuncelle", {
                    id,ad, soyad, dogumTarihi, eMail, telNo,cinsiyet, milliyet1, tcPasapportNo, engelDurum, EngelDurum_aciklama, mezuniyetdurum,mezuniyetTarih, ortalama,universite, fakulte,bolum,ulke,il,ilce,postaKutusu,mahalle,adr_aciklama ,cvbelge, niyetbelge, pasaportbelge, ikametgahbelge, diplomabelge, ingyeterlilikbelge
                }
                );
                
                if (response2.status === 200) {
                    setSuccess('Başvurunuz güncellendi. Başvuru önizleme sayfasına yönlendiriliyorsunuz...');
                    setError('');
                    setAd('');
                    setSoyad('');        
                    setDogumTarihi('');

                    setCinsiyet('');        
                    setEMail('');
                    setTelNo('');

                    setMilliyet1('');        
                    setTcPasapportNo('');

                    setEngelDurum('');
                    setEngelDurum_aciklama('');

                    setMezuniyetDurum('');
                    setmezuniyetTarih('');
                    setOrtalama('');
                    setUniversite('');
                    setFakulte('');
                    setBolum('');
                    setUlke('');
                    setIl('');
                    setIlce('');
                    setPostaKutusu('');
                    setMahalle('');
                    setAdr_aciklama('');
                    setCVbelge('');
                    setNiyetbelge('');
                    setPasaportbelge('');
                    setIkametgahbelge('');
                    setDiplomabelge('');
                    setIngyeterlilikbelge('');
                    navigate('/portal/BasvuruGoruntule');

                } else {
                    setError(response2.data.error);
                }


            } catch (err) {
                console.log(err);

            }

        } else {
            setError('Lütfen tüm alanları doldurunuz...');
            return;

        }


    }
    return(
        <>
        <div className="row" style={{width:"100vw",height:"100vh", backgroundImage: "linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5))"}}>
            <div className="col-4">
                <Sidebar 
                    gor_active="active" 
                    // gor_disable="disabled"
                    gor_to="/portal/BasvuruGoruntule" 
                    form_to="/portal/BasvuruFormu"                    
                    iletisim_to="/portal/Iletisim"
                    sifre_to="/portal/Sifre"/>
            </div>
            <div className="col-7 mt-5" style={{ textDecorationColor: "white", borderRadius: "25px", backgroundColor: "none",  height: "38rem", overflowX: "hidden",scrollBehavior:"smooth" ,scrollbarGutter:"revert", scrollbarColor:"-moz-initial",msScrollbarHighlightColor:"Highlight"  , overflowY: "scroll", msOverflowStyle:"none", scrollbarWidth:"none"}}>
            <h1 className="h3 mb-3 fw-normal mt-5" id="register_yazi"> Basvuru Formu</h1>
            <form onSubmit={handleSubmit}>

                <div class="row">

                    <div class="col-md-4" >
                        <label for="ad">Ad</label>
                        <input type="text" class="form-control" id="ad" name="ad" placeholder="Ad" 
                        value = {ad}
                        onChange= {(e) => setAd(e.target.value)} required />                            
                    </div>
                    <div class="col-md-4" >
                        <label for="soyad">Soyad</label>
                        <input type="text" class="form-control" id="soyad" name="soyad"
                        value={soyad} 
                        onChange= {(e) => setSoyad(e.target.value)}
                        placeholder="Soyad" required />                            
                    </div>
                    <div class="col-md-4">                            
                            <label for="dogumTarihi">Doğum Tarihi</label>
                            <input type='date' class="form-control" id="dogumTarihi" name="dogumTarihi" 
                            value={dogumTarihi} 
                            onChange= {(e) => setDogumTarihi(e.target.value)}/>                            
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4" >
                        <label for="validationServer05" >E-Posta</label>
                        <input type="email" class="form-control" id="form_eposta" name="form_eposta"                            
                        value={eMail} 
                        onChange= {(e) => setEMail(e.target.value)}
                        placeholder="E-posta" required />
                        <div class="valid-feedback">
                        </div>
                    </div>
                    <div class="col-md-4" id="form_tel" name="form_tel">
                        <label for="form_tel">Telefon</label>
                        <input type="text" class="form-control" id="form_tel" name="form_tel"                            
                        value={telNo} 
                        onChange= {(e) => setTelNo(e.target.value)}
                        placeholder="Telefon" required />
                        <div class="invalid-feedback">
                        </div>
                    </div>
                    <div class="col-md-4" id="drop_cinsiyet" name="cinsiyet">
                        <div>
                            <label for="validationServer05">Cinsiyet</label>      
                            <select class="form-select" 
                            
                            value={cinsiyet} 
                            onChange= {(e) => setCinsiyet(e.target.value)}
                            required>
                                <option>Seçiniz... </option>
                                <option value="kadin">Kadın</option>
                                <option value="erkek">Erkek</option>
                            </select>
                        </div>
                    </div>                        
                </div>
                <div class="row">
                    <div class="col-md-4" id="pasaport" name="pasaport">
                        <div>
                            <label for="form_uyruk">Uyruk</label>      
                            <select class="form-select" 
                            id="uyruk" onClick={()=> Kimlik()}
                            value={milliyet1} 
                            onChange= {(e) => setMilliyet1(e.target.value)}
                            required>
                                <option>Seçiniz... </option>
                                <option value="tc">T.C.</option>
                                <option value="diger">Diğer</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-8" id="pasaport" name="pasaport">
                        <label id="tcDiv" for="validationServer05"> Pasaport No</label>
                        <label id="pasaportDiv" for="validationServer05"> TC Kimlik No</label>
                        <input type="text" class="form-control" id="validationServer05" name="validationServer05_5"                           
                        value={tcPasapportNo} 
                        onChange= {(e) => setTcPasapportNo(e.target.value)}                            
                        required />
                    </div>
                </div>  
                <div class="row">
                    <div class="col-md-4 ">                            
                        <label for="engel" >Engel Durumu : </label>                            
                        <div>                    
                            <select class="form-select" 
                            id="engel" onClick={()=> AciklamaGoster()}
                            value = {engelDurum}
                            onChange= {(e) => setEngelDurum(e.target.value)}
                            required>
                                <option>Seçiniz... </option>
                                <option value="var">Engelim Var</option>
                                <option value="yok">Engelim Yok</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-md-8 " id="aciklamaDiv"                
                    style={{ display: "none" }}>
                        <label for="aciklama" 
                                
                        
                        >Açıklama</label>
                        <input type="text" class="form-control"
                        value = {EngelDurum_aciklama}
                        onChange= {(e) => setEngelDurum_aciklama(e.target.value)}
                        id="aciklama"/>
                    </div>



                </div>
                <div className='row'>            

                    <div class="col-md-4" id="form_mezuniyet_bilgi" name="form_mezuniyet_bilgi">  
                        <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
                            <label for="validationServer05">Mezuniyet Durumu</label>                                
                            <select class="form-select" 
                            id="form_mezuniyet_bilgi" name="form_mezuniyet_bilgi"
                            value = {mezuniyetdurum}
                            onChange= {(e) => setMezuniyetDurum(e.target.value)}
                            required>
                                <option>Seçiniz... </option>
                                <option value="mezun">Mezun</option>
                                <option value="mezun2">Mezun değil</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-md-4" id="form_mezuniyet" name="form_mezuniyet">
                        <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
                            <label for="validationServer05">Mezuniyet Tarihi</label>
                            <input type='date' class="form-control" id='datepicker'
                            
                            value = {mezuniyetTarih}
                            onChange= {(e) => setmezuniyetTarih(e.target.value)}
                            
                            name="datepicker" placeholder=' Mezuniyet Tarihiniz'  />

                        </div>
                    </div>

                    <div class="col-md-4" id="form_ortalama" name="form_ortalama">
                        <label for="validationServer02">Ortalama</label>

                        <input type="text" class="form-control" id="validationServer02" name="validationServer02_5" 
                        
                        value = {ortalama}
                        onChange= {(e) => setOrtalama(e.target.value)}
                        placeholder="Ortalamanız" required />
                        <div class="valid-feedback">
                        </div>
                    </div>


                </div>
                <div class="row" >

                    <div class="col-md-4" id="form_uni" name="form_uni">

                        <label for="validationServer02">Üniversite</label>

                        <input type="text" class="form-control" id="validationServer02" name="validationServer02_2" 
                        
                        value = {universite}
                        onChange= {(e) => setUniversite(e.target.value)}
                        placeholder="Üniversite adını girin" required />
                        <div class="valid-feedback">
                        </div>

                    </div>


                    <div class="col-md-4" id="form_fakulte" name="form_fakulte">

                        <label for="validationServer02">Fakülte</label>

                        <input type="text" class="form-control" id="validationServer02" name="validationServer02_3"
                        
                        value = {fakulte}
                        onChange= {(e) => setFakulte(e.target.value)}
                        placeholder="Fakülte" required />                            
                    </div>
                    <div class="col-md-4" id="form_bolum" name="form_bolum">
                        <label for="validationServer02">Bölüm</label>

                        <input type="text" class="form-control" id="validationServer02" name="validationServer02_4" 
                        
                        value = {bolum}
                        onChange= {(e) => setBolum(e.target.value)}
                        placeholder="Bölümünüz" required />
                        
                    </div>
                </div>
                    <div class="row">
                        <div class="col-md-4" id="form_ulke" name="ulke">
                            <label for="validationServer02">Ülke</label>

                            <input type="text" class="form-control" 
                                value = {ulke}
                                onChange= {(e) => setUlke(e.target.value)}
                            
                            
                            id="validationServer02" name="validationServer02_6" placeholder="Ülke" required />
                            
                        </div>



                    <div class="col-md-4" id="il_ilce" name="il-ilce" >
                        <label for="validationServer02">İl</label>
                        <input type='text' name="iller" class="form-control" 
                        
                        value = {il}
                        onChange= {(e) => setIl(e.target.value)}
                        
                        id="validationServer02" placeholder="İl" required />
                        

                    

                    </div>


                    <div class="col-md-4" id="il_ilce" name="il-ilce">
                        <label for="Ilceler">İlçe</label>
                        <input type='text' id="Ilceler" class="form-control" 
                        
                        value = {ilce}
                        onChange= {(e) => setIlce(e.target.value)}
                        
                        name="ilceler" placeholder='İlçe'/>
                            
                    

                    </div>


                </div>
                <div className='row'>
                    <div class="col-md-4" id="form_posta_kutusu" name="form_posta_kutusu">
                        <label for="validationServer02">Posta Kutusu</label>

                        <input type="text" 
                        
                        value = {postaKutusu}
                        onChange= {(e) => setPostaKutusu(e.target.value)}
                        class="form-control " id="validationServer02" name="validationServer02_7" placeholder="Posta kutusu" required />
                        
                    </div>

                    <div class="col-md-4" id="form_mahalle" name="form_mahalle">
                        <label for="validationServer02">Mahalle</label>

                        <input type="text" class="form-control " id="validationServer02"
                        
                        value = {mahalle}
                        onChange= {(e) => setMahalle(e.target.value)}
                        name="validationServer02_8" placeholder="Mahalle" required />
                        
                    </div>

                    <div class="col-md-4" id="form_adres_aciklama" name="form_adres_aciklama">
                        <label for="validationServer02">Adres Açıklama</label>

                        <input type="text" class="form-control " 
                                value = {adr_aciklama}
                                onChange= {(e) => setAdr_aciklama(e.target.value)}
                        
                        id="validationServer02" name="validationServer02_9" placeholder="Detaylı belirtiniz" required />
                        
                    </div>

                </div>
                <div class="row">

                    <div class="col-md-4" id="form_cv" name="form_cv">
                        <label for="formFile" class="form-label">CV: </label>
                        <input class="form-control"
                            value = {cvbelge}
                            onChange= {(e) => setCVbelge(e.target.value)}
                        type="file" id="cvbelge" name="form_cvFile" accept=".pdf, .PDF"/>
                    </div>



                    <div class="col-md-4" id="form_niyet_mektubu" name="form_niyet_mektubu">
                        <label for="formFile" class="form-label">Niyet mektubu: </label>
                        <input class="form-control" 
                        
                        value = {niyetbelge }
                        onChange= {(e) => setNiyetbelge(e.target.value)}
                        type="file" id="formFile" name="formniyetFile"accept=".pdf, .PDF" />
                    </div>


                    <div class="col-md-4" id="form_pasaport" name="form_pasaport">
                        <label for="formFile" class="form-label">Pasaport: </label>
                        <input class="form-control" 
                            value = {pasaportbelge}
                            onChange= {(e) => setPasaportbelge(e.target.value)}
                        
                        type="file" id="formFile" name="form_pasaportFile"accept=".pdf, .PDF" />
                    </div>


                    <div class="col-md-4" id="form_ikamet" name="form_ikamet">
                        <label for="formFile" class="form-label">İkametgah: </label>
                        <input class="form-control" 
                        
                        value = {ikametgahbelge}
                        onChange= {(e) => setIkametgahbelge(e.target.value)}
                        type="file" id="formFile" name="form_ikametFile"accept=".pdf, .PDF" />
                    </div>


                    <div class="col-md-4" id="form_diploma" name="form_diploma">
                        <label for="formFile" class="form-label">Diploma: </label>
                        <input class="form-control"
                            value = {diplomabelge}
                            onChange= {(e) => setDiplomabelge(e.target.value)}
                        type="file" id="formFile" name="form_diplomaFile" accept=".pdf, .PDF"/>
                    </div>


                    <div class="col-md-4" id="form_ing_yeterlilik" name="form_ing_yeterlilik">
                        <label for="formFile" class="form-label">İngilizce Yeterlilik: </label>
                        <input class="form-control" 
                            value = {ingyeterlilikbelge}
                            onChange= {(e) => setIngyeterlilikbelge(e.target.value)}
                        
                        type="file" id="formFile" name="form_ing_yeterlilik_File" accept=".pdf, .PDF"/>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-4"></div>
                    <div className="col-md-4 m-3">
                        <button type="submit" className="btn btn-primary btn-lg btn-block">Başvuruyu Güncelle</button>
                    </div>
                    <div className="col-md-4"></div>
                </div>

                </form>
                
                {error && <p style={{color: 'red'}}> {error} </p>}
                {success&&<p style={{color: 'green'}}> {success} </p>}
            </div>
            
            <div className='col-1'></div>
        </div>
        </>
    );
}
export default BasvuruGuncelle;