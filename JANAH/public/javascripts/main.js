const buildHTMLUser = (user) => {
    return `
    <tr class="border-b border-gray-200 hover:bg-gray-100">
    <td class="py-3 px-6 text-left whitespace-nowrap">
        <div class="flex items-center">
            <span class="font-medium font-bold" style="color:#b40000">${user.id}</span>
        </div>
    </td>
    <td class="py-3 px-6 text-left">
        <div class="flex items-center">
            <span class="font-bold">${user.username}</span>
        </div>
    </td>
    <td class="py-3 px-6 text-center">
        <div class="flex items-center">
            <span class="font-bold">${user.email}</span>
        </div>
    </td>
    <td class="py-3 px-6">
        <div class="flex items-center">
            <span class="font-bold">${user.role}</span>
        </div>
    </td>
    <td class="py-3 px-6 text-center">
        <div class="flex item-center justify-center">
            <div class="w-4 mr-2 transform hover:text-red-500 hover:scale-110" id="modal_open modify_user" data-user-id="${user.id}" data-user-username="${user.username}" data-user-email="${user.email}" data-user-role="${user.role}">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="modal_open modify_user" data-user-id="${user.id}" data-user-username="${user.username}" data-user-email="${user.email}" data-user-role="${user.role}">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
            </div>
            <div class="w-4 mr-2 transform hover:text-red-500 hover:scale-110" id="modal_open remove_user" data-user-id="${user.id}" data-user-username="${user.username}">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="modal_open remove_user" data-user-id="${user.id}" data-user-username="${user.username}">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </div>
        </div>
    </td>
    </tr>
    `
}

/* Limit & Offset */

const getLimit = () => {
    return document.querySelector("#select_pagination").value;
}

const getOffset = () => {
    return document.querySelector("#current_entries").textContent;
}

const getFrom = () => {
    return document.querySelector("#from_entries").textContent;
}

var limit = getLimit();
var offset = 0;
var count;

const URL = "/users"

const getAllUsers = async() => {
    document.querySelector("#table").empty(); // avoid duplication
    const response = await fetch(`${URL}/?offset=${offset}&limit=${limit}`, { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } });
    if (response.ok) {
        const _response = await response.json();
        const users = _response.rows;
        count = _response.count;
        document.querySelector("#total_entries").textContent = count;
        document.querySelector('#from_entries').textContent = (parseInt(offset) == 0) ? parseInt(offset) + 1 : parseInt(offset);
        users.forEach((user, index) => {
            document.querySelector("#table").innerHTML += buildHTMLUser(user);
            document.querySelector("#current_entries").textContent = parseInt(offset) + index + 1;
        });
    }

}

const getUser = async(value) => {
    document.querySelector("#table").empty(); // avoid duplication
    const response = await fetch(`${URL}/${value}`, { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } });
    if (response.ok) {
        const _response = await response.json();
        const user = _response;
        document.querySelector("#table").innerHTML += buildHTMLUser(user);
        document.querySelector("#total_entries").textContent = 1;
        document.querySelector('#from_entries').textContent = 1;
        document.querySelector("#current_entries").textContent = 1;
    }
}

const updateUser = async(user) => {
    const response = await fetch(URL, {
        method: 'PUT',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    });
    if (response.ok) {
        const _response = await response.json();
        if (_response.error) {
            return AlertError("Update User", _response.error);
        }
        AlertSuccess("Update User", (_response.done == 1) ? "User updated successfuly" : "Failed to Update user")
        document.querySelector('#modal_close').click();
        getAllUsers();
    }
}

const addUser = async(user) => {
    const response = await fetch(URL, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    });
    if (response.ok) {
        const _response = await response.json();
        if (_response.error) {
            return AlertError("Create User", _response.error);
        }
        AlertSuccess("Create User", "User Created successfuly")
        document.querySelector('#modal_close').click();
        getAllUsers();
    }
}

const deleteUser = async(id) => {
    const response = await fetch(`${URL}/${id}`, { method: 'DELETE', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } });
    if (response.ok) {
        const _response = await response.json();
        if (_response.error) {
            return AlertError("Delete User", _response.error);
        }
        AlertSuccess("Delete User", (_response.done == 1) ? "User deleted successfuly" : "Failed to delete user")
        document.querySelector('#modal_close').click();
        getAllUsers();
    }
}

const AlertError = (title, text) => {
    swal({
        title: title,
        text: text,
        icon: "error",
        button: {
            text: "OK",
            value: true,
            visible: true,
            className: "red-button",
            closeModal: true,
        }
    });
}

const AlertSuccess = (title, text) => {
    swal({
        title: title,
        text: text,
        icon: "success",
        button: {
            text: "OK",
            value: true,
            visible: true,
            className: "red-button",
            closeModal: true,
        }
    });
}

const UsersUpdateEvents = async() => {
    const update_btn = document.querySelector("#update_btn");
    update_btn.addEventListener("click", () => {
        let user = {}
        user.username = document.querySelector("#update_username").value;
        user.email = document.querySelector("#update_email").value;
        user.current_password = document.querySelector("#update_password_1").value;
        user.new_password = document.querySelector("#update_password_2").value;
        user.role = document.querySelector("#update_role").value;
        updateUser(user)
    })
}

const UsersAddEvents = async() => {
    const add_btn = document.querySelector("#add_btn");
    add_btn.addEventListener("click", () => {
        let user = {}
        user.username = document.querySelector("#add_username").value;
        user.email = document.querySelector("#add_email").value;
        user.password_1 = document.querySelector("#add_password_1").value;
        user.password_2 = document.querySelector("#add_password_2").value;
        user.role = document.querySelector("#add_role").value;
        addUser(user);
    })
}

const UsersDeleteEvents = async(user_id) => {
    const delete_btn = document.querySelector("#delete_btn");
    delete_btn.addEventListener("click", () => {
        deleteUser(user_id);
    })
}


// empty an element
HTMLElement.prototype.empty = function() {
    var that = this;
    while (that.hasChildNodes()) {
        that.removeChild(that.lastChild);
    }
};

const buildDeleteUser = (target) => {
    const modal_header = document.querySelector("#modal_header");
    const modal_body = document.querySelector("#modal_body");
    const modal_footer = document.querySelector("#modal_footer");
    modal_header.empty()
    modal_body.empty()
    modal_footer.empty()
    modal_body.classList.remove("flex");
    modal_header.textContent = "Delete user";

    const username = target.getAttribute('data-user-username');
    const user_id = target.getAttribute('data-user-id');
    modal_body.innerHTML = `Are you sure you want to delete <span style="color:rgb(180, 0, 0)" class="font-bold">${username}</span> ?`;
    const button_cancel = document.createElement("button");
    const text_cancel = document.createTextNode("Cancel");
    button_cancel.appendChild(text_cancel)
    button_cancel.classList = "text-white text-base font-semibold px-6 py-2 rounded-lg";
    button_cancel.style.backgroundColor = "grey";
    button_cancel.id = "modal_close";
    modal_footer.appendChild(button_cancel)
    const button_delete = document.createElement("button");
    const text_delete = document.createTextNode("Delete");
    button_delete.appendChild(text_delete)
    button_delete.classList = "text-white text-base font-semibold px-6 py-2 rounded-lg";
    button_delete.style.backgroundColor = "rgb(180, 0, 0)";
    button_delete.id = "delete_btn";
    modal_footer.appendChild(button_delete)
    UsersDeleteEvents(user_id)
}

const buildUpdateUser = (target) => {
    const modal_header = document.querySelector("#modal_header");
    const modal_body = document.querySelector("#modal_body");
    const modal_footer = document.querySelector("#modal_footer");
    modal_header.empty()
    modal_body.empty()
    modal_footer.empty()
    modal_body.classList.add("flex");
    modal_header.textContent = "Update user";

    const input_username = document.createElement("input");
    input_username.type = "text";
    input_username.id = "update_username";
    input_username.classList = "focus:outline-none text-sm text-black rounded-md py-2 pl-2 mb-2";
    input_username.style.border = "2px solid rgb(180, 0, 0)"
    input_username.placeholder = "Enter username";
    input_username.value = target.getAttribute('data-user-username');
    const input_username_label = document.createElement("label");
    input_username_label.textContent = "username : ";
    input_username_label.for = "update_username";
    modal_body.appendChild(input_username_label)
    modal_body.appendChild(input_username)

    const input_email = document.createElement("input");
    input_email.type = "text";
    input_email.id = "update_email";
    input_email.classList = "focus:outline-none text-sm text-black rounded-md py-2 pl-2 mb-2";
    input_email.style.border = "2px solid rgb(180, 0, 0)"
    input_email.style.backgroundColor = "#d0cdcd";
    input_email.placeholder = "Enter email";
    input_email.value = target.getAttribute('data-user-email');
    input_email.disabled = true;
    const input_email_label = document.createElement("label");
    input_email_label.textContent = "email : ";
    input_email_label.for = "update_email";
    modal_body.appendChild(input_email_label)
    modal_body.appendChild(input_email)

    const input_password_1 = document.createElement("input");
    input_password_1.type = "password";
    input_password_1.id = "update_password_1";
    input_password_1.classList = "focus:outline-none text-sm text-black rounded-md py-2 pl-2 mb-2";
    input_password_1.style.border = "2px solid rgb(180, 0, 0)"
    input_password_1.placeholder = "Enter Current Password";
    const input_password_1_label = document.createElement("label");
    input_password_1_label.textContent = "Current Password : ";
    input_password_1_label.for = "update_password_1";
    modal_body.appendChild(input_password_1_label)
    modal_body.appendChild(input_password_1)

    const input_password_2 = document.createElement("input");
    input_password_2.type = "password";
    input_password_2.id = "update_password_2";
    input_password_2.classList = "focus:outline-none text-sm text-black rounded-md py-2 pl-2 mb-2";
    input_password_2.style.border = "2px solid rgb(180, 0, 0)"
    input_password_2.placeholder = "Enter New Password";
    const input_password_2_label = document.createElement("label");
    input_password_2_label.textContent = "New Password : ";
    input_password_2_label.for = "update_password_2";
    modal_body.appendChild(input_password_2_label)
    modal_body.appendChild(input_password_2)

    const select_role = document.createElement("select");
    select_role.id = "update_role";
    select_role.classList = "focus:outline-none text-sm text-black rounded-md py-2 pl-2";
    select_role.style.border = "2px solid rgb(180, 0, 0)"
    select_role.style.backgroundColor = "#fff";

    const option = document.createElement("option");
    option.value = target.getAttribute('data-user-role');
    option.text = target.getAttribute('data-user-role');
    select_role.appendChild(option);
    var roles = [];
    switch (target.getAttribute('data-user-role')) {
        case 'admin':
            roles = ['author', 'guest'];
            break;
        case 'author':
            roles = ['admin', 'guest'];
            break;
        case 'guest':
            roles = ['admin', 'author'];
            break;
        default:
            roles = ['admin', 'author', 'guest'];
    }
    for (var i = 0; i < 2; i++) {
        const option = document.createElement("option");
        option.value = roles[i];
        option.text = roles[i];
        select_role.appendChild(option);
    }
    const select_role_label = document.createElement("label");
    select_role_label.textContent = "role : ";
    select_role_label.for = "update_role";
    modal_body.appendChild(select_role_label)
    modal_body.appendChild(select_role)

    const button_cancel = document.createElement("button");
    const text_cancel = document.createTextNode("Cancel");
    button_cancel.appendChild(text_cancel)
    button_cancel.classList = "text-white text-base font-semibold px-6 py-2 rounded-lg";
    button_cancel.style.backgroundColor = "grey";
    button_cancel.id = "modal_close";
    modal_footer.appendChild(button_cancel)
    const button_update = document.createElement("button");
    const text_update = document.createTextNode("Update");
    button_update.appendChild(text_update)
    button_update.classList = "text-white text-base font-semibold px-6 py-2 rounded-lg";
    button_update.style.backgroundColor = "rgb(180, 0, 0)";
    button_update.id = "update_btn";
    modal_footer.appendChild(button_update)
    UsersUpdateEvents();
}

const buildAddUser = (target) => {
    const modal_header = document.querySelector("#modal_header");
    const modal_body = document.querySelector("#modal_body");
    const modal_footer = document.querySelector("#modal_footer");
    modal_header.empty()
    modal_body.empty()
    modal_footer.empty()
    modal_body.classList.add("flex");
    modal_header.textContent = "Create user";

    const input_username = document.createElement("input");
    input_username.type = "text";
    input_username.id = "add_username";
    input_username.classList = "focus:outline-none text-sm text-black rounded-md py-2 pl-2 mb-2";
    input_username.style.border = "2px solid rgb(180, 0, 0)"
    input_username.placeholder = "Enter username";
    const input_username_label = document.createElement("label");
    input_username_label.textContent = "username : ";
    input_username_label.for = "add_username";
    modal_body.appendChild(input_username_label)
    modal_body.appendChild(input_username)

    const input_email = document.createElement("input");
    input_email.type = "text";
    input_email.id = "add_email";
    input_email.classList = "focus:outline-none text-sm text-black rounded-md py-2 pl-2 mb-2";
    input_email.style.border = "2px solid rgb(180, 0, 0)"
    input_email.placeholder = "Enter email";
    const input_email_label = document.createElement("label");
    input_email_label.textContent = "Email : ";
    input_email_label.for = "add_email";
    modal_body.appendChild(input_email_label)
    modal_body.appendChild(input_email)

    const input_password_1 = document.createElement("input");
    input_password_1.type = "password";
    input_password_1.id = "add_password_1";
    input_password_1.classList = "focus:outline-none text-sm text-black rounded-md py-2 pl-2 mb-2";
    input_password_1.style.border = "2px solid rgb(180, 0, 0)"
    input_password_1.placeholder = "Enter Password";
    const input_password_1_label = document.createElement("label");
    input_password_1_label.textContent = "Password : ";
    input_password_1_label.for = "add_password_1";
    modal_body.appendChild(input_password_1_label)
    modal_body.appendChild(input_password_1)

    const input_password_2 = document.createElement("input");
    input_password_2.type = "password";
    input_password_2.id = "add_password_2";
    input_password_2.classList = "focus:outline-none text-sm text-black rounded-md py-2 pl-2 mb-2";
    input_password_2.style.border = "2px solid rgb(180, 0, 0)"
    input_password_2.placeholder = "Re-type Password";
    const input_password_2_label = document.createElement("label");
    input_password_2_label.textContent = "Re-type Password : ";
    input_password_2_label.for = "add_password_2";
    modal_body.appendChild(input_password_2_label)
    modal_body.appendChild(input_password_2)

    const select_role = document.createElement("select");
    select_role.id = "add_role";
    select_role.classList = "focus:outline-none text-sm text-black rounded-md py-2 pl-2";
    select_role.style.border = "2px solid rgb(180, 0, 0)"
    select_role.style.backgroundColor = "#fff";
    const roles = ['admin', 'author', 'guest'];
    for (var i = 0; i < 3; i++) {
        const option = document.createElement("option");
        option.value = roles[i];
        option.text = roles[i];
        select_role.appendChild(option);
    }
    const select_role_label = document.createElement("label");
    select_role_label.textContent = "role : ";
    select_role_label.for = "add_role";
    modal_body.appendChild(select_role_label)
    modal_body.appendChild(select_role)

    const button_cancel = document.createElement("button");
    const text_cancel = document.createTextNode("Cancel");
    button_cancel.appendChild(text_cancel)
    button_cancel.classList = "text-white text-base font-semibold px-6 py-2 rounded-lg";
    button_cancel.style.backgroundColor = "grey";
    button_cancel.id = "modal_close";
    modal_footer.appendChild(button_cancel)
    const button_add = document.createElement("button");
    const text_add = document.createTextNode("Create");
    button_add.appendChild(text_add)
    button_add.classList = "text-white text-base font-semibold px-6 py-2 rounded-lg";
    button_add.style.backgroundColor = "rgb(180, 0, 0)";
    button_add.id = "add_btn";
    modal_footer.appendChild(button_add)
    UsersAddEvents()
}

const SearchUsers = () => {
    const search_input = document.querySelector("#search_input");
    search_input.addEventListener("keyup", (event) => {
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            const value = search_input.value;
            getUser(value);
        }
    })
}

const addEventListenerToNewElements = (selector, event, handler) => {
    document.querySelector('body').addEventListener(event, function(evt) {
            var targetElement = evt.target;
            while (targetElement != null) {
                const element = targetElement.id.split(" ")
                if (element[0] == selector) {
                    handler(element[1], targetElement);
                    return;
                }
                targetElement = targetElement.parentElement;
            }
        },
        true
    );
}

const updateModel = (id, target) => {
    if (id === "add_user") {
        buildAddUser();
    } else if (id === "modify_user") {
        buildUpdateUser(target)
    } else if (id === "remove_user") {
        buildDeleteUser(target)
    }

}

const Modal = () => {
    const modal = document.getElementById('modal_panel')
        // const modal_close = document.querySelectorAll('#modal_close')

    const openModal = (id, target) => {
        updateModel(id, target)
        modal.classList.remove('hidden')
        modal.classList.add('block')
        modal.classList.add('card_open')
    }

    const closeModal = () => {
        modal.classList.add('hidden')
        modal.classList.remove('block')
        modal.classList.remove('card_open')
    }

    addEventListenerToNewElements("modal_open", "click", openModal)
    addEventListenerToNewElements("modal_close", "click", closeModal)
}

const Pagination = () => {
    document.querySelector('#select_pagination').addEventListener("change", () => {
        limit = getLimit();
        if (isNaN(limit)) {
            limit = -1000;
            offset = 0;
        }
        getAllUsers();
    })
    document.querySelector('#pag_next').addEventListener("click", () => {
        document.querySelector('#pag_prev').disabled = false;
        offset = getOffset();
        limit = getLimit();
        from = getFrom();
        if ((parseInt(offset) + parseInt(from)) >= count) return (document.querySelector('#pag_next').disabled = true);
        offset = parseInt(offset) + parseInt(from)
        limit = parseInt(offset) + parseInt(limit)
        getAllUsers();
    })
    document.querySelector('#pag_prev').addEventListener("click", () => {
        document.querySelector('#pag_next').disabled = false;
        from = getFrom();
        if (offset < 0) return (document.querySelector('#pag_prev').disabled = true);
        from = parseInt(from) - parseInt(getLimit())
        offset = parseInt(offset) - parseInt(getLimit()) - 1
        limit = parseInt(limit) - parseInt(getLimit() - 1) - 2;
        getAllUsers();
    })
}

window.addEventListener("DOMContentLoaded", () => {
    getAllUsers();
    Modal();
    Pagination();
    SearchUsers();
});