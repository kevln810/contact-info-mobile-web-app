function initialize() {
    var status = "* Offline *";
    if (navigator.onLine) {
        status = "* Online *";
        retrieveContacts();
    } else {
        const localStorage = window.localStorage;
        if (localStorage) {
            const contacts = localStorage.getItem("contacts");
            if (contacts) {
                displayContacts(JSON.parse(contacts));
            }
        }
    }

    document.getElementById("status").innerHTML = status;

    document.body.addEventListener(
            "online",
            function () {
                document.getElementById("status").innerHTML = "Online";
            },
            false
            );
    document.body.addEventListener(
            "offline",
            function () {
                document.getElementById("status").innerHTML = "Offline";
            },
            false
            );
}

function retrieveContacts() {
    const xhr = new XMLHttpRequest();
    const url = "contacts.json";

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var contacts = JSON.parse(xhr.response).contacts;
            displayContacts(contacts);

            // Store contact data to localstorage
            const localStorage = window.localStorage;
            if (localStorage) {
                localStorage.setItem("contacts", JSON.stringify(contacts));
            }
        }
    };

    xhr.open("get", url);
    xhr.send();
}

function displayContacts(contacts) {
    contacts.forEach(addRow);
}

function addRow(contact) {
 var tc = docuemt.getElementById("tcontent");
    tcrow = tc.insertRow();
    
    var namecell = tcrow.insertCell();
    namecell.innerHTML = contact.name;
    
     var addresscell = tcrow.insertCell();
    addresscell.innerHTML = contact.address;
        
      var phonecell = tcrow.insertCell();
    phonecell.innerHTML = contact.phone.mobile;
    
    
    
    
    
}
