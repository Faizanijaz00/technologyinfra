const AUTH_USERNAME = 'teloshouse';
const AUTH_PASSWORD = 'Jilani123';
const AUTH_SESSION_KEY = 'technology_manager_auth';

function setAuthError(message = '') {
    const errorEl = document.getElementById('auth-error');
    if (!errorEl) return;

    errorEl.textContent = message;
    errorEl.classList.toggle('visible', Boolean(message));
}

function lockApplication(message = '') {
    document.body.classList.add('auth-locked');
    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) logoutButton.style.display = 'none';
    setAuthError(message);
}

function unlockApplication() {
    document.body.classList.remove('auth-locked');
    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) logoutButton.style.display = 'inline-flex';
    setAuthError('');
}

function isAuthenticated() {
    return sessionStorage.getItem(AUTH_SESSION_KEY) === 'true';
}

function handleLoginSubmit(event) {
    event.preventDefault();

    const usernameInput = document.getElementById('login-username');
    const passwordInput = document.getElementById('login-password');

    if (!usernameInput || !passwordInput) return;

    if (usernameInput.value !== AUTH_USERNAME || passwordInput.value !== AUTH_PASSWORD) {
        setAuthError('Incorrect username or password.');
        passwordInput.value = '';
        passwordInput.focus();
        return;
    }

    sessionStorage.setItem(AUTH_SESSION_KEY, 'true');
    unlockApplication();
}

function handleLogout() {
    sessionStorage.removeItem(AUTH_SESSION_KEY);
    lockApplication('Signed out.');

    const usernameInput = document.getElementById('login-username');
    const passwordInput = document.getElementById('login-password');

    if (passwordInput) passwordInput.value = '';
    if (usernameInput) usernameInput.focus();
}

function initAuth() {
    if (window.__technologyManagerAuthInitialized) return;
    window.__technologyManagerAuthInitialized = true;

    document.getElementById('login-form')?.addEventListener('submit', handleLoginSubmit);
    document.getElementById('logout-button')?.addEventListener('click', handleLogout);

    if (isAuthenticated()) {
        unlockApplication();
        return;
    }

    lockApplication();
    document.getElementById('login-username')?.focus();
}

initAuth();
