import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  item : Item = {
    Name : '',
    Address  : '',
    Designation : '',
    Employee_Id : null,
    Joining_date : new Date(0),
    DOB : new Date(0)
  }
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.item.Name != ''){
      this.itemService.addItem(this.item);
      this.item.Name = '';
      this.item.Address  = '';
      this.item.Designation = '';
      this.item.Employee_Id = null;
      this.item.Joining_date = new Date(0);
      this.item.DOB = new Date(0);
    }
  }

}
