function goForward() {
    var checkEl = document.getElementById("step1");
	var updateEl = document.getElementById("step2");
	var updateLeft = document.getElementById("left");
	var updateRight= document.getElementById("right");
    if (checkEl.style.display === "inline") {
        checkEl.style.display = "none";
		updateEl.style.display = "inline";
		updateLeft.style.display = "inline";
    	return;
    }
	checkEl = document.getElementById("step2");
    if (checkEl.style.display === "inline") {
		updateEl = document.getElementById("step3");
        checkEl.style.display = "none";
		updateEl.style.display = "inline";
    	return;
    }
	checkEl = document.getElementById("step3");
    if (checkEl.style.display === "inline") {
		updateEl = document.getElementById("step4");
        checkEl.style.display = "none";
		updateEl.style.display = "inline";
    	return;
    }
	checkEl = document.getElementById("step4");
    if (checkEl.style.display === "inline") {
        updateEl = document.getElementById("step5");
        checkEl.style.display = "none";
		updateEl.style.display = "inline";
		updateRight.style.display = "none";
    	return;
    }
}

function goBack() {
    var checkEl = document.getElementById("step2");
	var updateEl = document.getElementById("step1");
	var updateLeft = document.getElementById("left");
	var updateRight= document.getElementById("right");
    if (checkEl.style.display === "inline") {
        checkEl.style.display = "none";
		updateEl.style.display = "inline";
		updateLeft.style.display = "none";
    	return;
    }
	checkEl = document.getElementById("step3");
    if (checkEl.style.display === "inline") {
		updateEl = document.getElementById("step2");
        checkEl.style.display = "none";
		updateEl.style.display = "inline";
    	return;
    }
	checkEl = document.getElementById("step4");
    if (checkEl.style.display === "inline") {
		updateEl = document.getElementById("step3");
        checkEl.style.display = "none";
		updateEl.style.display = "inline";
    	return;
    }
	checkEl = document.getElementById("step5");
	if (checkEl.style.display === "inline") {
		updateEl = document.getElementById("step4");
        checkEl.style.display = "none";
		updateEl.style.display = "inline";
		updateRight.style.display = "inline";
    	return;
    }
}