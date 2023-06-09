// // function addElement() {
// //     let inputElement = document.getElementById("inputElement");
// //     let value = inputElement.value;
// //     inputElement.value = "";

// //     let box = document.getElementById("box");
// //     let element = document.createElement("div");
// //     element.innerHTML = value;

// //     let validateIcon = document.createElement("i") ;
// //     validateIcon.setAttribute("class" , "fa-solid fa-check ")
// //     validateIcon.setAttribute("style" , "color: #0c5f11;")
// //     validateIcon.innerHTML = ""
// //     validateIcon.onclick = function() {
// //         element.style.color = "green";
// //     };
// //     element.appendChild(validateIcon);

// //     let deleteIcon = document.createElement("i");
// //     deleteIcon.setAttribute("class" ,"fa-solid fa-trash" )
// //     deleteIcon.setAttribute("style", "color: #f22121;")
// //     deleteIcon.onclick = function() {
// //         element.parentNode.removeChild(element);
// //     };
// //     element.appendChild(deleteIcon);

// //     let editIcon = document.createElement("i");
// //     editIcon.setAttribute("class" ,"fa-solid fa-pen")
// //     editIcon.setAttribute("style" , "color: #483776;")
// //     editIcon.onclick = function() {
// //         let newValue = prompt("Modifier la valeur :", value);
// //         if (newValue !== null && newValue !== "") {
// //             element.innerHTML = newValue;
// //         }
// //     };
// //     element.appendChild(editIcon);

// //     box.appendChild(element);
// // }

// // function filterElements() {
// //     let filterSelect = document.getElementById("filterSelect");
// //     let filterValue = filterSelect.value;
// //     let elements = document.getElementById("box").children;

// //     for (let i = 0; i < elements.length; i++) {
// //         let element = elements[i];

// //         if (filterValue === "valid") {
// //             element.style.display = element.style.color === "green" ? "block" : "none";
// //         } else if (filterValue === "invalid") {
// //             element.style.display = element.style.color === "green" ? "none" : "block";
// //         } else {
// //             element.style.display = "block";
// //         }
// //     }
// // }





// let input1 = document.querySelector(".input1");
// let button = document.querySelector(".btn-1");
// let liste = document.querySelector(".liste");


// const xvalidation = () => {
//     if (input1.value == "") {
//         alert("romplir le champ ")

//     } else {
//         liste.innerHTML += `<li class="style-liste"> <h1>${input1.value}</h1>
//         <div class="icons">
//                 <i class="fa-solid fa-check valide" style="color: #213e04;"></i>
//                 <i class="fa-solid fa-trash-can invalid" style="color: #b30000;"></i>
//                 <i class="fa-sharp fa-solid fa-pencil modify" style="color: #b375ff;"></i>
//         </div>
//     </li>`


//     }

// }
// button.addEventListener("click", xvalidation);


// document.addEventListener("click", e => {
//     if (e.target.className.includes("valide")) {
//         e.target.parentElement.parentElement.classList.toggle("green_color")
//     }
// })

// document.addEventListener("click", p => {
//     if (p.target.className.includes("invalid")) {
//         p.target.parentElement.parentElement.classList.add("red_none");

//     }
// })


// document.addEventListener("click", s => {
//     if (s.target.className.includes("modify")) {
//         let askmodify = prompt("change")
//         s.target.parentElement.previousElementSibling.textContent = askmodify;

//     }
// })



let input1 = document.querySelector(".input1");
let button = document.querySelector(".btn-1");
let liste = document.querySelector(".liste");
let filterSelect = document.getElementById("filterSelect");

const xvalidation = () => {
    if (input1.value == "") {
        alert("Veuillez remplir le champ.");
    } else {
        liste.innerHTML += `<li class="style-liste"> <h1>${input1.value}</h1>
        <div class="icons">
                <i class="fa-solid fa-check valide" style="color: #213e04;"></i>
                <i class="fa-solid fa-trash-can invalid" style="color: #b30000;"></i>
                <i class="fa-sharp fa-solid fa-pencil modify" style="color: #b375ff;"></i>
        </div>
    </li>`;
    }
};

button.addEventListener("click", xvalidation);

document.addEventListener("click", (e) => {
    if (e.target.className.includes("valide")) {
        e.target.parentElement.parentElement.classList.toggle("green_color");
    }
});

document.addEventListener("click", (p) => {
    if (p.target.className.includes("invalid")) {
        p.target.parentElement.parentElement.classList.add("red_none");
    }
});

document.addEventListener("click", (s) => {
    if (s.target.className.includes("modify")) {
        let askmodify = prompt("Entrez la modification");
        s.target.parentElement.previousElementSibling.textContent = askmodify;
    }
});

filterSelect.addEventListener("change", () => {
    let selectedValue = filterSelect.value;
    let listItems = Array.from(liste.children);

    listItems.forEach((item) => {
        item.style.display = "block"; // Réinitialise l'affichage de tous les éléments

        switch (selectedValue) {
            case "valid":
                if (!item.classList.contains("green_color")) {
                    item.style.display = "none"; // Masque les éléments non validés
                }
                break;

            case "invalid":
                if (!item.classList.contains("red_none")) {
                    item.style.display = "none"; // Masque les éléments non invalides
                }
                break;

            default:
                break;
        }
    });
});














