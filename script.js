function volume_sphere() {
    //Write your code here
	event.preventDefault();
	let r = parseFloat(document.getElementById("radius").value);

	let v = document.getElementById("volume");
	if(isNaN(r) || r<0)
	{
		v.value = NaN;
		return;
	}
	let volume = (4/3) * Math.PI * Math.pow(r, 3);
		

	v.value = volume;
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
