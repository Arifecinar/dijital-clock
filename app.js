function updateTime(){
    const now=new Date();
    const time=now.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit',second:'2-digit'});
    const date=now.toLocaleDateString([],{weekday:'long',year:'numeric',month:'long',day:'numeric'});
    document.getElementById('time').textContent=time;
    document.getElementById('date').textContent=date;
}
// Mod geçiş fonksiyonu
function toggleMode(){
    document.body.classList.toggle('dark-mode');
    document.querySelector('.clock').classList.toggle('dark-mode');
    const button=document.getElementById('toggle-mode');
    button.classList.toggle('dark-mode');
     
    if(document.body.classList.contains('dark-mode')){
        button.textContent='Switch To Light Mode';
    }else{
        button.textContent='Switch To Dark Mode';
    }
}

//Saat ve tarih Güncellemelerini sürekli yap
setInterval(updateTime,1000);

//Mod geçiş butonuna tıklama olayı ekle
document.getElementById('toggle-mode').addEventListener('click',toggleMode);

//İlk yükleme de saat ve tarihi güncelle
updateTime();