let postsBlock = $("#posts_block");
let titleInput = $("#post_title");
let contentInput = $("#post_content");
let authorsSelect = $("#authors_select");
let createPostBtn = $("#create_post_btn");
let editForm = $("#edit_form");

const BACKEND_URL = 'http://localhost:8080';

const makeRequest = (url, method, data, successCallback) => {
    let settings = {
        url: url,
        method: method,
        data: data,
        success: successCallback
    }

    $.ajax(settings);
}

const loadUsersList = () => {
    makeRequest(BACKEND_URL + '/users', 'get', {}, (response) => {
        authorsSelect.empty();
        for(let user of response){
            authorsSelect.append(`<option value="${user.id}">${user.full_name}</option>`);
        }
    });
}
loadUsersList();

const deletePost = (postId) => {
    makeRequest(
        BACKEND_URL + '/posts', 
        'delete', 
        {post_id: postId},
        (response) => {
            loadPosts();
        }
    );
}

const editPost = (postId) => {
    let new_title = $("#edit_title_input").val();
    let new_content = $("#edit_content_input").val();

    makeRequest(
        BACKEND_URL + '/posts', 
        'put', 
        {
            post_id: postId, 
            new_title, 
            new_content
        }, 
        (response) => {
            editForm.empty();
            loadPosts();
        }
    )
}

const showEditForm = (postId, postTitle, postContent) => {
    editForm.empty();
    editForm.append(`<br><br>`);
    editForm.append(`<input type="text" id="edit_title_input" value="${postTitle}">`);
    editForm.append(`<input type="text" id="edit_content_input" value="${postContent}">`);
    editForm.append(`<button onclick="editPost(${postId})">Ok</button>`);
}

const loadPosts = () => {
    makeRequest(BACKEND_URL + '/posts', 'get', {}, (response) => {
        postsBlock.empty();
        for(let post of response){
            postsBlock.append(`
                <h4>${post.title}</h4>
                <p>${post.content}</p>
                <p>${post.created_datetime}</p>
                <button onclick="deletePost(${post.id})">Delete</button>
                <button onclick="showEditForm(${post.id}, '${post.title}', '${post.content}')">Edit</button>
                <hr>
            `);
        }
    });
}
loadPosts();

const createPost = () => {
    makeRequest(BACKEND_URL + '/posts', 
    'post',
    {
        title: titleInput.val(), 
        content: contentInput.val(), 
        author_id: +authorsSelect.val()
    },
    (response) => {
        titleInput.val('');
        contentInput.val('');
        loadPosts();
    });
}

createPostBtn.click(() => {
    createPost();
});