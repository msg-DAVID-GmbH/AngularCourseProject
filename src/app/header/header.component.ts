import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() featureSelected = new EventEmitter<{ feature: string }>();

  onSelect(feature: string) {
    this.featureSelected.emit({feature: feature});
  }
}
