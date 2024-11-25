import { ContactService } from './../../../services/contact/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactData:any;
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
	  this.getContactData();
  }
  
  
  
  getContactData(): void {
	const languageId = Number(localStorage.getItem("languageId"));
	  this.contactService.getContact(languageId).subscribe({
		next: (response) => {
		  console.log('contact Data:', response); // Veriyi kontrol etmek için
		  if (response.statusCode==200) {
			this.contactData=response.data
		  }
		  
		},
		error: (err) => {
		  console.error('contact verisi alınamadı:', err);
		},
	  });
  }
}
