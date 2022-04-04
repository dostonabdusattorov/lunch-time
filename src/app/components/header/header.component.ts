import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.template.html',
  styleUrls: ['header.component.scss'],
})
export class Header {
  active: string = "active";
}
