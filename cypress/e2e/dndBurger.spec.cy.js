import '@4tw/cypress-drag-drop';
import { 
  ingredientSelector, 
  email, 
  password, 
  dropBoxSelector,
  buttonSelector
} from '../../src/utils/Mocks';

describe('service is available and app works correctly with routers', function() {
  
  beforeEach(function() { 
    cy.visit('http://localhost:3000');
  });

  it('should open homepage by default', function() {
    cy.contains('Соберите бургер');
  });

  it('should open and close ingredient details', function() {
    cy.get(ingredientSelector)
    .first()
    .click();
    cy.contains('Детали ингредиента');

    cy.get('[data-testid=close]')
    .click();
  });

  it('should drag any ingredient and drop to container and logIn', function() {

    cy.get(ingredientSelector)
    .first()
    .drag(dropBoxSelector);

    cy.get(ingredientSelector)
    .last()
    .drag(dropBoxSelector)
    cy.get(buttonSelector).click();

    cy.get('[data-testid=email_input]').type(`${email}{enter}`);
    cy.get('[data-testid=password_input]').type(`${password}{enter}`);
    cy.get(buttonSelector).click();
    cy.contains('Ваш заказ начали готовить');
  });

  });