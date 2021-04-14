import "../scss/options.scss";

// Saves options to chrome.storage
function save_options() {
    var user = document.getElementById('username').value;
    chrome.storage.local.set({
        'username': user
    }, function () {
        console.log(user);
    });
}

// // Restores select box and checkbox state using the preferences
// // stored in chrome.storage.
function restore_options() {
    chrome.storage.local.get("username", function (result) {
        document.getElementById('username').value = result.username;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);