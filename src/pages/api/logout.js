// src/pages/api/logout.js
export const POST = async (context) => {
  // 1. Apaga o cookie de sessão
  context.cookies.delete('user_session', { path: '/' });
  
  // 2. Redireciona o usuário para a tela de login
  return context.redirect('/login');
};