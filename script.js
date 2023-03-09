
//$(document).ready(()=> mainContaint(homepage))

$('.humberger').on('click', ()=> $('.humberger').toggleClass('bi-x-lg'))


$(".btn-dark").click(function(){
    if ($('.btn-dark').html() == 'Dark Mode <i class="bi bi-moon dark-icon bg-yellow"></i>') {
        lightMode()
    } else {
        darkMode()
    }
});






$(".navhome").click(function(){
    resetActive()
    $('.navhome').removeClass('nav-non').addClass('nav-active')
    mainContaint(homepage)
    
})


$(".navexp").click(function(){
    resetActive()
    $('.navexp').removeClass('nav-non').addClass('nav-active')
    mainContaint(experiencespage)
})

$(".navpro").click(function(){
    resetActive()
    $('.navpro').removeClass('nav-non').addClass('nav-active')
    mainContaint(projectpage)
})

$(".navcon").click(function(){
    resetActive()
    $('.navcon').removeClass('nav-non').addClass('nav-active')
    mainContaint(contactspage)
})

const resetActive = ()=>{
    $('.nav').removeClass('nav-active')
    $('.nav').addClass('nav-non')
}


const mainContaint=(isi)=> $('.main-content').html(isi)






const homepage = `<div class="front mb-5">
<div class="desc  p-5">
    <h1 class="fw-bold">Muhammad Yusuf</h1>
    <p>Undergraduate Student of Institut Teknologi Indonesia. <br> Your life doesn't get better by chance. It gets better by a change..</p>
    <br><br>
    <a href="https://www.linkedin.com/in/muhammad-yusuf-957651240/" target="_blank" class="text-decoration-none"><i class="bi bi-linkedin"></i> My LinkedIn</a>
    </div>  
    </div>
    <div class="row p-2 core-values mb-5">
    <div class="col-md-4 mb-5">
    <img src="img/yusuf parker.jpeg" alt="Muhammad Yusuf" class="w-100">
    </div>
    <div class="col-md-8">
    <div class="row ps-2">
        <div class="col-md-6 card-values mb-3">
        <p class=" fw-bold p-2 icon-values"><i class="bi bi-person"></i></p>
        <p class="fw-bold">Professionalism</p>
        <p class="desc-values">
            Tetap lakukan yang terbaik yang kita mampu. karena dalam lomba lari, diam sama dengan mundur.
        </p>                     
        </div>
        <div class="col-md-6 card-values mb-3">
        
        <p class=" fw-bold p-2 icon-values"><i class="bi bi-lightbulb"></i></p>
        <p class="fw-bold">Innovation</p>
        <p class="desc-values">
            Membuat hal baru itu sulit, namun tidak lebih sulit daripada bertahan dalam situasi.
        </p>                     
        </div>
        <div class="col-md-6 card-values mb-3">
        
        <p class=" fw-bold p-2 icon-values"><i class="bi bi-book"></i></p>
        <p class="fw-bold">Learning Ability</p>
        <p class="desc-values">
            Hidup adalah belajar. Mau tidak mau, kita akan selalu belajar, baik dengan kerelaan hati ataupun paksaan dari lingkungan.
        </p>                     
        </div>
        <div class="col-md-6 card-values mb-3">
        
        <p class=" fw-bold p-2 icon-values"><i class="bi bi-people"></i></p>
        <p class="fw-bold">Team Work</p>
        <p class="desc-values">
            Hanya sedikit pekerjaan yang bisa dilakukan sendirian. Namun bersama-sama bisa kerjakan banyak hal.
        </p>                     
        </div>
    </div>
</div>
</div>`
const experiencespage = `<div class="container text-color mb-5 certificate">
<div class="row ">
  <div class="col-md-4 mb-4">
    <a href="img/c1.png" data-lightbox="example">
      <img src="img/c1.png" alt="" class="w-100">
    </a>
  </div>
  <div class="col-md-4 mb-4">
    <a href="img/c2.png" data-lightbox="example">
      <img src="img/c2.png" alt="" class="w-100">
    </a>
  </div>
  <div class="col-md-4 mb-4">
    <a href="img/c3.png" data-lightbox="example">
      <img src="img/c3.png" alt="" class="w-100">
    </a>
  </div>
  <div class="col-md-4 mb-4">
    <a href="img/c4.png" data-lightbox="example">
      <img src="img/c4.png" alt="" class="w-100">
    </a>
  </div>
  <div class="col-md-4">
    <a href="img/c5.png" data-lightbox="example">
      <img src="img/c5.png" alt="" class="w-100">
    </a>
  </div>
</div>
</div>`
const projectpage = `<div class="container">
<h3 class="text-color">Programing</h3>
<div class="row mt-4">
  <div class="col-md-3 bg-color1 p-3 shadow  mb-5 me-5">
    <div class="row">
      <img src="img/projek/programing/nazeera.store.png" alt="" class="w-100">
    </div>
    <div class="row text-color mt-2">
      <p>Nazeera Snack & Food</p>
    </div>
    <div class="row">
      <a href="https://www.nazeera.store/" target="_blank" class="btn-demo-project">Visit</a>
    </div>
  </div>
  <div class="col-md-3 bg-color1 p-3 shadow mb-5 me-5">
    <div class="row">
      <img src="img/projek/programing/QuranKu.png" alt="" class="w-100">
    </div>
    <div class="row text-color mt-2">
      <p>QuranKu Website</p>
    </div>
    <div class="row">
      <a href="https://yusufparker.github.io/QuranKu/" target="_blank" class="btn-demo-project">Visit</a>
    </div>
  </div>
  <div class="col-md-3 bg-color1 p-3 shadow mb-5">
    <div class="row">
      <img src="img/projek/programing/portfolio.png" alt="" class="w-100">
    </div>
    <div class="row text-color mt-2">
      <p>My Other Portfolio</p>
    </div>
    <div class="row">
      <a href="https://yusufparker.github.io/yusufparker.portfolio.github.io/" target="_blank" class="btn-demo-project">Visit</a>
    </div>
  </div>
</div>
<h3 class="text-color mt-4">Graphic Design</h3>
<div class="row mt-4 mb-5">
  <div class="col-md-4 mb-3">
    <img src="img/projek/graphic design/dicoding-event.jpg" alt="" class="w-100">
  </div>
  <div class="col-md-8">
    <div class="row">
      <div class="col-4">
        <img src="img/projek/graphic design/poster anti narkoba.jpg" alt="" class="w-100">
      </div>
      <div class="col-4">
        <img src="img/projek/graphic design/tugas agama_infografis tokoh ilmuan muslim.jpg" alt="" class="w-100">
      </div>
      <div class="col-4">
        <img src="img/projek/graphic design/ig_post.jpg" alt="" class="w-100">
      </div>
    </div>
    <div class="row mt-3">
      <div class="col mb-3">
        <img src="img/projek/graphic design/logo nazeera merah.png" alt="" class="w-100">
      </div>
    </div>
  </div>
</div>
</div>`
const contactspage = `<div class="container mb-3">
<h3 class="text-color">Get In Touch</h3>
<div class="row mt-5">
  <div class="col-md-5 mb-5">
    <div class="row">
      <div class="col-3"><img src="img/img2.jpg" alt="" class="w-100 rounded-circle"></div>
      <div class="col">
        <a href="https://www.instagram.com/yusuf_parker/" target="_blank"><i class="bi bi-instagram"></i> Instagram</a>
        <p class="text-color">yusuf_parker</p>
      </div>
    </div>
  </div>
  <div class="col-md-5">
    <div class="row">
      <div class="col-3"><img src="img/img-ig.jpg" alt="" class="w-100 rounded-circle"></div>
      <div class="col">
        <a href="https://www.tiktok.com/@yusufparker16" target="_blank"><i class="bi bi-tiktok"></i> Tiktok</a>
        <p class="text-color">yusufparker16</p>
      </div>
    </div>
  </div>
</div>
<div class="row mt-5">
  <div class="col-md-5 mb-5">
    <div class="row">
      <div class="col-3"><img src="img/yusuf parker.jpeg" alt="" class="w-100 rounded-circle"></div>
      <div class="col">
        <a href="https://www.youtube.com/channel/UC06dRTiFtYZY-6x-I0afnMA" target="_blank"><i class="bi bi-youtube"></i> Youtube</a>
        <p class="text-color">Yusuf Parker</p>
      </div>
    </div>
  </div>
  <div class="col-md-5">
    <div class="row">
      <div class="col-3"><img src="img/Muhammad Yusuf - Copy.jpg" alt="" class="w-100 rounded-circle"></div>
      <div class="col">
        <a href="mailto:mrmy160602@gmail.com" target="_blank"><i class="bi bi-envelope"></i> Email</a>
        <p class="text-color">mrmy160602@gmail.com</p>
      </div>
    </div>
  </div>
</div>
</div>`
const darkMode = ()=>{
    $('.btn-dark').html('Dark Mode <i class="bi bi-moon dark-icon bg-yellow"></i>');
    $('body').css('--bgColor1', '#1a1b1e');
    $('body').css('--bgColor2', '#141517');
    $('body').css('--textColor', 'rgb(217, 217, 217)');
    $('body').css('--shadowColor', '#3d3e42');
    $('body').css('--hoverColor', '#141517');
}

const lightMode = ()=>{
    $('.btn-dark').html('Light Mode <i class="bi bi-brightness-high dark-icon bg-grey"></i>');
    $('body').css('--bgColor1', '#ffff');
    $('body').css('--bgColor2', '#f1f1f1');
    $('body').css('--textColor', 'rgb(64, 64, 64)');
    $('body').css('--shadowColor', '#b9babd');
    $('body').css('--hoverColor', '#bcbbbb');
}
