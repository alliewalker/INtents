// import { Component, Inject } from '@angular/core';
// import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material'

// export interface DialogData {
//   email: string;
//   message: string;
// }

// @Component({
//   selector: 'app-contact-form',
//   templateUrl: './contact-form.component.html',
//   styleUrls: ['./contact-form.component.css']
// })
// export class ContactFormComponent {

//   constructor(public dialog: MatDialog, 
//     @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  

//   openContact() {
//     const contactRef = this.dialog.open(contactForm); 
//     contactRef.afterClosed().subscribe(result => {
//       console.log('message sent');
//     });
//   }

//   // onNoClick(): void {
//   //   this.contactRef.close()
//   // }s
// }

// @Component({
//   selector: 'contact-form',
//   templateUrl: 'contact-form.html',
//   styleUrls: ['./contact-form.css']
// })
// export class contactForm{};