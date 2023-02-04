document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("create-task-form");
    const list = document.getElementById("tasks");
    form.addEventListener('submit', (event) =>{
        event.preventDefault();
        let task = document.getElementById("new-task-description");
        createItem(task.value);
        form.reset();
    });

    function createItem(listItem){
        const newItem = document.createElement("li");
        newItem.textContent = `${listItem}`;
    

    const aButton = document.createElement("button");
    aButton.textContent = "X";
    aButton.addEventListener("click", handleDelete);
    newItem.appendChild(aButton);

    list.appendChild(newItem);
    }
    function handleDelete(e) {
        e.target.parentNode.remove();
    }
});
