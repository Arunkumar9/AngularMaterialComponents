import { Component,OnInit } from '@angular/core';
import {TreeMenuService} from './app.treemenuservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TreeMenuService]
})
export class AppComponent implements OnInit {
    title = 'app';
    menuTreeData:any[];
    errorMessage:any;

    constructor(private treeMenuService:TreeMenuService){

    }

    ngOnInit() {
        this.treeMenuService.getMenuTreeData()
                            .subscribe(
                                menuData => 
                                {
                                    this.menuTreeData = menuData;
                                }, 
                                error =>  this.errorMessage = <any>error
                            );
    }
}
