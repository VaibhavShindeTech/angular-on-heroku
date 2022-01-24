import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup; //give the same formGroup name as in the template

  constructor(private formBuilder: FormBuilder) {
    // this.checkoutForm = formBuilder.group({ //building the form using formBuilder
    //   email: new FormControl(), //in the form builder -> we are creating group of the form element 
    //   quantity: new FormControl(),// these should be exactly same as your form
    //   terms: new FormControl()    //we can also have it dynamic
    // });

    this.checkoutForm = formBuilder.group({ //building the form using formBuilder
      email : ['',[Validators.minLength(5),Validators.required,Validators.email]],
      quantity: ['',[Validators.required,Validators.min(5),Validators.max(10)]],
      terms: ['',Validators.requiredTrue]
    });
  }

  ngOnInit(): void {
  }
  postData(){
    console.log(this.checkoutForm);
  }

}
