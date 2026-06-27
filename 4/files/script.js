const GAS_URL = "https://script.google.com/macros/s/AKfycbzTDGLbmdojA5poBWuT8q7CopzQWZgUpUKqPTWHQTFDxyw9ay_JlR0X6if9DRv_-3DoxQ/exec";

document.getElementById("suggestionForm").addEventListener("submit", function(e){

    e.preventDefault();

    const fd = new FormData();

    fd.append("formId", "ساختمان مالی");
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
