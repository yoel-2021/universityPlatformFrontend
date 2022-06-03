import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  
  @Input() icon: string | undefined;
  @Input() route: string | undefined;
  @Input() text: string | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}
