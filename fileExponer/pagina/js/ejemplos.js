const fileInput = document.getElementById('file')
const images = document.getElementById('images')

fileInput.addEventListener('change', (e) => {
            const files = e.target.files
            const fragment = document.createDocumentFragment()
            for (const file of files) {
                const fileReader = new FileReader()
                const img = document.createElement('IMG')
                fileReader.readAsDataURL(file)
                fileReader.addEventListener('load', (e) => {
                    img.setAttribute('src', e.target.result)
                    img.setAttribute('width', '500px')
                    img.setAttribute('class','uno')
                })
                fragment.appendChild(img)
            }
            images.appendChild(fragment)

            var CambiarClase = document.getElementsByClassName("IMGbox");
            for(var i = 0; i < CambiarClase.length; i++)
                CambiarClase[i].className += " LasImagenes";
})

// PARA LA BARRAAAAAAAAAAAAAAAAAAAAA
const fileInput1 = document.getElementById('file1')
const progress = document.getElementById('progress')

const root = document.documentElement

fileInput1.addEventListener('change', (e) => {
    const file = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.addEventListener('progress', (e) => {
        root.style.setProperty('--bar-width', Number.parseInt(e.loaded * 100 / e.total) + '%')
    })

    fileReader.addEventListener('loadend', () => {
        root.style.setProperty('--bar-width', '100%')
    })
})