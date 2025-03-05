const isAuthenticatedGuard = (to, from, next) => { 
  /* 
  to: a donde voy
  from: de donde vengo
  next: la función para navegar a la persona
  */
  
  return next()
};

export default isAuthenticatedGuard