var Personal= require("./models/personal.model");
var bcrypt=require('bcrypt');
var Roles= require("./models/roles.model");

let rol1=new Roles({nombre:'Gerente',estado:1});
rol1.save();

let p=new Personal({
    Nombre:'pancho',
    login:'pancho',
    Celular:123123,
    Genero:'Hombre',
    Fecha_nac:'12/12/2000',
    Ci:123123,
    Apellido_mat:'pancho',
    Apellido_pat:'pancho',
    password:bcrypt.hashSync('pancho',10),
    estado:true,
    Rol:rol1._id
});
p.save();

let p=new Personal({
    Nombre:'Carlos',
    login:'carlos',
    Celular:123123,
    Genero:'Hombre',
    Fecha_nac:'12/12/2000',
    Ci:123123,
    Apellido_mat:'carlos_ap',
    Apellido_pat:'carlos_am',
    password:bcrypt.hashSync('carlos',10),
    estado:true,
    Rol:rol1._id
});
p.save();

/*calculo
    2*5+2= x
resultado del sistema
    x
resultado esperado
    15
match
    x==15
*/