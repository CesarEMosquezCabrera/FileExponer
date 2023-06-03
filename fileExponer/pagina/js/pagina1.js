function UNarchivo() {
    var dd="llllllllllllllll"
    const a=document.getElementById('primerInput')
    a.addEventListener('change',(e)=>{
        dd=e
        console.log(dd)
    })
}
function MOREarchivos() {
    const a=document.getElementById('primerInput2')
    a.addEventListener('change',(e)=>{
        console.log(e) 
    })
}
function LectorDocumento(){
    const file=document.getElementById('lector1')
    file.addEventListener('change',(e)=>{
        const file2=e.target.files[0]
        const lector=new FileReader()
        lector.readAsText(file2)
        lector.addEventListener('load',(e)=>{
            console.log(e)
            text.textContent=e.target.result
        })
    })
}
function LectorIMG(){
    const file=document.getElementById('lector2')
    file.addEventListener('change',(e)=>{
        const file2=e.target.files[0]
        const lector=new FileReader()
        lector.readAsDataURL(file2)
        lector.addEventListener('load',(e)=>{
            console.log(e)
            console.log(e.target.result)
            img.setAttribute('src',e.target.result)
            img.setAttribute('width','700px')
        })
    })
}
function propiedades(){


    var Parapropiedade=document.getElementById('ParaPropiedades')
    var contenido=document.createElement('ul')

    const file=document.getElementById('propiFile')
    file.addEventListener('change',(e)=>{
        console.log(e)
        // var file=e.target.files[0]

        // contenido.innerHTML+= "Nombre: " + file.name + "<br>";
        // contenido.innerHTML+= "Tamaño: " + file.size + "bytes <br>";
        // contenido.innerHTML+= "Tipo: " + file.type + "<br>";
        // contenido.innerHTML+= "Ultima fecha de modificacion: " + file.lastModifiedDate;
        var files=e.target.files

        contenido.innerHTML="";
        var aux=0
        for (const i of files) {
            contenido.innerHTML+= "<li>"+ "Archivo numero: " + (aux+=1) + "<br>";
            contenido.innerHTML+= "<ul>"+ "<li>"+ "Nombre: " + i.name + "<br>";
            contenido.innerHTML+= "<ul>"+ "<li>"+ "Tamaño: " + i.size + "bytes <br>";
            contenido.innerHTML+= "<ul>"+ "<li>"+ "Tipo: " + i.type + "<br>";
            contenido.innerHTML+= "<ul>"+ "<li>"+ "Ultima fecha de modificacion: " + i.lastModifiedDate+"<br><br>";
            // contenido.innerHTML+= "Nombre: " + i.name + "<br>"+"Tamaño: " + i.size + "bytes <br>"+"Tipo: " + i.type + "<br>"+"Ultima fecha de modificacion: " + i.lastModifiedDate+ "<br><br>";
        }

        Parapropiedade.appendChild(contenido)
    })
}

function Looaded(){
    // const lector=FileReader()

    const file=document.getElementById('LoadedFile')
    file.addEventListener('change',(e)=>{
        const LaFile=e.target.files[0]
        const lector=new FileReader()
        
        
        lector.addEventListener('loadstart',(e)=>{
            alert('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        })
        lector.readAsDataURL(LaFile)
    })
}

// const MultipleE=document.getElementById('MultipleFile')
// MultipleE.addEventListener('error',(e)=>{
//     alert("Que cabron")
// })


// const Onefile=document.getElementById('OneFile')
// Onefile.addEventListener('change',(e)=>{
//     console.log(e)
//     console.log(e.target.files[0].size)

//     var Leer=new FileReader()

// })

// const Multiple=document.getElementById('MultipleFile')
// Multiple.addEventListener('change',(e)=>{
//     console.log(e)
//     console.log(e.target.files[0].size)
// })

