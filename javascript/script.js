const menuIcon = document.getElementById('menu-icon');
const navUl = document.getElementById('nav-ul');

menuIcon.addEventListener('click', () => {
    navUl.classList.toggle('show');
});


function showContent(tab , element) {
    // Hide all content
    var contents = document.getElementsByClassName('content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
    }
    // Show the selected content
    document.getElementById(tab).classList.add('active');
}


document.AddEvemtListener('DOMcontentLoaded', () => {
    
    const menulist = document.querySelector('.menu-list');
    const navlinks = document.querySelevtor('.navlinks');

    menu.addEventListener('click', () =>{
        navlinks.classList.list('active');
    });
});

function submit(){
    return "Hello!";
    return "submitted";
}