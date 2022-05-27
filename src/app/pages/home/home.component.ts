import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'sm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cardDataForm: any;

  constructor(private cdRef: ChangeDetectorRef,
    private router: Router, ) { }

  ngOnInit() {
    this.creatForm();
  }


  creatForm() {
    this.cardDataForm = new FormGroup({
      number: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
      cvv: new FormControl(null, [Validators.required, Validators.maxLength(3)]),

    });
  }

}
