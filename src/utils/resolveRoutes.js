const resolveRoutes = (route)=>{
    if (route.length <= 3){
        let validRoute = route === '/' ? route : '/:id'; //if(route === '/'){validRoute=route}else{validRoute= '/:id'}
        return validRoute;
    }
    return `/${route}`;
};

export default resolveRoutes;