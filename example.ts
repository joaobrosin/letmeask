type User = {
    name: string;
    address: {
        city: string;
        uf: string;
    }
};

function showWelcomeMessage(user: User) {
    return `Welcome ${user.name} ${user.address.city}`;
}

showWelcomeMessage({
    name: 'Joao',
    address: {
        city: 'Cwb',
        uf: 'PR'
    }
});