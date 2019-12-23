import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})

export class ContactListComponent implements OnInit {
  dataJson = 'http://demo5838836.mockable.io/contact';
  contactInfo = [];
  
  constructor(public http: HttpClient) { }
  
  request = this.http.get(this.dataJson)
  .subscribe((data: Array<any>) => {
  
    for (const index in data) {
      this.contactInfo.push(data[index]);
    }

    return this.contactInfo;
  })
  
  ngOnInit() {
    
  }
}
