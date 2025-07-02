const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const second = document.getElementById('second')
const tanggal = document.getElementById('tanggal')
const bulan = document.getElementById('bulan')
const year = document.getElementById('year')
const btn = document.getElementById('btn')



setInterval(() => {
   const date = new Date()
   const nowHours = date.getHours()
   const nowMinutes = date.getMinutes()
   const nowSecond = date.getSeconds()
   const nowTanggal = date.getDate()
   const nowMoonth   = date.getMonth()
   const nowYear   = date.getFullYear()


   const a = 10

   nowMinutes < a ? minutes.innerHTML=`0${nowMinutes}` : minutes.innerHTML=`${nowMinutes}`
   nowSecond < a ? second.innerHTML=`0${nowSecond}` : second.innerHTML=`${nowSecond}`
   nowHours < a ? hours.innerHTML=`0${nowHours}` : hours.innerHTML=`${nowHours}`
   nowTanggal < a ? tanggal.innerHTML=`0${nowTanggal}/` : tanggal.innerHTML=`${nowTanggal}/`
   nowMoonth < a ? bulan.innerHTML=`0${nowMoonth}/` : bulan.innerHTML=`${nowMoonth}/`


   year.innerHTML = `${nowYear}`
})


const enableDarkmode = () => {
   document.body.classList.add('darkmode')
   localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
   document.body.classList.remove('darkmode')
   localStorage.setItem('darkmode', null)
}


btn.addEventListener('click', () => {
   let darkmode = localStorage.getItem('darkmode')
   darkmode === 'active' ? disableDarkmode() : enableDarkmode()
})