const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

var conn = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'erasmusdb'
    }
);
conn.connect((err) => {
    if (err) {

        var con = mysql.createConnection(
            {
                host: 'localhost',
                user: 'root',
                password: ''
            }
        );

        con.connect(function (err) {
            if (err) throw err;
            console.log("Baglandi!");

            con.query("CREATE DATABASE erasmusdb", function (err, result) {
                if (err) throw err;
                console.log("DB Olusturuldu.");
                con = mysql.createConnection(
                    {
                        host: 'localhost',
                        user: 'root',
                        password: '',
                        database: 'erasmusdb'
                    }
                );
                var usersql = "CREATE TABLE user (user_id INT NOT NULL AUTO_INCREMENT, username VARCHAR(255) NOT NULL, password VARCHAR(50) NOT NULL,isLogin TINYINT NOT NULL, PRIMARY KEY (user_id))";

                con.query(usersql, function (err, result) {
                    if (err) throw err;
                    console.log("User Tablosu Olusturuldu.");
                });

                var basvurusql = "CREATE TABLE basvuru (basvuru_id INT NOT NULL AUTO_INCREMENT ,basvuran_id INT NOT NULL, ad VARCHAR(150) NOT NULL, soyad VARCHAR(150) NOT NULL, dogumTarihi DATE NOT NULL, eMail VARCHAR(150) NOT NULL, telNo VARCHAR(150) NOT NULL, cinsiyet VARCHAR(50) NOT NULL,milliyet1 VARCHAR(150) NOT NULL,tcPasapportNo VARCHAR(50) NOT NULL,engelDurum VARCHAR(5) NOT NULL, engelDurum_aciklama VARCHAR(255),mezuniyetdurum VARCHAR(50) NOT NULL,mezuniyetTarih DATE NOT NULL,ortalama TINYINT NOT NULL,universite VARCHAR(150) NOT NULL,fakulte VARCHAR(150) NOT NULL,bolum VARCHAR(150) NOT NULL,ulke VARCHAR(50) NOT NULL,il VARCHAR(50) NOT NULL,ilce VARCHAR(50) NOT NULL,postakutusu VARCHAR(10) NOT NULL,mahalle VARCHAR(150) NOT NULL, adrAcikla VARCHAR(255) NOT NULL,cv VARCHAR(255) NOT NULL,niyetmektubu VARCHAR(255) NOT NULL,pasaport VARCHAR(255) NOT NULL,ikametgah VARCHAR(255) NOT NULL,diploma VARCHAR(255) NOT NULL,ingyetbelgesi VARCHAR(255) NOT NULL,PRIMARY KEY (basvuru_id))";

                con.query(basvurusql, function (err, result) {
                    if (err) throw err;
                    console.log("Basvuru Tablosu Olusturuldu.");
                });
            });
        });
    }
    console.log('Veritabanina baglanildi.');
});
app.post('/kayit', (req, res) => {

    const { email, password } = req.body;
    const select_insert = "select * from user where username=?";
    conn.query(select_insert, email, (err, result) => {
      if (err) {
        res.status(500).send({ error: "sunucu bazlı bir hata oluştu.." });
        return;
      }
      if (result.length > 0) {
        res.status(201).send({ message: "Kullanıcı Zaten Mevcut!" });
        return;
      }
      else {
        const query = "INSERT INTO user (username,password) VALUE (?,?)";

        conn.query(query, [email, password], (err, result) => {

            if (err) {
                console.error("Veritabanina bilgi girereken hata: ", err);
                res.status(500).send({ error: "Kayit olusturulurken bir hata olustu." });
                return;
            }
            res.status(200).send({ message: "Kayit basarili!" });

        })}
    });

});
app.post('/', (req, res) => {

    const { email, password } = req.body;

    const query = "SELECT * FROM user WHERE username=? AND password=?";

    conn.query(query, [email, password], (err, result) => {
        if (err) {
            console.error("Bilgilerin kontrolunde hata olustu. ", err);
            res.status(500).send({ error: 'Bilgilerin kontrolunde hata olustu.' });
            return;
        }
        if (result.length > 0) {
            const user_id = result[0].user_id;

            const isLoginQuery = "UPDATE user SET isLogin = 1 WHERE user_id=?";

            conn.query(isLoginQuery, user_id, (err, result) => {
                if (err) {
                    console.error("Login bilgisi guncellenirken hata olustu. ", err);
                    res.status(500).send({ error: 'Login guncellenemedi.' });
                }
            });

            res.status(200).send({ message: '1', id: user_id });
        } else {
            res.status(200).send({ message: '0' });
        }


    })

});
app.post('/signout', (req, res) => {

    const { id } = req.body;

    const query = "UPDATE user SET isLogin = 0 WHERE user_id=?";

    conn.query(query, [id], (err, result) => {
        if (err) {
            console.error("isLogin guncellemesinde hata olustu. ", err);
            res.status(500).send({ error: 'isLogin guncellemesinde hata olustu.' });
            return;
        }

        res.status(200).send({ message: 'Kullanici cikisi guncellendi.' });
    });

});

app.post('/formGonder', (req, res) => {

    const { id, ad, soyad, dogumTarihi, eMail, telNo,cinsiyet, milliyet1, tcPasapportNo, engelDurum, EngelDurum_aciklama, mezuniyetdurum,mezuniyetTarih, ortalama,universite, fakulte,bolum,ulke,il,ilce,postaKutusu,mahalle,adr_aciklama ,cvbelge, niyetbelge, pasaportbelge, ikametgahbelge, diplomabelge, ingyeterlilikbelge } = req.body;

    const kontrolQuery = "SELECT * FROM basvuru WHERE basvuran_id = ?";

    conn.query(kontrolQuery, [id], (err, result) => {

        if (result.length > 0) {
            res.status(201).send({ error: "Aynı hesaptan yalnizca bir basvuru yapilabilir." });
            return;
        } else {
            const query = "INSERT INTO basvuru (basvuran_id, ad, soyad, dogumTarihi, eMail, telNo,cinsiyet, milliyet1, tcPasapportNo, engelDurum, EngelDurum_aciklama, mezuniyetdurum,mezuniyetTarih, ortalama,universite, fakulte,bolum,ulke,il,ilce,postakutusu,mahalle,adrAcikla, cv, niyetmektubu, pasaport, ikametgah, diploma, ingyetbelgesi) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

            conn.query(query, [ id, ad, soyad, dogumTarihi, eMail, telNo,cinsiyet, milliyet1, tcPasapportNo, engelDurum, EngelDurum_aciklama, mezuniyetdurum,mezuniyetTarih, ortalama,universite, fakulte,bolum,ulke,il,ilce,postaKutusu,mahalle,adr_aciklama ,cvbelge, niyetbelge, pasaportbelge, ikametgahbelge, diplomabelge, ingyeterlilikbelge], (err, result) => {
                if (err) {
                    console.error("Veritabanina ekleme yapilirken hata olustu. ", err);
                    res.status(500).send({ error: "Veritabanina ekleme yapilirken hata olustu." });
                    return;
                }

                res.status(200).send({ message: "Basvuru basariyla kaydedildi." });
            });
        }

    });

});
app.post("/formGoster", (req,res) => {

    const user_id = req.body.id;

    const query = "SELECT * FROM basvuru WHERE basvuran_id=?";

    conn.query(query, [user_id], (err,result) => {
        if(err){
            console.error("Veritabanindan bilgi alinirken hata olustu.", err);
            res.status(500).send({error: "Veritabanindan bilgi alinirken hata olustu."});
            return;
        }
        if(result.length===0){
            res.status(404).send({message: "Bu kullanıcıya ait basvuru bulunamadi."});
        }else{
            res.status(200).send({
                
                ad: result[0].ad, 
                soyad: result[0].soyad,
                dogumTarihi:result[0].dogumTarihi,                
                eMail:result[0].eMail,               
                telNo:result[0].telNo,
                cinsiyet:result[0].cinsiyet,                 
                milliyet1:result[0].milliyet1, 
                tcPasapportNo:result[0].tcPasapportNo,
                engelDurum:result[0].engelDurum, 
                EngelDurum_aciklama:result[0].engelDurum_aciklama,
                mezuniyetdurum:result[0].mezuniyetdurum, 
                mezuniyetTarih:(result[0].mezuniyetTarih),   
                ortalama:result[0].ortalama,
                universite:result[0].universite,
                fakulte:result[0].fakulte,
                bolum:result[0].bolum,
                ulke:result[0].ulke,
                il:result[0].il,
                ilce:result[0].ilce,
                postaKutusu:result[0].postakutusu,
                mahalle:result[0].mahalle,
                adr_aciklama:result[0].adrAcikla,
                cvbelge:result[0].cv, 
                niyetbelge:result[0].niyetmektubu, 
                pasaportbelge:result[0].pasaport, 
                ikametgahbelge:result[0].ikametgah, 
                diplomabelge:result[0].diploma, 
                ingyeterlilikbelge:result[0].ingyetbelgesi
            });
        }
       


    });



});

app.post('/sifreDegistir', (req, res) => {
    const {password,yeniSifre, id } = req.body;
    const squery = "select * from user where user_id=?";
    conn.query(squery, [id], (err, result) => {
      if(err)
      {
        res.status(500).send({error:"Sunucu hatası!"});
      }
    
      if (result[0].password === password) {
        console.log(password);
  
        const query = "UPDATE user SET password=?, isLogin = 0 WHERE user_id=?";
  
        conn.query(query, [yeniSifre, id], (err, result) => {
          if (err) {
  
            console.error("Şifre guncellemesinde hata olustu. ", err);
            res.status(500).send({ error: 'Şifre guncellemesinde hata olustu.' });
            return;
  
          }
  
          res.status(200).send({ message: '1' });
          
        });
  
      }
      else {
        res.status(404).send({ message: "Girilen mevcut şifre hatalı." });
        return;
    } 
   
      
    }); 
  
  });


  app.post('/formGuncelle', (req, res) => {
    const {  id, ad, soyad, dogumTarihi, eMail, telNo,cinsiyet, milliyet1, tcPasapportNo, engelDurum, EngelDurum_aciklama, mezuniyetdurum,mezuniyetTarih, ortalama,universite, fakulte,bolum,ulke,il,ilce,postaKutusu,mahalle,adr_aciklama ,cvbelge, niyetbelge, pasaportbelge, ikametgahbelge, diplomabelge, ingyeterlilikbelge} = req.body;
    const basvuru_select = "select * from basvuru where basvuran_id=?";
    conn.query(basvuru_select, [id], (err, result) => {
      if (err) {
        res.status
      }
      if (result.length > 0) {
  
        const basvuru_update = `
        UPDATE basvuru 
        SET ad=?, soyad=?, dogumTarihi=?, eMail=?, telNo=?, cinsiyet=?, milliyet1=?, tcPasapportNo=?, engelDurum=?, engelDurum_aciklama=?, mezuniyetdurum=?, 
        mezuniyetTarih=?,ortalama=?, universite=?, fakulte=?, bolum=?, ulke=?, il=?, ilce=?, postakutusu=?, mahalle=?, adrAcikla=?, 
        cv=?, niyetmektubu=?, pasaport=?, ikametgah=?, diploma=?, ingyetbelgesi=? WHERE basvuran_id=?
      `;
  
        conn.query(basvuru_update, [ad, soyad, dogumTarihi, eMail, telNo,cinsiyet, milliyet1, tcPasapportNo, engelDurum, EngelDurum_aciklama, mezuniyetdurum,mezuniyetTarih, ortalama,universite, fakulte,bolum,ulke,il,ilce,postaKutusu,mahalle,adr_aciklama ,cvbelge, niyetbelge, pasaportbelge, ikametgahbelge, diplomabelge, ingyeterlilikbelge, id], (err, result) => {
          if (err) {
            console.error("Kayıt güncellenirken hata yaşandı!");
            return res.status(500).send({ error: "Kayıt güncellenirken hata oluştu!" });
          }
          res.status(200).send({ message: "0" });//kayıt gucellendi
        });
  
  
  
      }
      else {
        const query = "INSERT INTO basvuru (basvuran_id, ad, soyad, dogumTarihi, eMail, telNo,cinsiyet, milliyet1, tcPasapportNo, engelDurum, EngelDurum_aciklama, mezuniyetdurum,mezuniyetTarih, ortalama,universite, fakulte,bolum,ulke,il,ilce,postakutusu,mahalle,adrAcikla, cv, niyetmektubu, pasaport, ikametgah, diploma, ingyetbelgesi) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

            conn.query(query, [ id, ad, soyad, dogumTarihi, eMail, telNo,cinsiyet, milliyet1, tcPasapportNo, engelDurum, EngelDurum_aciklama, mezuniyetdurum,mezuniyetTarih, ortalama,universite, fakulte,bolum,ulke,il,ilce,postaKutusu,mahalle,adr_aciklama ,cvbelge, niyetbelge, pasaportbelge, ikametgahbelge, diplomabelge, ingyeterlilikbelge], (err, result) => {
          if (err) {
            console.error("kisi bilgi girerken hata yaşandı!");
            res.status(500).send({ error: "Kayıt oluşturulken bir hata oluştu!" });
            return;
          }
          else res.status(200).send({ message: "1" });//kayıt gercekleşti
  
        });
      }
  
      if (err) {
        console.error("Sunucu tarafında hata yaşandı!");
        return;
      }
  
  
  
    });
  
  });

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server ${PORT} üzerinde dinleniyor.`);
});