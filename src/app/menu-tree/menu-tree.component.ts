import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-menu-tree',
  templateUrl: './menu-tree.component.html',
  styleUrls: ['./menu-tree.component.css']
})
export class MenuTreeComponent implements OnInit {
  @Input() menuTree: any;

  constructor() { }

  ngOnInit() {

  }

  onItemMouseEnter($event, item, menuItem){
    item.nextElementSibling.style.display = 'block';
    item.nextElementSibling.style.position='absolute';
    item.nextElementSibling.style.zIndex=10;
  }

  onItemMouseLeave($event, item, menuItem){
    item.nextElementSibling.style.display = 'none';
    // item.nextElementSibling.style.position='absolute';
    // item.nextElementSibling.style.zIndex=10;
  }
}
