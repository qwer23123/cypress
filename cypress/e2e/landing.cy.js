import './commands'
describe('Landing', () => {
  beforeEach(() => {
    cy.visit('https://linki.group/');
    cy.viewport(1920, 1080);
    cy.wait(500);
    cy.loginViaAuth0('2fexic68934@scarden.com', 'Zxcasdqwe123!!'); // Використовуємо команду логіну
  });


});