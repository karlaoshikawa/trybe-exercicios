const header = document.getElementById('header-container')
header.style.backgroundColor = '#52DEE5';

const emergency = document.getElementsByClassName('emergency-tasks')[0];
emergency.style.backgroundColor = '#7C7C7C';

const emergencyHeader = document.querySelectorAll('.emergency-tasks h3 ');
for (let index = 0; index < emergencyHeader.length; index+= 1) {
  emergencyHeader[index].style.backgroundColor = '#52DEE5'
}

const noEmergency = document.querySelector('.no-emergency-tasks'); 
noEmergency.style.backgroundColor = '#383D3B';

const noEmergencyHeader = document.querySelectorAll('.no-emergency-tasks h3 ');
for (let index = 0; index < emergencyHeader.length; index+= 1) {
  noEmergencyHeader[index].style.backgroundColor = '#92DCE5'
}

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = '#52DEE5';