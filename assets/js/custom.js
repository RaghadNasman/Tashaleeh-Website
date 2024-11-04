// header js  

// search input in heaader 
document.addEventListener("DOMContentLoaded", function() {
    const searchBox = document.getElementById("input-box");
    const resultList = document.querySelector(".result-box ul");
    const resultItems = document.querySelectorAll(".result-box ul li");

    // Function to show the result list
    function showResults() {
        resultList.classList.add("open-s-ul");
    }

    // Function to hide the result list
    function hideResults() {
        resultList.classList.remove("open-s-ul");
    }

    // Function to fill search box with selected item text
    function fillSearchBox(text) {
        searchBox.value = text;
    }

    // Event listener to show results when search box is clicked
    searchBox.addEventListener("click", function(event) {
        showResults();
        event.stopPropagation();
    });

    // Event listener to hide results when clicking outside the search box
    document.addEventListener("click", function(event) {
        if (!searchBox.contains(event.target) && event.target !== resultList) {
            hideResults();
        }
    });

    // Event listener to handle pressing the enter key
    searchBox.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            hideResults();
        }
    });

    // Event listener to handle clicking on result items
    resultItems.forEach(function(item) {
        item.addEventListener("click", function() {
            const selectedItemText = item.textContent.trim();
            fillSearchBox(selectedItemText);
            hideResults();
        });
    });
});






// drop with img ==================================================

    document.addEventListener('DOMContentLoaded', () => {
        initializeDropdowns();
    });
    
    function initializeDropdowns() {
        document.querySelectorAll('.drop-select').forEach(dropdown => {
            const dropdownButton = dropdown.querySelector('.drop-button');
            const dropdownContent = dropdown.querySelector('.drop-content');
            const dropdownItems = dropdown.querySelectorAll('.drop-item');
            const selectedImage = dropdown.querySelector('#selected-image');
            const selectedText = dropdown.querySelector('#selected-text');
    
            dropdownButton.addEventListener('click', function(event) {
                toggleDropdown(dropdown);
                event.stopPropagation();
            });
    
            dropdownItems.forEach(item => {
                item.addEventListener('click', function() {
                    const newSrc = this.querySelector('img').src;
                    const newText = this.getAttribute('data-text');
                    selectedImage.src = newSrc;
                    selectedText.textContent = newText;
                    dropdownContent.classList.remove('show');
                });
            });
    
            document.addEventListener('click', function() {
                dropdownContent.classList.remove('show');
            });
        });
    }
    
    function toggleDropdown(dropdown) {
        const dropdownContent = dropdown.querySelector('.drop-content');
        dropdownContent.classList.toggle('show');
        closeOtherDropdowns(dropdown);
    }
    
    function closeOtherDropdowns(currentDropdown) {
        document.querySelectorAll('.drop-select').forEach(dropdown => {
            if (dropdown !== currentDropdown) {
                dropdown.querySelector('.drop-content').classList.remove('show');
            }
        });
    }
  



// try {
//     let lastActivePartsCarBtn = "externalPartsCarBtn";
//     const mapImage = document.getElementById("mapImage");
//     externalPartsCarBtn.addEventListener("click", () => {
//       if (lastActivePartsCarBtn == "externalPartsCarBtn") return;
//       mapImage.innerHTML = `            
//       <img src="assets/images/Image5.png" usemap="#image-map" class=" maparea" style="height: 336px;">

//       <map name="image-map">
//         <area alt="" class="selectArea" title="product1"
//           coords="72,66,223,56,253,57,268,68,266,128,256,140,224,143,128,139,77,130" shape="poly">
//         <area alt="" class="selectArea" title="product2"
//           coords="47,140,49,118,50,78,44,54,26,54,19,71,20,130,24,143" shape="poly">
//         <area alt="" class="selectArea" title="product3" coords="20,184,21,193,30,176,74,172,73,204,31,196"
//           shape="poly">
//         <area alt="" class="selectArea" title="product4" coords="84,173,154,172,145,204,83,206" shape="poly">
//         <area alt="" class="selectArea" title="product5" coords="244,175,308,174,318,200,272,202,242,201"
//           shape="poly">
//         <area alt="" class="selectArea" title="product6" coords="83,14,143,9,156,40,84,42" shape="poly">
//         <area alt="" class="selectArea" title="product7" coords="20,25,35,18,55,25,67,7,74,8,78,41,34,40"
//           shape="poly">
//         <area alt="" class="selectArea" title="product8" coords="240,10,272,10,287,21,302,16,312,12,309,34,244,36"
//           shape="poly">
//         <area alt="" class="selectArea" title="product9" coords="302,54,316,57,321,98,318,136,304,143,298,125"
//           shape="poly">
//         <area alt="" class="selectArea" title="product10" coords="273,49,290,46,290,59" shape="poly">
//         <area alt="" class="selectArea" title="product11" coords="274,154,288,135,292,151" shape="poly">
//         <area alt="" class="selectArea" title="product12" coords="278,71,286,71,292,95,286,124,276,121"
//           shape="poly">
//         <area alt="" class="selectArea" title="product13" coords="164,4,192,6,224,7,232,30,223,48,157,43"
//           shape="poly">
//         <area alt="" class="selectArea" title="product14" coords="161,172,225,173,233,192,222,211,192,210,160,203"
//           shape="poly">
//         <area alt="" class="selectArea" title="product15"
//           coords="172,147,191,148,202,153,251,153,250,159,203,160,189,162,170,161" shape="poly">
//         <area alt="" class="selectArea" title="product16" coords="68,135,66,152,54,134" shape="poly">
//         <area alt="" class="selectArea" title="product17" coords="69,45,70,54,64,60,54,59" shape="poly">
//         <area alt="" class="selectArea" title="product18" coords="150,157,13" shape="circle">
//         <area alt="" class="selectArea" title="product19" coords="119,144,117,157,124,168,128,143" shape="poly">
//         <area alt="" class="selectArea" title="product20" coords="90,56,95,48,85,46" shape="poly">
//         <area alt="" class="selectArea" title="product21" coords="94,139,95,150,84,148" shape="poly">
//         <area alt="" class="selectArea" title="product22" coords="108,148,109,162,99,162" shape="poly">
//         <area alt="" class="selectArea" title="product23" coords="36,148,46,156" shape="rect">
//         <area alt="" class="selectArea" title="product24" coords="40,42,46,51" shape="rect">
//       </map>`;
//       $(function () {
//         $(".maparea").maphilight();
//       });
//       selectAreaFunction();
//       partsFunction(externalPartsCarBtn, "externalPartsCarBtn");
//     });
//     interiorPartsCarBtn.addEventListener("click", () => {
//       if (lastActivePartsCarBtn == "interiorPartsCarBtn") return;
//       mapImage.innerHTML = `<img src="assets/images/Image1.png" usemap="#image-map" class=" maparea" style="height: 336px;">

//       <map name="image-map">
//         <area alt="" title="product1" class="selectArea" coords="70,182,16" shape="circle">
//         <area alt="" title="product2" class="selectArea" coords="70,27,17" shape="circle">
//         <area alt="" title="product3" class="selectArea" coords="253,33,16" shape="circle">
//         <area alt="" title="product4" class="selectArea" coords="256,179,18" shape="circle">
//         <area alt="" title="product5" class="selectArea" coords="17,148,22,165,32,160,33,150" shape="poly">
//         <area alt="" title="product6" class="selectArea" coords="19,46,30,52,31,60,31,67,15,65" shape="poly">
//         <area alt="" title="product7" class="selectArea" coords="302,144,296,165,288,164,291,150" shape="poly">
//         <area alt="" title="product8" class="selectArea" coords="298,65,294,45,280,42,288,61" shape="poly">
//         <area alt="" title="product9" class="selectArea" coords="293,88,330,133" shape="rect">
//         <area alt="" title="product10" class="selectArea" coords="12,96,57,131" shape="rect">
//         <area alt="" title="product11" class="selectArea" coords="96,74,116,66,135,68,146,78,145,137,136,146,115,144,93,138"
//           shape="poly">
//         <area alt="" title="product12" class="selectArea" coords="61,70,70,68,76,74,75,107,77,135,73,144,61,141"
//           shape="poly">
//         <area alt="" title="product13" class="selectArea" coords="106,193,127,163,147,163,146,195" shape="poly">
//         <area alt="" title="product14" class="selectArea" coords="167,191,176,170,188,160,215,161,209,196" shape="poly">
//         <area alt="" title="product15" class="selectArea" coords="110,23,150,27,150,53,128,57" shape="poly">
//         <area alt="" title="product16" class="selectArea" coords="164,30,208,32,211,59,176,60" shape="poly">
//         <area alt="" title="product17" class="selectArea" coords="155,75,170,70,191,71,198,78,196,94,176,98,153,92"
//           shape="poly">
//         <area alt="" title="product18" class="selectArea" coords="152,126,166,118,194,119,196,148,170,147,153,145"
//           shape="poly">
//         <area alt="" title="product19" class="selectArea" coords="152,104,201,103,200,118,154,114" shape="poly">
//         <area alt="" title="product20"
// class="selectArea"                 coords="262,65,259,79,285,89,288,131,263,133,264,147,248,143,245,127,234,124,232,87" shape="poly">
//         <area alt="" title="product21" class="selectArea" coords="31,91,47,93,50,82,59,77,60,61,144,66,34,33" shape="poly">
//         <area alt="" title="product22" class="selectArea" coords="226,44,11" shape="circle">
//         <area alt="" title="product23" class="selectArea" coords="222,68,243,64,242,74,225,74" shape="poly">
//         <area alt="" title="product24" class="selectArea" coords="231,139,242,151" shape="rect">
//         <area alt="" title="product25" class="selectArea" coords="232,185,220,168" shape="rect">
//         <area alt="" title="product26" class="selectArea" coords="158,149,226,160" shape="rect">
//         <area alt="" title="product27" class="selectArea" coords="98,152,122,170" shape="rect">
//         <area alt="" title="product28" class="selectArea" coords="184,201,200,206" shape="rect">
//         <area alt="" title="product29" class="selectArea" coords="153,161,171,174" shape="rect">
//         <area alt="" title="product30" class="selectArea" coords="124,199,137,205" shape="rect">
//         <area alt="" title="product31" class="selectArea" coords="122,12,138,21" shape="rect">
//         <area alt="" title="product32" class="selectArea" coords="199,2,218,9,220,21,208,24" shape="poly">
//         <area alt="" title="product33" class="selectArea" coords="212,216,227,201,212,198" shape="poly">
//         <area alt="" title="product34" class="selectArea" coords="197,67,204,65,208,72,201,83" shape="poly">
//         <area alt="" title="product35" class="selectArea" coords="152,55,171,69" shape="rect">
//         <area alt="" title="product36" class="selectArea" coords="182,20,199,29" shape="rect">
//         <area alt="" title="product37" class="selectArea" coords="230,138,242,152" shape="rect">
//         <area alt="" title="product38" class="selectArea" coords="96,40,118,53" shape="rect">
//         <area alt="" title="product39" class="selectArea" coords="208,79,216,73,227,79,228,137,218,144,208,142"
//           shape="poly">
//       </map>`;
//       $(function () {
//         $(".maparea").maphilight();
//       });
//       selectAreaFunction();
//       partsFunction(interiorPartsCarBtn, "interiorPartsCarBtn");
//     });
//     accessoriesCarBtn.addEventListener("click", () => {
//       if (lastActivePartsCarBtn == "accessoriesCarBtn") return;
//       mapImage.innerHTML = `<img src="assets/images/Image2.png" usemap="#image-map" class=" maparea" style="height: 336px;">

//       <map name="image-map">
//           <area alt="" class="selectArea" title="product1"  coords="54,65,124,59,252,61,273,67,287,99,273,127,206,134,136,137,54,140,38,95" shape="poly">
//           <area alt="" class="selectArea" title="product2"  coords="104,36,13" shape="circle">
//           <area alt="" class="selectArea" title="product3"  coords="243,35,14" shape="circle">
//           <area alt="" class="selectArea" title="product4"  coords="103,161,15" shape="circle">
//           <area alt="" class="selectArea" title="product5"  coords="243,162,14" shape="circle">
//           <area alt="" class="selectArea" title="product6"  coords="23,132,44,150" shape="rect">
//           <area alt="" class="selectArea" title="product7"  coords="137,157,180,141,242,138,229,145,163,165" shape="poly">
//           <area alt="" class="selectArea" title="product8"  coords="278,58,312,68,309,128,296,130,276,141,290,99" shape="poly">
//           <area alt="" class="selectArea" title="product9"  coords="180,18,158,41,178,51,190,26" shape="poly">
//           <area alt="" class="selectArea" title="product10"  coords="129,31,155,41" shape="rect">
//           <area alt="" class="selectArea" title="product11"  coords="215,163,8" shape="circle">
//           <area alt="" class="selectArea" title="product12"  coords="212,37,11" shape="circle">
//           <area alt="" class="selectArea" title="product13"  coords="71,38,10" shape="circle">
//           <area alt="" class="selectArea" title="product14"  coords="70,159,10" shape="circle">
//           <area alt="" class="selectArea" title="product15"  coords="33,57,15" shape="circle">
//           <area alt="" class="selectArea" title="product16"  coords="295,51,272,41" shape="rect">
//       </map>`;
//       $(function () {
//         $(".maparea").maphilight();
//       });
//       selectAreaFunction();
//       partsFunction(accessoriesCarBtn, "accessoriesCarBtn");
//     });
//     carHitBtn.addEventListener("click", () => {
//       if (lastActivePartsCarBtn == "carHitBtn") return;
//       mapImage.innerHTML = `<img src="assets/images/Image3.png" usemap="#image-map" class=" maparea" style="height: 336px;">

//       <map name="image-map">
//       <area class="selectArea" alt="" title="product1" coords="27,26,53,23,110,33,158,42,194,49,212,63,218,94,202,120,194,126,150,124,83,115,31,110,11,96,9,58" shape="poly">
//       <area class="selectArea" alt="" title="product2" coords="220,80,232,65,243,62,247,74,258,78,244,87,222,95,232,104,277,108,314,111,323,144,324,174,312,186,282,192,254,191,217,190,194,188,178,187,160,180,162,176,133,150,152,138,210,118" shape="poly">
//   </map>`;
//       $(function () {
//         $(".maparea").maphilight();
//       });
//       selectAreaFunction();
//       partsFunction(carHitBtn, "carHitBtn");
//     });
//     oldCarBtn.addEventListener("click", () => {
//       if (lastActivePartsCarBtn == "oldCarBtn") return;
//       partsFunction(oldCarBtn, "oldCarBtn");
//     });
//     function partsFunction(btn, id) {
//       btn.classList.remove("bg-transparent");
//       btn.classList.add("bg-primary-content");
//       const lastActiveButton = document.getElementById(lastActivePartsCarBtn);
//       lastActiveButton.classList.remove("bg-primary-content");
//       lastActiveButton.classList.add("bg-transparent");
//       lastActivePartsCarBtn = id;
//     }
//   } catch (error) {
//     console.log("the element is not existe");
//   }

// let responsive =document.querySelector('header .res-nav');
// let openButton = document.querySelector('.bars');
// openButton.addEventListener('click', function(){
//  responsive.classList.toggle('open-nav');
// });
// window.onscroll = () => {
//     responsive.classList.remove("open-nav");
// }
// function selectAreaFunction() {
//     const selectArea = document.querySelectorAll(".selectArea");
//     const listSelected = document.getElementById("listAreaSelected");
//     let listAreaSelected = [];
//     try {
//       listSelected.innerHTML = ``;
//       selectArea.forEach((area, index) => {
//         area.addEventListener("click", () => {
//           if (listAreaSelected.indexOf(area.getAttribute("title")) > -1) {
//             listAreaSelected.splice(
//               listAreaSelected.indexOf(area.getAttribute("title")),
//               1
//             );
//             renderListAreaSelected();
//             return;
//           }
//           listAreaSelected.push(area.getAttribute("title"));
//           renderListAreaSelected();
//         });
//       });
//       function renderListAreaSelected() {
//         listSelected.innerHTML = "";
//         for (let i = 0; i < listAreaSelected.length; i++) {
//           listSelected.innerHTML += `<li class="btn cursor-pointer">${listAreaSelected[i]} <button class="removeSelectedArea bg-red-500 hover:text-red-500 btn"><i class="fa-solid fa-trash"></i><button></li>`;
//         }
//         document
//           .querySelectorAll(".removeSelectedArea")
//           .forEach((btn, index) => {
//             btn.addEventListener("click", () => {
//               listAreaSelected.splice(index, 1);
//               renderListAreaSelected();
//             });
//           });
//       }
//     } catch (error) {
//       console.log("the element is not existe");
//     }
//   }
//   selectAreaFunction();


if (document.body.classList.contains('pay-buy-body') ) {



document.querySelector('.special-drop-select').addEventListener('click', function(event) {
    const content = this.querySelector('.special-drop-content');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll('.special-drop-item').forEach(item => {
    item.addEventListener('click', function(event) {
        event.stopPropagation();
        const selectedText = item.getAttribute('data-text');
        const selectedImg = item.getAttribute('data-img');
        document.getElementById('special-selected-image').src = selectedImg;
        document.querySelector('.special-get-num').value = selectedText;
        item.parentElement.style.display = 'none';
    });
});

document.addEventListener('click', function(event) {
    if (!event.target.closest('.special-drop-select')) {
        document.querySelectorAll('.special-drop-content').forEach(content => {
            content.style.display = 'none';
        });
    }
});
};

if (document.body.classList.contains('register-body') ) {



document.querySelector('.special-drop-select').addEventListener('click', function(event) {
    const content = this.querySelector('.special-drop-content');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll('.special-drop-item').forEach(item => {
    item.addEventListener('click', function(event) {
        event.stopPropagation();
        const selectedText = item.getAttribute('data-text');
        const selectedImg = item.getAttribute('data-img');
        document.getElementById('special-selected-image').src = selectedImg;
        document.querySelector('.special-get-num').value = selectedText;
        item.parentElement.style.display = 'none';
    });
});

document.addEventListener('click', function(event) {
    if (!event.target.closest('.special-drop-select')) {
        document.querySelectorAll('.special-drop-content').forEach(content => {
            content.style.display = 'none';
        });
    }
});














function showInput (e) {
    if (e==0){
    companyNameInput.classList.add('show-company');
    }
    else {
        companyNameInput.classList.remove('show-company');
    }
}
const companyName = document.querySelector('#company-name');
const companyNameInput = document.querySelector('.company-name');

}


if (document.body.classList.contains('register-body') || document.body.classList.contains('login-body')) {

// login password 
document.addEventListener("DOMContentLoaded", function() {
    const togglePassword = document.querySelector("#togglePassword");
    const passwordField = document.querySelector("#Password1");
    const eyeVisible = document.querySelector("#eyeVisible");
    const eyeHidden = document.querySelector("#eyeHidden");
  
    togglePassword.addEventListener("click", function() {
      // Toggle the type attribute
      const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
      passwordField.setAttribute("type", type);
      
      // Toggle the visibility of the eye icons
      eyeVisible.classList.toggle("hidden");
      eyeHidden.classList.toggle("hidden");
    });
  });
  
}


if (document.body.classList.contains('product-img-body')) {
    const fileInput = document.getElementById('file-input');
    const imagePreview = document.getElementById('image-preview');

    fileInput.addEventListener('change', function() {
        const files = fileInput.files;

        Array.from(files).forEach(file => {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imgContainer = document.createElement('div');
                imgContainer.classList.add('image-container');

                const img = document.createElement('img');
                img.src = e.target.result;

                const deleteIcon = document.createElement('div');
                deleteIcon.classList.add('delete-icon');
                deleteIcon.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/>
                    </svg>
                `;

                deleteIcon.addEventListener('click', function() {
                    imgContainer.remove();
                });

                imgContainer.appendChild(img);
                imgContainer.appendChild(deleteIcon);
                imagePreview.appendChild(imgContainer);
            };
            reader.readAsDataURL(file);
        });

        // Clear the input value to allow re-uploading the same file if needed
        fileInput.value = '';
    });
}
if (document.body.classList.contains('ads-body')) {
    const customDropdown = document.querySelector('.custom-dropdown');
    const trigger = customDropdown.querySelector('.custom-dropdown-trigger');
    const options = customDropdown.querySelector('.custom-options');

    trigger.addEventListener('click', function() {
        customDropdown.classList.toggle('open');
    });

    document.querySelectorAll('.custom-option').forEach(function(optionElement) {
        optionElement.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            const text = this.querySelector('span').innerText;
            trigger.innerHTML = `<img src="${this.querySelector('img').src}" alt="${text}"> ${text}`;
            customDropdown.classList.remove('open');
        });
    });

    document.addEventListener('click', function(e) {
        if (!customDropdown.contains(e.target)) {
            customDropdown.classList.remove('open');
        }
    });
    





}
if (document.body.classList.contains('ads-add-body')) {
    // thumb swiper 
    var swiper = new Swiper(".myThumbSwiper", {
        spaceBetween: 20,
        slidesPerView: 4,
        loop: true,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            0: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 4,
            },
    
        }
      });
      var swiper2 = new Swiper(".myThumbSwiper2", {
        spaceBetween: 20,
        loop: true,
        navigation: {
          nextEl: ".thumb-swiper-next",
          prevEl: ".thumb-swiper-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });

// col swiper 
var swiper = new Swiper(".col-swiper", {
    slidesPerView: 2,
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 2,
        },

    }
  });

//   like swiper 
var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    navigation: {
        nextEl: ".swiper-ads-next",
        prevEl: ".swiper-ads-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },

    }
});
// like swiper cards 
  // Select all heart buttons
  const heartButtons = document.querySelectorAll('.fav-heart .heart');
            
  // Add event listener to each heart button
  heartButtons.forEach(button => {
      button.addEventListener('click', function () {
          // Toggle the 'unlike' class on the clicked button
          this.classList.toggle('like');
      });
  });

// toggle add to fav 
 // Select the favorite link
 const toggleFavoriteLink = document.querySelector('.toggle-favorite');
        
 // Add click event listener to the favorite link
 toggleFavoriteLink.addEventListener('click', function (event) {
     // Prevent the default link behavior
     event.preventDefault();
     
     // Toggle the 'like' class on the SVG
     const svgElement = this.querySelector('svg');
     svgElement.classList.toggle('like');
     
     // Toggle the text content
     if (this.textContent.includes('اضف الى المفضلة')) {
         this.innerHTML = `
             تم الاضافة
             <svg class="w-6 h-6 text-gray-800 gray like" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="">
                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"></path>
             </svg>
         `;
     } else {
         this.innerHTML = `
             اضف الى المفضلة
             <svg class="w-6 h-6 text-gray-800 gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"></path>
             </svg>
         `;
     }
 });
      

 



  // Select the compare button
  const toggleCompButton = document.querySelector('.toggle-comp');
        
  // Add click event listener to the compare button
  toggleCompButton.addEventListener('click', function (event) {
      // Prevent the default button behavior
      event.preventDefault();
      
      // Toggle the 'like' class on the SVG
      const svgElement = this.querySelector('svg');
      svgElement.classList.toggle('like');
      
      // Toggle the text content
      if (this.textContent.includes('اضف الى المقارنة')) {
          this.innerHTML = `
              تم الاضافة
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" class="like">
                  <path fill="currentColor" d="M19.295 12a.704.704 0 0 1 .705.709v3.204a.704.704 0 0 1-.7.709a.704.704 0 0 1-.7-.709v-1.125C16.779 17.844 13.399 20 9.757 20c-4.41 0-8.106-2.721-9.709-6.915a.712.712 0 0 1 .4-.917c.36-.141.766.04.906.405c1.4 3.662 4.588 6.01 8.403 6.01c3.371 0 6.52-2.182 7.987-5.154l-1.471.01a.704.704 0 0 1-.705-.704a.705.705 0 0 1 .695-.714zm-9.05-12c4.408 0 8.105 2.721 9.708 6.915a.712.712 0 0 1-.4.917a.697.697 0 0 1-.906-.405c-1.4-3.662-4.588-6.01-8.403-6.01c-3.371 0-6.52 2.182-7.987 5.154l1.471-.01a.704.704 0 0 1 .705.704a.705.705 0 0 1-.695.714L.705 8A.704.704 0 0 1 0 7.291V4.087c0-.392.313-.709.7-.709c.386 0 .7.317.7.709v1.125C3.221 2.156 6.601 0 10.243 0" />
              </svg>
          `;
      } else {
          this.innerHTML = `
              اضف الى المقارنة
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
                  <path fill="currentColor" d="M19.295 12a.704.704 0 0 1 .705.709v3.204a.704.704 0 0 1-.7.709a.704.704 0 0 1-.7-.709v-1.125C16.779 17.844 13.399 20 9.757 20c-4.41 0-8.106-2.721-9.709-6.915a.712.712 0 0 1 .4-.917c.36-.141.766.04.906.405c1.4 3.662 4.588 6.01 8.403 6.01c3.371 0 6.52-2.182 7.987-5.154l-1.471.01a.704.704 0 0 1-.705-.704a.705.705 0 0 1 .695-.714zm-9.05-12c4.408 0 8.105 2.721 9.708 6.915a.712.712 0 0 1-.4.917a.697.697 0 0 1-.906-.405c-1.4-3.662-4.588-6.01-8.403-6.01c-3.371 0-6.52 2.182-7.987 5.154l1.471-.01a.704.704 0 0 1 .705.704a.705.705 0 0 1-.695.714L.705 8A.704.704 0 0 1 0 7.291V4.087c0-.392.313-.709.7-.709c.386 0 .7.317.7.709v1.125C3.221 2.156 6.601 0 10.243 0" />
              </svg>
          `;
      }
  });








// NOW AM ADD FUNCTIONS TO BUTTONS INCREMENT AND DECREMENT TOTAL PRICE
let valueCount=1;
let increment=document.querySelector(".btn-increment");
let decrement=document.querySelector(".btn-decrement");
let  count =document.querySelector("#quantity");
let  totalcount =document.querySelector("#price");
 //NOW AM CREATING A ARROW FUNCTION
 increment.addEventListener("click",()=>{
  let add=  valueCount++;
  count.value=add;
  totalcount.innerHTML=add*100;   //ADDING(INCREMENT) FUCTION IS COMPLETED
   });
   decrement.addEventListener("click",()=>{
     //THIS IS DECREMENT FUNCTION  IN THIS AN GIVING A CONDITION TWO DISABLE THE (-)VALUES
   if(valueCount>=2){
    let sub =--valueCount;
    count.value=sub;
    totalcount.innerHTML=sub*100;  //lets cheack yhe decrement is working or not 
    //DECREMENT FUNCTION IS ALSO COMPLETE
   }

   });
  

}
if (document.body.classList.contains('orders-body')) {
    var swiper = new Swiper(".orders-swiper", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          loop: true,
          autoplay: true,
          grabCursor: 'true',
          
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },
      });





}
if (document.body.classList.contains('order-body')) {
    // Select all heart buttons
    const heartButtons = document.querySelectorAll('.fav-heart .heart');
            
    // Add event listener to each heart button
    heartButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Toggle the 'unlike' class on the clicked button
            this.classList.toggle('like');
        });
    });

    var swiper = new Swiper(".slide-content", {
        slidesPerView: 4,
        spaceBetween: 25,
        loop: true,
        centerSlide: 'true',
        fade: 'true',
        grabCursor: 'true',
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
    
        }
    });

    
}
if (document.body.classList.contains('fav-body')) {
    const heartButtons = document.querySelectorAll('.fav-card .fav-heart .heart');
        
        // Add event listener to each heart button
        heartButtons.forEach(button => {
            button.addEventListener('click', function () {
                // Toggle the 'unlike' class on the clicked button
                this.classList.toggle('unlike');
            });
        });
}
if (document.body.classList.contains('cart-body')) {

    // Select the uncheck button
    const uncheckButton = document.querySelector('.uncheck-carts');
        
    // Add event listener to the uncheck button
    uncheckButton.addEventListener('click', function () {
        // Select all product checkboxes
        const checkboxes = document.querySelectorAll('.cart-product .form-check-input');
        
        // Loop through each checkbox and uncheck it
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
    });




        // // Select all product elements
        // const products = document.querySelectorAll('.cart-product');

        // // Loop through each product element
        // products.forEach(product => {
        //     let valueCount = 1;
        //     const incrementButton = product.querySelector('.btn-increment');
        //     const decrementButton = product.querySelector('.btn-decrement');
        //     const countInput = product.querySelector('#quantity');
        //     const totalPrice = product.querySelector('#price');

        //     // Increment button event listener
        //     incrementButton.addEventListener('click', () => {
        //         valueCount++;
        //         countInput.value = valueCount;
        //         totalPrice.innerHTML = valueCount * 100;
        //     });

        //     // Decrement button event listener
        //     decrementButton.addEventListener('click', () => {
        //         if (valueCount > 1) {
        //             valueCount--;
        //             countInput.value = valueCount;
        //             totalPrice.innerHTML = valueCount * 100;
        //         }
        //     });
        // });
  


// // NOW AM ADD FUNCTIONS TO BUTTONS INCREMENT AND DECREMENT TOTAL PRICE
// let valueCount=1;
// let increment=document.querySelector(".btn-increment");
// let decrement=document.querySelector(".btn-decrement");
// let  count =document.querySelector("#quantity");
// let  totalcount =document.querySelector("#price");
//  //NOW AM CREATING A ARROW FUNCTION
//  increment.addEventListener("click",()=>{
//   let add=  valueCount++;
//   count.value=add;
//   totalcount.innerHTML=add*100;   //ADDING(INCREMENT) FUCTION IS COMPLETED
//    });
//    decrement.addEventListener("click",()=>{
//      //THIS IS DECREMENT FUNCTION  IN THIS AN GIVING A CONDITION TWO DISABLE THE (-)VALUES
//    if(valueCount>=2){
//     let sub =--valueCount;
//     count.value=sub;
//     totalcount.innerHTML=sub*100;  //lets cheack yhe decrement is working or not 
//     //DECREMENT FUNCTION IS ALSO COMPLETE
//    }

//    });


}



if (document.body.classList.contains('index-body')) {
// maintenance swiper 
var swiper = new Swiper(".index-swiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//   like btn 
let likeBtn =document.querySelectorAll('.like-btn');
console.log(likeBtn);
// for (let index = 0; index < array.length; index++) {
    // const element = likeBtn[index];
    
    // likeBtn[index].addEventListener('click',function() {
    //     likeBtn[index].classList.toggle('clicked');
    // });

    likeBtn.forEach(div => {
        div.addEventListener('click', function () {
            div.classList.toggle('clicked');
        });
    });
// swiper 
var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },

    }











});






// 1st img 
document.addEventListener('DOMContentLoaded', function () {
    const markers = document.querySelectorAll('.img1map .h');
    const buttonContainer = document.getElementById('button-container');
    const selectedMarkers = new Set();

    markers.forEach(marker => {
        marker.addEventListener('click', function () {
            const markerClass = marker.classList[1];
            if (selectedMarkers.has(marker)) {
                // Toggle marker selection off
                marker.style.backgroundColor = 'var(--yellow)';
                selectedMarkers.delete(marker);
                // Remove the corresponding button
                const button = buttonContainer.querySelector(`button[data-marker="${markerClass}"]`);
                if (button) button.remove();
            } else {
                // Toggle marker selection on
                marker.style.backgroundColor = 'gray';
                selectedMarkers.add(marker);
                // Add the button
                const button = document.createElement('button');
                button.className = 'btn-secondary btn btn-block w-100';
                button.setAttribute('data-marker', markerClass);
                button.innerHTML = `
                    <span>${markerClass.toUpperCase()} Clicked</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/>
                    </svg>`;
                buttonContainer.appendChild(button);
            }
        });
    });
});


// 2nd img 
document.addEventListener('DOMContentLoaded', function () {
    const markers2 = document.querySelectorAll('.img2map .h');
    const buttonContainer2 = document.getElementById('button-container2');
    const selectedMarkers2 = new Set();

    markers2.forEach(marker => {
        marker.addEventListener('click', function () {
            const markerClass = marker.classList[1];
            if (selectedMarkers2.has(marker)) {
                // Toggle marker selection off
                marker.style.backgroundColor = 'var(--yellow)';
                selectedMarkers2.delete(marker);
                // Remove the corresponding button
                const button = buttonContainer2.querySelector(`button[data-marker="${markerClass}"]`);
                if (button) button.remove();
            } else {
                // Toggle marker selection on
                marker.style.backgroundColor = 'gray';
                selectedMarkers2.add(marker);
                // Add the button
                const button = document.createElement('button');
                button.className = 'btn-secondary btn btn-block w-100';
                button.setAttribute('data-marker', markerClass);
                button.innerHTML = `
                    <span>${markerClass.toUpperCase()} Clicked</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/>
                    </svg>`;
                buttonContainer2.appendChild(button);
            }
        });
    });
});



//   3rd img 
document.addEventListener('DOMContentLoaded', function () {
    const markers3 = document.querySelectorAll('.img3map .h');
    const buttonContainer3 = document.getElementById('button-container3');
    const selectedMarkers3 = new Set();

    markers3.forEach(marker => {
        marker.addEventListener('click', function () {
            const markerClass = marker.classList[1];
            if (selectedMarkers3.has(marker)) {
                // Toggle marker selection off
                marker.style.backgroundColor = 'var(--yellow)';
                selectedMarkers3.delete(marker);
                // Remove the corresponding button
                const button = buttonContainer3.querySelector(`button[data-marker="${markerClass}"]`);
                if (button) button.remove();
            } else {
                // Toggle marker selection on
                marker.style.backgroundColor = 'gray';
                selectedMarkers3.add(marker);
                // Add the button
                const button = document.createElement('button');
                button.className = 'btn-secondary btn btn-block w-100';
                button.setAttribute('data-marker', markerClass);
                button.innerHTML = `
                    <span>${markerClass.toUpperCase()} Clicked</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/>
                    </svg>`;
                buttonContainer3.appendChild(button);
            }
        });
    });
});


 // 4th tab 
 document.addEventListener('DOMContentLoaded', function () {
        const markers4 = document.querySelectorAll('.img4map .h');
        const buttonContainer4 = document.getElementById('button-container4');
        const selectedMarkers4 = new Set();

        markers4.forEach(marker => {
            marker.addEventListener('click', function () {
                const markerClass = marker.classList[1];
                if (selectedMarkers4.has(marker)) {
                    // Toggle marker selection off
                    marker.style.backgroundColor = 'var(--yellow)';
                    selectedMarkers4.delete(marker);
                    // Remove the corresponding button
                    const button = buttonContainer4.querySelector(`button[data-marker="${markerClass}"]`);
                    if (button) button.remove();
                } else {
                    // Toggle marker selection on
                    marker.style.backgroundColor = 'gray';
                    selectedMarkers4.add(marker);
                    // Add the button
                    const button = document.createElement('button');
                    button.className = 'btn-secondary btn btn-block w-100';
                    button.setAttribute('data-marker', markerClass);
                    button.innerHTML = `
                        <span>${markerClass.toUpperCase()} Clicked</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/>
                        </svg>`;
                    buttonContainer4.appendChild(button);
                }
            });
        });
 });





// 5th tab 
document.addEventListener('DOMContentLoaded', function () {
        const markers5 = document.querySelectorAll('.img5map .h');
        const buttonContainer5 = document.getElementById('button-container5');
        const selectedMarkers5 = new Set();

        markers5.forEach(marker => {
            marker.addEventListener('click', function () {
                const markerClass = marker.classList[1];
                if (selectedMarkers5.has(marker)) {
                    // Toggle marker selection off
                    marker.style.backgroundColor = 'var(--yellow)';
                    selectedMarkers5.delete(marker);
                    // Remove the corresponding button
                    const button = buttonContainer5.querySelector(`button[data-marker="${markerClass}"]`);
                    if (button) button.remove();
                } else {
                    // Toggle marker selection on
                    marker.style.backgroundColor = 'gray';
                    selectedMarkers5.add(marker);
                    // Add the button
                    const button = document.createElement('button');
                    button.className = 'btn-secondary btn btn-block w-100';
                    button.setAttribute('data-marker', markerClass);
                    button.innerHTML = `
                        <span>${markerClass.toUpperCase()} Clicked</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/>
                        </svg>`;
                    buttonContainer5.appendChild(button);
                }
            });
        });
});





}


if (document.body.classList.contains('search-result-body') ){
const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});


// price range 
rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});


// toggle search filter 
    let searchFilter = document.querySelector('.search-filter-content');
    let searchFilterToggle = document.querySelector('.filter-toggle');
    searchFilterToggle.addEventListener('click',function(){
        searchFilter.classList.toggle('show-sfc');
    });

}



