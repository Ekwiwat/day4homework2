import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Code } from '../code';
import { CurrecnciesCodeService } from '../currecncies-code.service';
import { Post } from '../post';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Post[];
  currenciesCode: Code[];
  form: FormGroup;
  rate: any;
  converted: any;
  // isAmountNumber: boolean = false;
  isAmountValid: boolean = false;
  isCodeSelected: boolean = false;
  path: any;
  // numberRegEx = /\-?\d*\.?\d{1,2}/;


  constructor(private httpClient: HttpClient, private currenciesCodeService: CurrecnciesCodeService, private fb: FormBuilder) {
    this.form = this.fb.group({
      amount: ['', [Validators.required]],
      convertTo: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.currenciesCode = this.currenciesCodeService.getCode();

  }

  onClick() {
    if (this.form.valid) {
      // getRates();
      this.httpClient
        .get(`http://api.exchangeratesapi.io/v1/latest?access_key=5e1af64c7e1e17c5a2c3989a3114ae78&symbols=${this.form.get('convertTo').value}`)
        .subscribe(data => {
          this.posts = data as Post[];
        });
      let values = Object.values(this.posts);
      this.rate = Object.values(values[4]);
      this.converted = this.rate * this.form.get('amount').value;
      console.log(this.converted);
    } else {
      this.isAmountValid = this.form.get('amount').errors?.required;
      this.isCodeSelected = this.form.get('convertTo').errors?.required;
    }
  

  }
}





