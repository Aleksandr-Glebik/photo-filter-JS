const btns = document.querySelectorAll('.filter-btns__item')
const select = document.getElementById('filter-options')
const images = document.querySelectorAll('.filter-content img')

for (let btn of btns) {
    btn.onclick = function() {
        // console.log(this.dataset.filter);
        filterImage(this.dataset.filter);
    }
}

function filterImage(selection) {
    for (let img of images) {
        img.style.display = 'none'

        if (img.classList.contains(selection)) {
            setTimeout(() => {
                img.style.display = 'block'
            }, 100)
        }
    }

    for (let btn of btns) {
        if (btn.dataset.filter === selection) {
            btn.classList.add('active')
        } else {
            btn.classList.remove('active')
        }
    }

    select.value = selection
}

select.addEventListener('change', () => {
    filterImage(select.value)
})