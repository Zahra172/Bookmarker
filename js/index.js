var siteNameInput = document.getElementById("bookmark");
var siteUrlInput = document.getElementById("url");
var siteContainer;

if (localStorage.getItem("site") === null) {
  siteContainer = [];
} else {
  siteContainer = JSON.parse(localStorage.getItem("site"));
  displaySites();
}

function add() {
  var site = {
    siteName: siteNameInput.value,
    siteUrl: siteUrlInput.value,
  };
 

    if(siteNameInput.value === "" || siteUrlInput.value ==="" || document.getElementById("bookmark").classList.contains("is-invalid") || document.getElementById("url").classList.contains("is-invalid")){
        console.log("hhhhhh");

        removeLyar.classList.add("d-flex");

    }else{

    siteContainer.push(site);

    clearForm();
    displaySites();
    localStorage.setItem("site", JSON.stringify(siteContainer));
    }

    //   if (
//     document.getElementById("bookmark").classList.contains("is-valid") &&
//     document.getElementById("url").classList.contains("is-invalid")
//   ) {
    
//   } else {
//     popup += `<div class="bg-white  rounded-2 p-5  m-auto ">
//             <div class="one d-flex justify-content-between">
//                 <div class="right d-flex">
//                     <div class="bg-danger rounded-circle color me-2"></div>
//                     <div class="bg-warning rounded-circle color me-2"></div>
//                     <div class="bg-success rounded-circle color me-2"></div>


//                 </div>

//                 <div class="left">
//                     <button onclick="none();"  class="border-0 bg-white"><i class="fa-solid fa-xmark fa-2xl"></i></button>
//                 </div>
//             </div>
//             <div class="">
//                 <h4 class="fw-bold pt-5 text-start">Site Name or Url is not valid, Please follow the rules below :</h4>
//             </div>
//             <div class="text-start">
//                 <p class="h4 pt-4"><i class="fa-regular fa-circle-right" style="color: #c61010;"></i> Site name must contain at
//                     least 3 characters</p>
//                 <p class="h4 pt-2"><i class="fa-regular fa-circle-right" style="color: #c61010;"></i> Site URL must be a valid one</p>
//             </div>

//         </div>`;
//     document.querySelector("#remove").innerHTML = popup;
//   }
}

function clearForm() {
  siteNameInput.value = null;
  siteUrlInput.value = null;
}

function displaySites() {
  var cartona = "";
  for (let i = 0; i < siteContainer.length; i++) {
    cartona += `<div class="col-md-3 bg-light">
       <div class="py-3"><h5 class="fw-bolder">${siteContainer[i].siteName}</h5></div>
       
   </div>
   <div class="col-md-3 bg-light">
       <div  class="py-3"><h5 class="fw-bolder">${siteContainer[i].siteUrl}</h5></div>
       
   </div>
   <div class="col-md-3 bg-light">
       <div  class="py-3"><button class="btn visit"><i class="fa-solid fa-eye pe-2"></i>Visit</button> </div>
       
   </div>
   <div class="col-md-3 bg-light">
       <div  class="py-3"><button onclick="deleteSite(${i});"  class="btn btn-danger "  ><i class="fa-solid fa-trash-alt pe-2"></i>Delete</button></div>
       
   </div>`;
  }
  document.getElementById("cartona").innerHTML = cartona;
}

function deleteSite(deletedIndex) {
  siteContainer.splice(deletedIndex, 1);
  localStorage.setItem("site", JSON.stringify(siteContainer));
  displaySites();
}

function validation(element) {
  var regix = {
    bookmark: /^[a-z1-9]{2,}$/,
    url: /^www\.[a-z0-9]{1,}\.com$/,
  };

  if (regix[element.id].test(element.value) === true) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
  }
}
var removeLyar = document.getElementById("remove");

function none() {
  removeLyar.classList.add("d-none");
}
