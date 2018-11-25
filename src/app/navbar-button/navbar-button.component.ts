import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-button',
  templateUrl: './navbar-button.component.html',
  styleUrls: ['./navbar-button.component.css']
})
export class NavbarButtonComponent implements OnInit {

  @Input() router_link: string;

  constructor() { }

  ngOnInit() {
  }

}
