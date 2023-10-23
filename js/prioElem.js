let draggedElement = null;

function dragStart(event) {
    draggedElement = event.target;
}

function allowDrop(event) {
    event.preventDefault();
}

function dropElement(event) {
    event.preventDefault();
    if (draggedElement) {
        const dropTarget = event.target;
        const draggedDiv = draggedElement.getAttribute("data-div");
        const dropDiv = dropTarget.getAttribute("data-div");

        if (draggedDiv === dropDiv) {
            const parent = dropTarget.parentElement;
            const currentIndex = [...parent.children].indexOf(dropTarget);

            if (event.clientX < dropTarget.getBoundingClientRect().left + dropTarget.clientWidth / 2) {
                parent.insertBefore(draggedElement, dropTarget);
            } else {
                parent.insertBefore(draggedElement, dropTarget.nextElementSibling);
            }
        }

        draggedElement = null;
    }
}