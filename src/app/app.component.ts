import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  activeSection: string = 'recipes';

  setActiveSection(section: string) {
    this.activeSection = section;
  }

  isRecipesSectionActive() {
    return this.activeSection === 'recipes';
  }

  isShoppingListSectionActive() {
    return this.activeSection === 'shopping-list';
  }
}
