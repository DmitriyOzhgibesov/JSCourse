(function () {
    "use strict";

    var toDoList;

    function initPage() {
        toDoList = document.getElementById("notes");

        var additionButton = document.getElementById("add-button");
        additionButton.addEventListener("click", function () {
            var inputField = document.getElementById("add-element-field");
            var inputDataValue = inputField.value;

            if (inputDataValue.trim().length === 0) {
                return;
            }

            var listItem = document.createElement("li");
            listItem.classList.add("todo-list-item");
            listItem.textContent = inputDataValue;

            toDoList.appendChild(listItem);
            inputField.value = "";

            addEditButton(listItem);
            addDeleteButton(listItem);
        });
    }

    function addDeleteButton(listItem) {
        var deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.textContent = "Delete Item";
        listItem.appendChild(deleteButton);
        deleteItem(deleteButton, listItem);
    }

    function deleteItem(deleteButton, listItem) {
        deleteButton.addEventListener("click", function () {
            toDoList.removeChild(listItem);
        });
    }

    function addEditButton(listItem) {
        var editButton = document.createElement("button");
        editButton.classList.add("edit-button");
        editButton.innerText = "Edit item";
        listItem.appendChild(editButton);
        transformToEditItem(editButton, listItem);
    }

    function transformToEditItem(editButton, listItem) {
        editButton.addEventListener("click", function () {
            var textList = listItem.firstChild.textContent;

            var editableListItem = document.createElement("li");
            editableListItem.classList.add("todo-list-item");

            var inputField = document.createElement("input");
            inputField.className = "edit-input";
            inputField.type = "text";
            inputField.value = textList;

            var saveButton = document.createElement("button");
            saveButton.classList.add("save-button");
            saveButton.textContent = "Save changes";

            var cancelButton = document.createElement("button");
            cancelButton.classList.add("cancel-button");
            cancelButton.textContent = "Cancel";

            toDoList.removeChild(listItem);
            toDoList.appendChild(editableListItem);
            editableListItem.appendChild(inputField);

            editableListItem.appendChild(saveButton);
            editableListItem.appendChild(cancelButton);

            cancelAction(cancelButton, editableListItem, textList);
            saveItem(saveButton, editableListItem, inputField);
        });
    }

    function saveItem(saveButton, editableListItem, inputField) {
        saveButton.addEventListener("click", function () {
            var textInputField = inputField.value;

            if (textInputField === "") {
                alert("Input field is empty! Try again...");
            } else {
                toDoList.removeChild(editableListItem);
                returnToInitialListItemState(textInputField);
            }
        });
    }

    function cancelAction(cancelButton, editableListItem, textList) {
        cancelButton.addEventListener("click", function () {
            toDoList.removeChild(editableListItem);
            returnToInitialListItemState(textList);
        });
    }

    function returnToInitialListItemState(text) {
        var listItem = document.createElement("li");
        listItem.classList.add("todo-list-item");
        listItem.textContent = text;
        toDoList.appendChild(listItem);
        addEditButton(listItem);
        addDeleteButton(listItem);
    }

    document.addEventListener("DOMContentLoaded", initPage);
})();