import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

const isAuthenticatedGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  /* 
  to: a donde voy
  from: de donde vengo
  next: la función para navegar a la persona
  */
  
  const useId = localStorage.getItem('userId');
  /* Aqui caputuro hacía donde queriá navegar el usuario, y con eso cuando se loguee, le enví a ese path */
  localStorage.setItem('lastPath', to.path)
  
  if (!useId) {
    return next({
      name:'login'
    })
  }

  return next();
};

export default isAuthenticatedGuard;
