
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
















