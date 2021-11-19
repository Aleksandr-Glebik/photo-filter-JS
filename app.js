const btns = document.querySelectorAll('.filter-btns__item')
const images = document.querySelectorAll('.filter-content img')

for (let btn of btns) {
    btn.onclick = function() {
        // console.log(this.dataset.filter);
        filterImage(this.dataset.filter);
    }
}

function filterImage(selection) {
    for (let img of images) {
        if (!img.classList.contains(selection)) {
            img.style.display = 'none'
        } else {
            img.style.display = 'block'
        }
    }

    for (let btn of btns) {
        if (btn.dataset.filter === selection) {
            btn.classList.add('active')
        } else {
            btn.classList.remove('active')
        }
    }
}