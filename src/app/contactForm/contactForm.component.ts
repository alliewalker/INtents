import { Component, Inject } from '@angular/core';
// import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material'

// export interface DialogData {
//   email: string;
//   message: string;
// }

@Component({
  selector: 'app-contact-form',
  templateUrl: './contactForm.component.html',
  styleUrls: ['./contactForm.component.css']
})
export class ContactFormComponent {

  // constructor(public dialog: MatDialog) {}
  

  // openContact() {
  //   const contactRef = this.dialog.open(ContactFormComponent); 
  //   contactRef.afterClosed().subscribe(result => {
  //     console.log('message sent');
  //   });
  // }

 
}

// @Component({
//   selector: 'contact-form',
//   templateUrl: 'contactForm.component.html',
//   styleUrls: ['./contactForm.component.css']
// })
// export class contactForm{
//   constructor(public contactRef: MatDialogRef<ContactFormComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData){}

//      onNoClick(): void {
//     this.contactRef.close()
//   }
// };