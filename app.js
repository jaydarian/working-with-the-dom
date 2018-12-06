
const myHeading = document.getElementsByTagName('h1')[0];
const myButton = document.getElementById("myButton");
const myTextInput = document.getElementById("myText");
const myList = document.getElementsByTagName('li');
const errorNotPurple = document.querySelectorAll('.error-not-purple'); // this selects the FIRST element with this class
const evens = document.querySelectorAll('li:nth-child(even)');
const linkTitleList = document.querySelectorAll("a[title]"); // select anchors with the ATTRIBUTE title

myButton.addEventListener('click', () => { // () => {} means anonymous function that will only run inside the scope of its parent function
    myHeading.style.color = myTextInput.value;
});

for (let i = 0; i < myList.length; i += 1) {
    myList[i].style.color = 'purple';
}

for (let i = 0; i < errorNotPurple.length; i += 1) {
    errorNotPurple[i].style.color = 'red';
}

for (let i = 0; i < evens.length; i += 1) {
    evens[i].style.backgroundColor = 'lightgray';
}


// textContent and innerHTML
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');

descriptionButton.addEventListener('click', () => { 
    descriptionP.innerHTML = descriptionInput.value + ':';
    descriptionInput.value = '';
});

// styling elements
const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');

toggleList.addEventListener('click', () => { 
    if (listDiv.style.display == 'none') {
        toggleList.textContent = 'Hide list';
        listDiv.style.display = 'block';
    } else {
        listDiv.style.display = 'none';
        toggleList.textContent = 'Show list';
    }
    
});

// creating new DOM elements
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

addItemButton.addEventListener('click', () => { 
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    ul.appendChild(li);
    addItemInput.value = '';
});

// removing elements
const removeItemButton = document.querySelector('button.removeItem');

removeItemButton.addEventListener('click', () => { 
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.querySelector('li:last-child');
    ul.removeChild(li);
});

// Listening for Events with addEventListener
const listItems = document.getElementsByTagName('li');
for (let i = 0; i < listItems.length; i += 1) {
    listItems[i].addEventListener('mouseover', () => {
        listItems[i].textContent = listItems[i].textContent.toUpperCase();
    });

    listItems[i].addEventListener('mouseout', () => {
        listItems[i].textContent = listItems[i].textContent.toLowerCase();
    });
}