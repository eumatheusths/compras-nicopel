// src/middleware.js
import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const publicRoutes = ['/login', '/cadastro'];
  const currentPath = context.url.pathname;

  // Se for rota pública, deixa passar
  if (publicRoutes.includes(currentPath)) {
    return next();
  }

  // Verifica se tem sessão
  const session = context.cookies.get('user_session')?.json();

  if (!session) {
    return context.redirect('/login');
  }

  // Coloca o usuário no contexto para usarmos nas páginas
  context.locals.user = session;
  
  return next();
});