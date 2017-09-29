//event bubbling - delete an entire li element and also future added elements 

const list = document.querySelector('#book-list ul');

// delete books
list.addEventListener('click', (e) => {
    if (e.target.className == 'delete') {
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    }
});
