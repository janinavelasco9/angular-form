import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  firstNameDetail;
  lastNameDetail;
  companyDetail;
  emailDetail;
  phoneDetail;
  addressDetail;
  hasSubmitted = false;
  
  contactForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    company: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    address: ['', Validators.required]
  })
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  get email() {
    return this.contactForm.get('email');
  }

  onSubmit() {
    this.firstNameDetail = this.contactForm.value.firstName;
    this.lastNameDetail = this.contactForm.value.lastName;
    this.companyDetail = this.contactForm.value.company;
    this.emailDetail = this.contactForm.value.email;
    this.phoneDetail = this.contactForm.value.phone;
    this.addressDetail = this.contactForm.value.address;
    this.hasSubmitted = !this.hasSubmitted;
  }
}
