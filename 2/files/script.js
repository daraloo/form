const GAS_URL = "https://script.google.com/macros/s/AKfycbwEXoKEBLxbcJmdz0MkJXhTYr1uyZYUDge7mJO_QHa0HB0I5Q6Mu6S7ud2VP-OM_ynEFQ/exec";

document.getElementById("suggestionForm").addEventListener("submit", function(e){

    e.preventDefault();

    const fd = new FormData();

    fd.append("formId", "ساختمان اداری");
    fd.append("type", document.getElementById("type").value);
    fd.append("subject", document.getElementById("subject").value);
    fd.append("description", document.getElementById("description").value);
    fd.append("suggestion", document.getElementById("suggestion").value);
    fd.append("needAnswer", document.getElementById("needAnswer").value);

    const rate = document.querySelector('input[name="rate"]:checked');
    fd.append("rate", rate ? rate.value : "");

    fetch(GAS_URL,{
        method:"POST",
        body:fd
    })
    .then(r=>r.text())
    .then(t=>{
        alert("ثبت شد");
        document.getElementById("suggestionForm").reset();
    })
    .catch(err=>{
        console.log(err);
        alert("خطا");
    });

});
