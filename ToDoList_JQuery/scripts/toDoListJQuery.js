(function () {
    "use strict";

    $(function () {
        initPage();
    });

    var toDoListJQuery;

    function initPage() {
        toDoListJQuery = $("#notes");

        var addButton = $("#add-button");
        addButton.click(function () {
            var inputField = $("#add-element-field");

            if (inputField.val() === "") {
                return;
            }

            var listItem = $("<li></li>");
            listItem.addClass("todo-list-item");
            listItem.text(inputField.val());

            listItem.appendTo(toDoListJQuery);
            inputField.val("");

            addEditButton(listItem);
            addDeleteButton(listItem);
        });
    }

    function addDeleteButton(listItem) {
        var deleteButton = $("<button></button>");
        deleteButton.addClass("delete-button");
        deleteButton.text("Delete Item");
        listItem.append(deleteButton);
        deleteItem(deleteButton, listItem);
    }

    function deleteItem(deleteButton, listItem) {
        deleteButton.click(function () {
            listItem.remove();
        });
    }

    function addEditButton(listItem) {
        var editButton = $("<button></button>");
        editButton.addClass("edit-button");
        editButton.text("Edit item");
        listItem.append(editButton);
        transformToEditItem(editButton, listItem);
    }

    function transformToEditItem(editButton, listItem) {
        editButton.click(function () {
            var textList = listItem.contents().first().text()

            var editableListItem = $("<li></li>");
            editableListItem.addClass("todo-list-item");

            var inputField = $("<input>");
            inputField.addClass("edit-input");
            inputField.attr("type", "text");
            inputField.val(textList);

            var saveButton = $("<button></button>");
            saveButton.addClass("save-button");
            saveButton.text("Save changes");

            var cancelButton = $("<button></button>");
            cancelButton.addClass("cancel-button");
            cancelButton.text("Cancel");

            listItem.remove();
            toDoListJQuery.append(editableListItem);
            editableListItem.append(inputField);

            editableListItem.append(saveButton);
            editableListItem.append(cancelButton);

            cancelAction(cancelButton, editableListItem, textList);
            saveItem(saveButton, editableListItem, inputField);
        });
    }

    function saveItem(saveButton, editableListItem, inputField) {
        saveButton.click(function () {
            var textInputField = inputField.val();

            if (textInputField === "") {
                alert("Input field is empty! Try again...");
            } else {
                editableListItem.remove();
                returnToInitialListItemState(textInputField);
            }
        });
    }

    function cancelAction(cancelButton, editableListItem, textList) {
        cancelButton.click(function () {
            editableListItem.remove();
            returnToInitialListItemState(textList);
        });
    }

    function returnToInitialListItemState(text) {
        var listItem = $("<li></li>");
        listItem.addClass("todo-list-item");
        listItem.text(text);
        toDoListJQuery.append(listItem);
        addEditButton(listItem);
        addDeleteButton(listItem);
    }
})();