import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CardService } from 'src/app/shared/services/card'

@Component({
  selector: 'sm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cardDataForm: any;

  constructor(private cdRef: ChangeDetectorRef,
    private router: Router, private cardservice: CardService) { }

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

  sendData() {
    let data = this.cardDataForm.value;
    this.cardservice.postEfetivar(data).subscribe(

      (response: any) => {
        console.log(response, data)
      },
      (error) => {
        console.log(error)
        let msgErro = 'Ocorreu um erro. Tente novamente mais tarde.';

      }
    );
  }

}
