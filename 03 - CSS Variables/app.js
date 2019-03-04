window.onload = function(){

	const inputs = document.querySelectorAll('.controls input');

	console.log('hitting app file');
	console.log(inputs);

	function handleUpdate() {
		
		//dataset is an object containing all the data- attributes in the element that has been selected.
		const suffix = this.dataset.sizing || "";
		document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
	}

		
	inputs.forEach(input => input.addEventListener('change', handleUpdate));
	inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

}