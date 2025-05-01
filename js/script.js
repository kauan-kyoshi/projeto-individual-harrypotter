document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const cadastroForm = document.getElementById('cadastro-form');
    const logoutButton = document.getElementById('logout-btn');
    const errorMessage = document.getElementById('error-message');
    const welcomeUserSpan = document.getElementById('welcome-user');
    const userHouseInfoDiv = document.getElementById('user-house-info');

    // --- Simulação de Banco de Dados (LocalStorage) ---
    function getUsers() {
        return JSON.parse(localStorage.getItem('hp_users')) || [];
    }

    function saveUsers(users) {
        localStorage.setItem('hp_users', JSON.stringify(users));
    }

    function getCurrentUser() {
        return localStorage.getItem('hp_loggedInUser');
    }

    function setCurrentUser(username) {
        localStorage.setItem('hp_loggedInUser', username);
    }

    function logoutUser() {
        localStorage.removeItem('hp_loggedInUser');
        // Limpar também a casa ao fazer logout
        localStorage.removeItem('hp_userHouse_' + getCurrentUser()); // Ajuste se necessário
    }

    function getUserData(username) {
        const users = getUsers();
        return users.find(user => user.username === username || user.email === username);
    }

    function setUserHouse(username, house) {
        const key = `hp_userHouse_${username}`;
        localStorage.setItem(key, house);
        console.log(`Casa ${house} salva para ${username}`);
    }

    function getUserHouse(username) {
        const key = `hp_userHouse_${username}`;
        return localStorage.getItem(key);
    }


    // --- Lógica de Cadastro ---
    if (cadastroForm) {
        cadastroForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (errorMessage) errorMessage.textContent = ''; // Limpa erro anterior

            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value; // NÃO FAÇA ISSO EM PRODUÇÃO (senha em plain text)

            const users = getUsers();

            // Verifica se usuário ou email já existem
            if (users.some(user => user.username === username)) {
                if (errorMessage) errorMessage.textContent = 'Nome de usuário já existe.';
                return;
            }
            if (users.some(user => user.email === email)) {
                if (errorMessage) errorMessage.textContent = 'Email já cadastrado.';
                return;
            }

            // Adiciona novo usuário (simulado)
            users.push({ username, email, password, house: null }); // Adiciona campo 'house'
            saveUsers(users);

            alert('Cadastro realizado com sucesso! Faça o login.');
            window.location.href = 'login.html';
        });
    }

    // --- Lógica de Login ---
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (errorMessage) errorMessage.textContent = ''; // Limpa erro anterior

            const usernameOrEmail = document.getElementById('username-login').value;
            const password = document.getElementById('password-login').value;

            const users = getUsers();
            const user = users.find(u => (u.username === usernameOrEmail || u.email === usernameOrEmail) && u.password === password); // NÃO FAÇA ISSO EM PRODUÇÃO

            if (user) {
                setCurrentUser(user.username); // Salva o usuário logado
                window.location.href = 'home.html'; // Redireciona para a home
            } else {
                if (errorMessage) errorMessage.textContent = 'Nome de usuário/email ou senha inválidos.';
            }
        });
    }

    // --- Lógica de Logout ---
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            const currentUser = getCurrentUser(); // Pega antes de deslogar
            logoutUser();
            // Opcional: Limpar a casa salva para este usuário
            if (currentUser) {
                localStorage.removeItem(`hp_userHouse_${currentUser}`);
            }
            window.location.href = 'index.html'; // Redireciona para a landing page
        });
    }

    // --- Proteção de Rotas e Exibição de Infos ---
    const protectedPages = ['home.html', 'quiz.html', 'dashboard.html'];
    const currentPage = window.location.pathname.split('/').pop();

    if (protectedPages.includes(currentPage)) {
        const loggedInUser = getCurrentUser();
        if (!loggedInUser) {
            alert('Você precisa estar logado para acessar esta página.');
            window.location.href = 'login.html';
        } else {
            // Exibe mensagem de boas-vindas na home e outras páginas logadas
            if (welcomeUserSpan) {
                welcomeUserSpan.textContent = `Bem-vindo(a), ${loggedInUser}!`;
            }
            // Exibe a casa do usuário na home, se já definida
            if (currentPage === 'home.html' && userHouseInfoDiv) {
                const userHouse = getUserHouse(loggedInUser);
                if (userHouse) {
                    userHouseInfoDiv.innerHTML = `Sua casa: <strong class="${userHouse.toLowerCase()}">${userHouse}</strong>`;
                } else {
                    userHouseInfoDiv.innerHTML = `Você ainda não descobriu sua casa. Faça o quiz!`;
                }
            }
        }
    }

    // --- Funções Globais (podem ser chamadas por outros scripts) ---
    window.hp_getCurrentUser = getCurrentUser;
    window.hp_setUserHouse = setUserHouse;
    window.hp_getUserHouse = getUserHouse;
    window.hp_getUsers = getUsers; // Disponibiliza para dashboard.js

});