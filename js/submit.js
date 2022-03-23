function submit(){
    if(rate!=0){
        console.log("teste");
        removeElements();
    }
    
    var container = document.querySelector(".container");
   

    var img = document.createElement('img');
    img.setAttribute('src','./images/illustration-thank-you.svg')
    container.appendChild(img);

    var selectedText = "You selected " + rate + " out of 5";
    var text = document.createElement('p');
    text.textContent = selectedText;
    text.setAttribute("class","selected-text");
    container.appendChild(text);

    var thankYou = document.createElement("h1");
    thankYou.textContent = 'Thank You!';
    thankYou.setAttribute("class","title");
    container.appendChild(thankYou);
    
    var appreciateText = document.createElement("p");
    appreciateText.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
    appreciateText.setAttribute("class",'appreciateText');
    container.appendChild(appreciateText);  
}

function removeElements(){
    
    var removeHead = document.querySelector(".head");
    var removeContainerRate = document.querySelector(".container-rate");;
    var removeButton = document.querySelector("button");

    removeHead.remove();
    removeContainerRate.remove();
    removeButton.remove();
}