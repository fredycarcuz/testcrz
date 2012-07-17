// Validation script for zipcode submit
function bwvalidateForm(bwform) {
    zipValue = bwform.zip.value;
    prodValue = bwform.prodid.value;
    if (prodValue!="0") {
    if (isZipcode(zipValue)) {
        return true;
    } else {
        alert("To proceed please enter a valid ZIP Code.");
		bwform.zip.value = "";
		bwform.zip.select();
        return false
    }
    }else{ alert('To proceed please choose Insurance Type.');
		bwform.zip.value = "";
		bwform.zip.select();
    return false}
}
function isZipcode(value) {
    var exp_zipcode = /^[0-9]{5}$/;
    return exp_zipcode.test(value);
}
function validateCurrentForm(currentForm) {
    var elementsInputs;
    elementsInputs = currentForm.getElementsByTagName("input");
    for (var intCounter = 0; intCounter < elementsInputs.length; intCounter++) {
        if (elementsInputs[intCounter].name == "zip") {
            if (!(isZipcode(elementsInputs[intCounter].value))) {
                alert("To proceed please enter a valid ZIP Code.");
                elementsInputs[intCounter].focus();
                return false;
            }
        } 
		else if (currentForm.prodid.value == "0") {
				alert("To proceed please select an insurance type");
				return false;
		}
    }
    return true;
}
function clearZipValue(zipInput) {
    if (isZipcode(zipInput.value)) {
        zipInput.select();
    } else {
        zipInput.value = '';
    }
}

function getZipValue(zipInput) {
    if (!isZipcode(zipInput.value)) {
        zipInput.value = "ZIP Code...";
    }
}