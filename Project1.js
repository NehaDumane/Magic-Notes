//If note adds, add it on local storage

showNotes();
let btn = document.getElementById('addbtn');
addbtn.addEventListener('click', function(e) {
    let txt = document.getElementById('addtext');
    let title = document.getElementById('addtitle');
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        Title: addtitle.value,
        Text: addtext.value 
    };
    notesObj.push(myObj);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addtext.value = "";
    addtitle.value = "";
    //console.log(notesObj);
    showNotes();
})

//function to show elements from localstorage
function showNotes() {
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index) {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 17rem;">
            <div class="card-body">
              <h5 class="card-title">${element.Title}</h5>
              <p class="card-text">${element.Text}</p>
              <button id="${index}" class="btn btn-primary btn-col" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Notes</button>
            </div>
        </div>
        `
    });
    let notesElem = document.getElementById('notes');
    if(notesObj.length != 0){
        notesElem.innerHTML = html;
    }
    else{
        notesElem.innerHTML = 'Nothing to show';
    }
}

//function to delete notes
function deleteNote(index) {
    //console.log("i am deleting", index);
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}

//search
let search = document.getElementById('searchTxt')
search.addEventListener("input", function() {
    let inputVal = search.value.toLowerCase();
    //console.log("Input event fired", inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element) {
        let cardTxt = element.getElementsByTagName("h5")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        //console.log(cardTxt);
    })
})



















