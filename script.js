const fragment = new DocumentFragment();
const templ= document.querySelector('#templ')
const pintaMapa = document.querySelector('#mapa')
const pintaIp= document.querySelector('.pintaIp')
const planoIP= []
const arrayArt= []
const tplPaintData= document.querySelector('#tplPaintData');
const fragmentTplPData= new DocumentFragment();
const dataPaint= document.querySelector('#DataPaint')

  
//Utilizando Fragment con Template--------------------------------------
  for (let i=0; i<255; i++){
    planoIP.push(i)
  }
  planoIP.forEach((el) => {
  const clone = templ.content.cloneNode(true)
  clone.querySelector('div').id= el;
  clone.querySelector('a').textContent= el;
  fragment.appendChild(clone)
})

pintaMapa.appendChild(fragment)

//Formulario ingreso articulo a Tablero-------------------------------------------

const formIngreso = document.querySelector('#formIngreso')
const dispositivo = document.querySelector('#dispositivo')
const ip = document.querySelector('#ip')
const servicio = document.querySelector('#servicio')

formIngreso.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    const Art= {
      tipo: dispositivo.value,
      ip: parseInt(ip.value),
      servicio: servicio.value
    }
    arrayArt.push(Art)

 //console.log(clone.pintaIp.style)
   
    pintaArrayArt()
    console.log(arrayArt)
    pintaData()
  })
  
// pinta Articulos en tablero
  
  const pintaArrayArt= () => {
    
    arrayArt.forEach((ele) => {
      if(ele.tipo === 'pc') { document.getElementById(ele.ip).style.backgroundColor= 'lightgreen' }
      if(ele.tipo === 'impresora') { document.getElementById(ele.ip).style.backgroundColor= '#fe0000' }
      if(ele.tipo === 'router') { document.getElementById(ele.ip).style.backgroundColor= 'lightblue' }
      if(ele.tipo === 'remoto') { document.getElementById(ele.ip).style.backgroundColor= 'lightyellow' }
      if(ele.tipo === 'servidor') { document.getElementById(ele.ip).style.backgroundColor= '#ffa420' }
      if(ele.tipo === 'reservadas') { document.getElementById(ele.ip).style.backgroundColor= 'lightpink' }
      if(ele.tipo === 'bloqueadas') { document.getElementById(ele.ip).style.backgroundColor= 'grey' }
   
    
  })
}

// pinta articulo en buscador
const pintaData = () => {
  dataPaint.textContent= "";

  arrayArt.forEach(ele =>{
    const clone= tplPaintData.content.cloneNode(true)
    clone.querySelector('#PDataDispo').textContent= ele.tipo
    clone.querySelector('#PDataIp').textContent= ele.ip
    clone.querySelector('#PDataServ').textContent= ele.servicio
    fragmentTplPData.appendChild(clone)
  })

dataPaint.appendChild(fragmentTplPData)
}

