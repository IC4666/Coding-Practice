// Animate each section

let sections = document.querySelectorAll('section');
let nav = document.querySelectorAll('.nav-placeholder a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 200;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {

            sec.classList.add('show-animation')
            
            nav.forEach(link => {
                link.classList.remove('clicked'); // Remove clicked class from all
                // Check if the link corresponds to the current section
                if (link.getAttribute('href') === `#${sec.id}`) {
                    link.classList.add('clicked'); // Add clicked class to the active link
                }
            });
                    
           
        }
        else {
            sec.classList.remove('show-animation')
        }

    })
}


// nav.forEach(link => {
//     nav.addEventListener('click', function() {
//         nav.forEach(l => l.classList.remove('clicked'));
//         this.classList.add('clicked');
        
//     });
// });
