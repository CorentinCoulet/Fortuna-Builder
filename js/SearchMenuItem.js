const inputSearchBarItem = document.querySelector(".inputSearchItem");
const menuItems = document.querySelector(".optionsSearchItem");

// menuItems.addEventListener("click", (event) => {
//     if(event.target.classList.contains("parametresSelect") &&
//      !event.target.classList.contains("sectionSearchItem")){
//         const selectedParam = event.target.textContent;
//         const paramElement = createParamElement(selectedParam);

//         if(!isParamSelected(selectedParam)){
//             triggerSearchItem.appendChild(paramElement);
//         }
//     }
// });

// triggerSearchItem.addEventListener("click", (event) => {
//     if(event.target.classList.contains("remove-param")){
//         const paramElement = event.target.parentElement;
//         const selectedParam = paramElement.getAttribute("data-param");
//         triggerSearchItem.removeChild(paramElement); 
//     }
// });

function createParamElement(param){
    const paramElement = document.createElement("div");
    paramElement.classList.add("selected-param");
    paramElement.textContent = param;

    const removeButton = document.createElement("span");
    removeButton.classList.add("remove-span");
    removeButton.textContent = "x";

    paramElement.appendChild(removeButton);

    paramElement.setAttributes("data-param", param);

    return paramElement;
}

function isParamSelected(param){
    const selectedParams = Array.from(triggerSearchItem.getElementsByClassName("selected-param"));
    return selectedParams.some((element) => element.getAttribute("data-param") === param);
}