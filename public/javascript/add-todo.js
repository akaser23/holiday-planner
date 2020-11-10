async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="todo-title"]').value;
    const contents = document.querySelector('input[name="todo-contents"]').value;

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            contents
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-todo-form').addEventListener('submit', newFormHandler);