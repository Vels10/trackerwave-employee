import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[];
  editState : boolean = false;
  itemToEdit : Item;


  constructor(public itemService: ItemService) { }

  ngOnInit(){
    this.itemService.getItems().subscribe(items => {
      //console.log(items);
      this.items = items;
    });
  }
  // Compress Button

  clearItem(){
    this.editState = false;
    this.itemToEdit = null;
  }

  updateItem(item : Item){
    this.itemService.updateItem(item);
    this.clearItem();
  }

  deleteItem(event, item : Item){
    this.clearItem();
    this.itemService.deleteItem(item);
  }

  // Pencil Button
  editItem(event, item : Item){
    this.editState = true;
    this.itemToEdit = item;
  }

}
