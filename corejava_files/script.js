var selectedRow = null


function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}


function readFormData() {
    var formData = {};
    formData["fname"] = document.getElementById("fname").value;
    formData["fmail"] = document.getElementById("fmail").value;
    formData["fsal"] = document.getElementById("fsal").value;
    formData["fcity"] = document.getElementById("fcity").value;
    console.log(formData);
    return formData;
}


function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    console.log(newRow);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.fmail;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.fsal;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.fcity;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)" style="cursor: pointer;" class="btn btn-primary">Edit</a>
                       <a onClick="onDelete(this)" style="cursor: pointer;" class="btn btn-danger">Delete</a>`;
}

function resetForm() {
    document.getElementById("fname").value = "";
    document.getElementById("fmail").value = "";
    document.getElementById("fsal").value = "";
    document.getElementById("fcity").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("fmail").value = selectedRow.cells[1].innerHTML;
    document.getElementById("fsal").value = selectedRow.cells[2].innerHTML;
    document.getElementById("fcity").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fname;
    selectedRow.cells[1].innerHTML = formData.fmail;
    selectedRow.cells[2].innerHTML = formData.fsal;
    selectedRow.cells[3].innerHTML = formData.ffcity;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fname").value == "") {
        isValid = false;
        //document.getElementById("fnameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        // if (!document.getElementById("fnameValidationError").classList.contains("hide")) {
        //     document.getElementById("fnameValidationError").classList.add("hide");
        // }
    }
    console.log("successfull");
    return isValid;
}