import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

import { mount } from 'cypress/angular'

import { AppComponent } from "../../src/app/app.component";

Given("I render the component", () => {
  mount(AppComponent);
});
