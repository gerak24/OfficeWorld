window.addEventListener("load", () => {
    let price_texts = document.getElementsByClassName("price-text");
    let price_texts_height = [];
    for (let i = 0; i < price_texts.length; i++) {
        price_texts_height.push(price_texts[i].offsetHeight);
        price_texts[i].classList.add("hidden");
    }
    window.addEventListener("click", (e) => {
            if (e.target.className === "price-header") {
                let parent = e.target.parentNode;
                let price = parent.getElementsByClassName("price-text")[0];
                for (let i = 0; i < price_texts.length; i++) {
                    if (price === price_texts[i]) {
                        OnChevronClick(price, price_texts_height[i]);
                    }
                }
            }
        }
    );
});

window.addEventListener("click", (e) => {
    if (e.target.className === "submit_butt") {
        let result = document.getElementById("result");
        result.classList.remove("form_result_failed", "form_result_success")
        let result_text = document.getElementById("result_text");
        let validName = ValidateInput("Name", "name_error");
        let validPhone = ValidateInput("Phone", "phone_error");
        if (validName === true && validPhone === true) {
            result.classList.add("form_result_success");
            result_text.innerText = "Заявка успешно отправлена, в рабочее время с вами свяжется наш специалист."
        } else {
            result.classList.add("form_result_failed");
            result_text.innerText = "Пожалуйста, заполните все обязательные поля"
        }
    }
});

window.addEventListener("click", (e) => {
    if (e.target.classList.contains("img_zoomable")) {
        let popup = document.getElementById("popup");
        let img = document.getElementById("popup_img");
        img.style.setProperty("background-image",`url(${e.target.src})`);
        popup.classList.add("pop_visible");
        console.log(popup.classList);
    }
    
    if(e.target.classList.contains("pop_visible")){
        e.target.classList.remove("pop_visible")
    }
    else if(e.target.parentNode.classList.contains("pop_visible")){
        e.target.parentNode.classList.remove("pop_visible")
    }
});

function ValidateInput(inputId, errorId) {
    let error = document.getElementById(errorId);
    if (error.classList.contains("er_visible")) {
        error.classList.replace("er_visible", "er_hidden");
    }
    let input = document.getElementById(inputId);
    if (input.value === "") {
        if (error.classList.contains("er_hidden")) {
            error.classList.replace("er_hidden", "er_visible");
        }
        return false;
    }
    return true;
}

function OnChevronClick(price, height) {
    let text = price;

    if (text.classList.contains("visible")) {
        text.style.height = "0" + "px";
        text.classList.replace("visible", "hidden");
    } else if (text.classList.contains("hidden")) {
        text.style.height = height + "px";
        text.classList.replace("hidden", "visible");
    } else {
        text.style.height = height + "px";
        text.classList.add("visible");
    }
}
