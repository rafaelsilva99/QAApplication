Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
 })

 

describe('Testes', () => {
  const username = 'QA_USER';
  const password = 'qatest123';
  let chartData;



  it('Access page with credentials', () => {
    cy.visit('https://apex.oracle.com/pls/apex/r/danmende/qa-application/home');
    cy.get('#P9999_USERNAME').type(username);
    cy.get('#P9999_PASSWORD').type(password);
    cy.get('#B12601466532783624621').click();


    //Aceder aos dados da tabela
    cy.get('#oj-dvtbase oj-chart oj-component-initnode')
    .invoke('data')
    .then((data) => {
      chartData = data;
    });
  });



  it('Access page with credentials', () => {
    cy.visit('https://apex.oracle.com/pls/apex/r/danmende/qa-application/home');
    cy.get('#P9999_USERNAME').type(username);
    cy.get('#P9999_PASSWORD').type(password);
    cy.get('#B12601466532783624621').click();


    //Access table and change the quantity of order 10 to 20
    cy.get('#C12602635284101750575_HDR').click()
    cy.wait(2000); // aguarda 2 segundos (2000 milissegundos)
    
    cy.get('#R12602633341339750555_ig_column_header_menu_rows').contains('[data-return-value="1"]').click();
    
    //a página não está a carregar a lista de opções, não sendo possivel selecionar a opção 10

    cy.get('#a-GV-cell u-tE').click();
    cy.get('#R12602633341339750555_ig_grid_vc_cur').type('20{enter}');
  });



  it('Access page with credentials', () => {
    cy.visit('https://apex.oracle.com/pls/apex/r/danmende/qa-application/home');
    cy.get('#P9999_USERNAME').type(username);
    cy.get('#P9999_PASSWORD').type(password);
    cy.get('#B12601466532783624621').click();


    //Access table and change the location to Deli
    cy.get('#C12602635284101750575_HDR').click()
    cy.wait(2000); // aguarda 2 segundos (2000 milissegundos)
    
    cy.get('#R12602633341339750555_ig_column_header_menu_rows').contains('[data-return-value="10"]').click();
    
    //a página não está a carregar a lista de opções, não sendo possivel selecionar a opção 10

    cy.get('#a-GV-cell u-tS').click();
    cy.get('#a-Icon icon-popup-lov').click();
    cy.get('#a-IconList').contains('Deli').click();

  });

});
