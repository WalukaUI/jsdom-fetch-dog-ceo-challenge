//console.log('%c HI', 'color: firebrick')
function fetchImg() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(res => res.json())
        .then(json => {
            addingImage(json)
        })
}

function addingImage(images) {
    const imgId = document.getElementById('dog-image-container')
    let oneByone = images.message
    oneByone.forEach(image => {
        let newImg = document.createElement('img')
        imgId.appendChild(newImg)
        newImg.src = image
        newImg.className = 'dogs'
    });
}

function fetchingBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(dog => putInUl(dog))
}

const uL= document.querySelector('#dog-breeds');


function putInUl(dogname) {
    let alldogs = dogname.message
    let selection = document.querySelector('select')


    selection.addEventListener('change', function (e) {
        let selectedValue = selection.options[selection.selectedIndex].value
        let classA=document.querySelectorAll('.strating')

        for (let x in alldogs) {
            let firstCharctor = x.charAt(0)


            if (selectedValue === "a" && firstCharctor === "a") {

                let newIl = document.createElement('li')
                uL.appendChild(newIl)
                newIl.innerHTML = x
                newIl.className = 'strating'


            } else if (selectedValue === "b" && firstCharctor === "b") {

                let newIl = document.createElement('li')
                uL.appendChild(newIl)
                newIl.innerHTML = x
                newIl.className = 'strating'

            } else if (selectedValue === "c" && firstCharctor === "c") {

                let newIl = document.createElement('li')
                uL.appendChild(newIl)
                newIl.innerHTML = x
                newIl.className = 'strating'


            } else if (selectedValue === "d" && firstCharctor === "d") {

                let newIl = document.createElement('li')
                uL.appendChild(newIl)
                newIl.innerHTML = x
                newIl.className = 'strating'
            }

        }

    })
}

const dogClass = document.getElementsByClassName('dogslist')
uL.addEventListener('click', function () {
    for (let n = 0; n < dogClass.length; n++) {
        dogClass[n].onclick = function () {
            this.style.color = 'red';
        }
    }
})

document.addEventListener('DOMContentLoaded', function () {
    fetchImg();
    fetchingBreeds();
});
