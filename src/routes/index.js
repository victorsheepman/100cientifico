import Header from '../templates/Header';
import home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
const routes = {
    '/':home,
    '/:id':Character,
    '/contact': 'Contact',
};

const router = async ()=>{
    const header=null || document.getElementById('header');
    const content=null || document.getElementById('Content');

    header.innerHTML = await Header();
    let Hash = getHash();//obtengo el hash
    let route = await resolveRoutes(Hash); //Verificamos que hash este validad
    let render = routes[route] ? routes[route] : Error404; //si lo que esta en la variable route es igual a una clave del objeto routes estara en render si no render valdra Error 404 
    content.innerHTML = await render();
};

export default router;