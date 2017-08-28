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

  onMenuItemClick($event,menuItem){
    var childTemplate = document.getElementById(menuItem.id);
    if($event.target.previousElementSibling.innerHTML == menuItem.collapsedIcon){
      childTemplate.style.display='block';
      if($event.target.previousElementSibling.className == 'material-icons'){
          $event.target.previousElementSibling.innerHTML = menuItem.expandedIcon;
      }      
    }else{
      childTemplate.style.display='none';
      if($event.target.previousElementSibling.className == 'material-icons'){
        $event.target.previousElementSibling.innerHTML = menuItem.collapsedIcon;
      }
    }
  }

  onMenuIconClick($event,menuItem){
    var childTemplate = document.getElementById(menuItem.id);
    if($event.target.innerHTML == menuItem.collapsedIcon){
      childTemplate.style.display='block';
      if($event.target.className == 'material-icons'){
          $event.target.innerHTML = menuItem.expandedIcon;
      }      
    }else{
      childTemplate.style.display='none';
      if($event.target.className == 'material-icons'){
        $event.target.innerHTML = menuItem.collapsedIcon;
      }
    }
  }

}
