function setupPasswordViewer() {
    const passwordInput = document.getElementById("userPassword");
    const passwordViewer = document.getElementById("password-viewer-wrapper");

    const eyeViewIco = document.getElementById("eye-view-ico");
    const eyeHideIco = document.getElementById("eye-hide-ico");

    passwordViewer.addEventListener('click', () => {
        const inputType = passwordInput.getAttribute('type');

        if (inputType === "password") {
            passwordInput.setAttribute('type', 'text');
            eyeHideIco.style.display = "initial";
            eyeViewIco.style.display = "none";
            
        } else {
            passwordInput.setAttribute('type', 'password');
            eyeHideIco.style.display = "none";
            eyeViewIco.style.display = "initial";
        }
    });
}

function handleInputActiveStyle() {
    const inputWrappers = document.querySelectorAll('form .input-wrapper');

    inputWrappers.forEach(inputWrapper => {
        const input = inputWrapper.querySelector('input');

        input.addEventListener('focus', () => {
            inputWrapper.classList.add('is-active');
        });

        input.addEventListener('blur', () => {
            if (!input.value.length > 0) {
                inputWrapper.classList.remove('is-active');
            }  
        });

        if (input.value.length > 0) {
            inputWrapper.classList.add('is-active');
        }
    });
}

handleInputActiveStyle();
setupPasswordViewer();