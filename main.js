let description = document.getElementById('description');
let dc_img = document.querySelectorAll('#descr-img img');

let title = document.getElementById('dc-title');

let p = document.getElementById('descr-p');

let road_map = document.getElementById('road-map');
let road_line = document.getElementById('road-line');

window.onscroll = function() {

    if (window.scrollY >= description.offsetTop - 300) {
        dc_img.forEach((img) => {
            img.style.opacity = '1'
        })

        title.style.opacity = '1'
        p.style.opacity = '1'

    }

    // if (window.scrollY > road_map.offsetTop) {
    //     h = road_line.offsetHeight + 60;
    //     road_line.style.height = h + 'px'
    //     console.log(window.scrollY)
    // }
}