var today = new Date();
var year = today.getFullYear();
var el = document.getElementById('footer');
var msg = '<p>' +' Anno: '+ year +'</p>';
msg += '<p>' +'Giorno settimana (0-6) : ' + today.getDay() +'</p>';
msg += '<p>' +'Ore e minuti : ' + today.getHours()+':'+today.getMinutes()+'</p>';
msg += '<p>' +'getDate puro  : ' + today.getDate() +'</p>';
msg += '<p>' +'Data  : ' + today.toDateString() +'</p>';

el.innerHTML = msg;