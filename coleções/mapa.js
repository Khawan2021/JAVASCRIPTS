function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Sthephany', 'Admin');
usuarios.set('Khawan', 'Admin');
usuarios.set('Jorge', 'users');
usuarios.set('Natália', 'users');

console.log(getAdmins(usuarios));