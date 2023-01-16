class Product {
    Add_To_Product(name, cost, image) {
        let newProduct = document.createElement("div");
        newProduct.id = "New_Products";
        newProduct.innerHTML = '<image id="Image" src="' + image + '"/>' +
            '<h3 id="Name">' + name + '</h3>' + 
            '<p id="Cost">' + cost + '</p>' +
            '<button id="By_Basket" class="Buttons" onclick="By_Basket()">В корзину</button>' + 
            '<button id="The_Change" class="Buttons" onclick="The_Сhange()">Изменить</button>';
        document.getElementById("Products_Div").append(newProduct);
    }

    Rename(event) {
        let name = prompt("Введите новое имя товара", "...");
        event.target.parentElement.querySelector("#Name").innerHTML = name;
    }

    Delete(event) {
        event.target.closest("div").remove();
    }

    New_Image(event) {
        let image = prompt("Введите адрес изображения нового товара", "...");
        event.target.parentElement.firstElementChild.src = image;
    }
  
    New_Cost(event) {
        let cost = prompt("Введите цену нового товара", "...");
        event.target.parentElement.querySelector("#Cost").innerHTML = cost;
    }
}

let product = new Product();

function Add_To() {
    let name = prompt("Введите имя товара", "...");
    let cost = prompt("Введите цену товара", "...");
    let image = prompt("Введите адрес изображения", "...");
    product.Add_To_Product(name, cost, image);
}

function Delete() {
    document.getElementById("Products_Div").lastElementChild.remove();
}

function Gray() {
    let divBackground = document.querySelectorAll("#New_Products");
    for (let i = 0; i < divBackground.length; i++) {
        if (i % 2 == 1) {
             divBackground[i].style.backgroundColor = "rgba(149, 165, 166)";
        }
    }
}


function By_Basket() { alert("Товар добавлен в корзину!"); }
function Basket() { alert("Спасибо за покупку!"); }


function The_Сhange() {
    let action = prompt("Что же вы хотите изменить?\n" + 
        "1. Наименование товара.\n" +
        "2. Стоимость товара.\n" +
        "3. Фотографию товара.", "...");
    switch(action) {
        case "1":
            product.Rename(event);
            break;
        case "2":
            product.New_Cost(event);
            break;
        case "3":
            product.New_Image(event);
            break;
        default:
            alert("Введён неверный номер операции!");
            break;
    }
}


// КНОПКА

class Button {
    New_Button() {
        let width = prompt("Введите ширину кнопки", "...");
        let height = prompt("Введите высоту кнопки", "...");  
        let backgroundColor = prompt("Введите цвет кнопки", "...");
        let innerHTML = prompt("Введите текст кнопки", "..."); //

        let newButton = document.createElement("button");
        newButton.style.cssText = "width: " + width + "px;" +
            "height: " + height + "px;" +
            "background: " + backgroundColor + ";" +
            "text: " + innerHTML + ".";
        document.getElementById("More_Buttons").append(newButton);
    }

    Delete_Button(event) {
        document.getElementById("More_Buttons").lastElementChild.remove();
    }   

    New_Color(event) {
        let color = prompt("Введите новый цвет кнопки", "...");
        document.getElementById("More_Buttons").lastElementChild.style.background = color;
    }
  
    New_Size(event) {
        let width = prompt("Ширина", "...");
        let height = prompt("Высота", "...");
        document.getElementById("More_Buttons").lastElementChild.style.cssText = "width: " + width + "px;" + "height: " + height + "px;";
    }
    
    New_Text(event) {
        let text = prompt("Введите новый цвет кнопки", "...");
        document.getElementById("More_Buttons").lastElementChild.style.innerHTML = text;
    }
}


let moreButtons = new Button();
function Create_Button() {
    moreButtons.New_Button();
}


function Change() {
    let action = prompt("Что вы хотите изменить?\n" + 
        "1. Параметры кнопки.\n" +
        "2. Цвет кнопки.\n" +
        "3. Удалить кнопку.\n" +
        "4. Текст кнопки.", "...");
    switch(action) {
        case "1":
            moreButtons.New_Size(event);
            break;
        case "2":
            moreButtons.New_Color(event);
            break;
        case "3":
            moreButtons.Delete_Button(event);
            break;
        case "4":
            moreButtons.New_Text(event);
            break;
        default:
            alert("Введён неверный номер операции!");
            break;
    }
}