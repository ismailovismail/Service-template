const info=[
    {"id":1,"icon":"fa-solid fa-briefcase","title":"<span>Business</span> Consultant","text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, saepe."},
    {"id":2,"icon":"fa-solid fa-chart-pie","title":"<span>Online</span> Consultant", "text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, saepe."},
    {"id":3,"icon":"fa-solid fa-file-text","title":"<span>Tax</span> Planning","text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, saepe."},
    {"id":4,"icon":"fa fa-university","title":"<span>Bank</span> Investment","text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, saepe."},
    {"id":5,"icon":"fa fa-line-chart","title":"<span>Industry</span> Consultant","text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, saepe."},
    {"id":6,"icon":"fa fa-leaf","title":"<span>Business</span> Planning","text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, saepe."}
]



    function displayTask() {
        const row=document.querySelector('.cards .container-fluid .row')
         console.log(row);
        for ( index of info) {
          let cards=` 
        <div id="${index.id}" class="card text-center col-12 col-sm-6 col-md-4" style="width: 25rem;">
        <div class="card-body">
            <div class="icon"><i class="${index.icon}"></i></div>
          <h5 class="card-title">${index.title}</h5>
          <p class="card-text">${index.text}</p>
        </div>
      </div>`;


     row.insertAdjacentHTML('beforeend',cards)
        }
     
      
     }
displayTask()

const week=document.querySelector('.yellow .container-fluid .time .week span ')
const langbtn=document.querySelector('.lang')
const links=document.querySelectorAll(".nav-link")
const az=['Ana səhİfə','Səhİfələr','Haqqımızda','Xİdmət','Bloq','Komanda','Faq','Əlaqə']
const en=['HOME','PAGES','ABOUT US','SERVICE','BLOG','TEAM','FAQ','CONTACT']
const ourservice=document.querySelector('.ourservice .colorbox .container-fluid .titles .title1 h1')
const homepage=document.querySelector('.ourservice .colorbox .container-fluid .into .home')
const ourservice2=document.querySelector('.ourservice .colorbox .container-fluid .into .service')
const cardstitle=document.querySelectorAll('.cards .container-fluid .row .card .card-body .card-title')
const cardstitlenameAz=['<span>Biznes</span> Məsləhətçisi','<span>Onlayn</span> Məsləhətçi','<span>Vergi</span> Planlaşdırması','<span>Bank</span> İnvestisyası','<span>Sənaye</span> Məsləhətçisi','<span>Biznes</span> Planlaşdırması']
const cardstitlenameEN=['<span>Business</span> Consultant','<span>Online</span> Consultant','<span>Tax</span> Planning','<span>Bank</span> Investment','<span>Industry</span> Consultant','<span>Business</span> Planning']
const cardstext=document.querySelectorAll('.cards .container-fluid .row .card .card-body .card-text')
const cardtextAZ=['Müştərinin adipisinq prosesinə diqqət yetirməsi çox vacibdir. Onlar, tez-tez.','Müştərinin adipisinq prosesinə diqqət yetirməsi çox vacibdir. Onlar, tez-tez.','Müştərinin adipisinq prosesinə diqqət yetirməsi çox vacibdir. Onlar, tez-tez.','Müştərinin adipisinq prosesinə diqqət yetirməsi çox vacibdir. Onlar, tez-tez.','Müştərinin adipisinq prosesinə diqqət yetirməsi çox vacibdir. Onlar, tez-tez.','Müştərinin adipisinq prosesinə diqqət yetirməsi çox vacibdir. Onlar, tez-tez.']
const cardtextEN=['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, saepe.','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, saepe.','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, saepe.','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, saepe.','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, saepe.','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, saepe.']
const subscribe=document.querySelector('.subscribe .title h1')
const subscribetext=document.querySelector('.subscribe .text p')
const subscribetitle1=document.querySelector('.subscribe .title1 h1')
const input=document.querySelector('.subscribe .input-mn-group .input-groups input')
const button=document.querySelector('.subscribe .input-mn-group .input-groups button')
const footertext=document.querySelector('footer.first .text p')
const footermenutitle1=document.querySelector('footer.first .part2 .title h1')
const footerlinks1=document.querySelectorAll('footer.first .part2 .links ul li a')
const footerlinks1nameEN=['Seo Services','Virtual Marketing','Content Manage','Social Media','Black hat Seo']
const footerlinks1nameAZ=['Seo xidmətləri','Virtual Marketinq','Məzmun idarə olunması','Sosial Media','Qara papaq Seo']
const footermenutitle2=document.querySelector('footer.first .part3 .title h1')
const footerlinks2=document.querySelectorAll('footer.first .part3 .links ul li a')
const footerlinks2nameAZ=['Başqa bir heyrətamiz blog yazısı','Başqa bir heyrətamiz blog yazısı','Başqa bir heyrətamiz blog yazısı']
const footerlinks2nameEN=['Just another amazing blog post','Just another amazing blog post','Just another amazing blog post']
const footerend=document.querySelector('.end .container-fluid .text p')
langbtn.addEventListener('click',changeLang)

function changeLang() {
  if (langbtn.innerHTML=='EN') {
    week.innerHTML='şən-cüm'; 
    for (index in az) {
      links[index].innerHTML = az[index];
    }
    ourservice.innerHTML='BİZİM XİDMƏT';
    homepage.innerHTML='Ana səhifə';
    ourservice2.innerHTML='Bizim Xidmət';
    for (index in cardstitlenameAz) {
    cardstitle[index].innerHTML = cardstitlenameAz[index]
    }
    for (index in cardtextAZ) {
    cardstext[index].innerHTML = cardtextAZ[index]
    }
    subscribe.innerHTML = '<span>BURADA</span> ABUNƏ OLUN'
    subscribetext.innerHTML='Müştərinin adipisinq prosesinə diqqət yetirməsi çox vacibdir. Və rahatlıqlar ixtiraçı tərəfindən yumşaldıldı.';
    subscribetitle1.innerHTML='XƏBƏRLƏR VƏ YENİLİKLƏR'
    input.placeholder='Emaili daxil edin'
    button.innerHTML='Abunə olun'
    footertext.innerHTML='Müştərinin adipisinq prosesinə diqqət yetirməsi çox vacibdir. Qanunda asan bir şey yoxdur. İşlərimizi bundan da pisləşdirmək üçün hər şeyi açacaqdı.';
    footermenutitle1.innerHTML='SÜRƏTLİ KEÇİD'
     for (index in footerlinks1nameAZ) {
      footerlinks1[index].innerHTML = footerlinks1nameAZ[index]
     }
     footermenutitle2.innerHTML='Son Postlar'
     for (index in footerlinks2nameAZ ) {
        footerlinks2[index].innerHTML=footerlinks2nameAZ[index]
     }
     footerend.innerHTML='Bug somadhan © 2018. bütün hüquqlar qorunur'
     langbtn.innerHTML='AZ' 
  }else{
    week.innerHTML='sat-fri';
    for (index in en) {
      links[index].innerHTML = en[index];
    }
    ourservice.innerHTML='OUR SERVICE'
    homepage.innerHTML='Home'
    ourservice2.innerHTML='Our Service'
    for (index in cardstitlenameEN) {
        cardstitle[index].innerHTML = cardstitlenameEN[index]
    }
    for (index in cardtextEN) {
     cardstext[index].innerHTML = cardtextEN[index]
    }
    subscribe.innerHTML = 'SUBSCRIBE <span>HERE</span>'
    subscribetext.innerHTML='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti commodi ab, ex inventore unde.';
    subscribetitle1.innerHTML='GET NEWS AND UPDATE'
    input.placeholder='Enter email'
    button.innerHTML='SUBSCRIBE'
    footertext.innerHTML='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi facilis ab iure nihil quidem. Aperiam nobis rerum facere illo asperiores.'
    footermenutitle1.innerHTML='QUICK LINK'
    for (index in footerlinks1nameEN) {
     footerlinks1[index].innerHTML = footerlinks1nameEN[index]
    }
    footermenutitle2.innerHTML='RECENT POSTS'
    for (index in footerlinks2nameEN) {
    footerlinks2[index].innerHTML=footerlinks2nameEN[index]
    }
    footerend.innerHTML='Bug somadhan © 2018. all rights reserved'
    langbtn.innerHTML='EN'
   
  }

 
}



window.onscroll = myFunction;

function myFunction() {
  if (document.documentElement.scrollTop > 50) {
    document.querySelector(".black").style.display = "none";
    document.querySelector(".yellow").style.display = "none";
    document.querySelector("nav").style.marginTop = "0";
    document.querySelector("nav").style.transition = "1s";
 

    
  } else {
    document.querySelector(".black").style.display = "block";
    document.querySelector(".yellow").style.display = "block";
    document.querySelector("nav").style.marginTop = "50px";
   
   



  }
}

