import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  firstName;
  lastName;
  company;
  email;
  phone;
  address;
  
  contactForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    company: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    address: ['', Validators.required]
  })
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    this.firstName = this.contactForm.value.firstName;
    this.lastName = this.contactForm.value.lastName;
    this.company = this.contactForm.value.company;
    this.email = this.contactForm.value.email;
    this.phone = this.contactForm.value.phone;
    this.address = this.contactForm.value.address;
  }
}
