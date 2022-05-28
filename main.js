function toggleMenu(){
    let nav = document.querySelector('.nav-bar');
    let togg = document.querySelector('.togg-nav');
    nav.classList.toggle('active');
    togg.classList.toggle('active');
}

function addNewPost(title, NewUpdate, imageUrl, content, id){
    console.log("adding");
    let Postid = id;
    //let WhereToAdd = document.querySelector('.post-container');
    let existingItem = document.querySelector(".post-container");
    existingItem.innerHTML += `
    <div class="test-PostContainer text" id="${id}">
  <div class="test-Post-title-container">
    <div class="test-post-title"><h1><center>${title}</center></h1></div>
    <div class="test-post-update"><h3><center>${NewUpdate}</center></h3></div>
  </div>
  <div class="test-post-content">${content}</div>
  <div class="test-post-separator"></div>
  <div class="test-post-image"><img src="${imageUrl}"></div>
</div>
    `;


}

window.onload = function(){
    console.log("loading");
    addNewPost("This is a very long title but not a lorem ipsum text","New","https://img1.freepng.es/20180419/coe/kisspng-ssc-mts-exam-test-computer-icons-educational-entra-test-paper-5ad91906de3671.5308049215241771589102.jpg","Not lorem ipsum text","1");
    addNewPost("plaraje/CController","Update","https://img1.freepng.es/20180419/coe/kisspng-ssc-mts-exam-test-computer-icons-educational-entra-test-paper-5ad91906de3671.5308049215241771589102.jpg","This is such us a long text that could be a lorem ipsum text, i could copy a lorem ipsum dolor sit amet text but im too lazy","2");
    addNewPost("Title?","Test","https://img1.freepng.es/20180419/coe/kisspng-ssc-mts-exam-test-computer-icons-educational-entra-test-paper-5ad91906de3671.5308049215241771589102.jpg","Lorem ipsum dolor sit amet consectetur adipiscing elit orci dis, malesuada nisi lacinia facilisi congue neque quis semper, in diam metus suspendisse blandit duis proin aliquet. Sociis non montes arcu cras fames tempor ut massa vehicula, ornare posuere ac class vestibulum tempus magnis purus auctor, platea nam praesent laoreet convallis feugiat parturient hac. Litora facilisis lectus sagittis interdum rutrum eget dignissim quisque pulvinar scelerisque a, per curabitur molestie himenaeos venenatis donec velit felis conubia integer quam, suscipit fusce tellus eleifend aptent phasellus enim leo etiam natoque. Eu mus aenean iaculis justo ullamcorper sem varius, nullam ligula sed nec gravida condimentum.","3");
    addNewPost("just testing","Custom","https://img1.freepng.es/20180419/coe/kisspng-ssc-mts-exam-test-computer-icons-educational-entra-test-paper-5ad91906de3671.5308049215241771589102.jpg","Oh nooo another lorem ipsum 😓","4");
    addNewPost("Tiny","why?","https://img1.freepng.es/20180419/coe/kisspng-ssc-mts-exam-test-computer-icons-educational-entra-test-paper-5ad91906de3671.5308049215241771589102.jpg","Want another lorem ipsum?","5");
    console.log("loaded");
}