let menuBtn = document.getElementById('menu-btn');
menuBtn.addEventListener('click', toggleSidebar);

let sidebar = document.querySelector('.sidebar-menu');

function toggleSidebar(){
    sidebar.classList.add('active');

}

let closeBtn = document.getElementById('menu-cls-btn');
closeBtn.addEventListener('click', closeSidebar);

function closeSidebar (){
    sidebar.classList.remove('active')
}