const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, ListarTabla } = require('./multiplicar/multiplicar');
//let base = 6;

let comando = argv._[0];
switch (comando) {
    case 'listar':
        ListarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(base)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        break;
}

//console.log(argv);

//let parametro = argv[2];

//let base = parametro.split('=')[1];