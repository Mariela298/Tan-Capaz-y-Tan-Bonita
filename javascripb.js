function procesar(){
	electronico=document.getElementById("correo").value;
	sms=document.getElementById('mensaje').value
	
	if (electronico==''){
		alert('Requisitos vacios');
	}else(
		alert('Email*'+electronico+'Mensaje'+sms)

		)
          
}

