import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  @Output() sectionChange = new EventEmitter<string>();

  onRecipesSelected() {
    this.sectionChange.emit('recipes');
  }

  onShoppingListSelected() {
    this.sectionChange.emit('shopping-list');
  }
}
