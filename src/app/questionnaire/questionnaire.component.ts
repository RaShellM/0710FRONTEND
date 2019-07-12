import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { JusService, SmoothieCarton } from '../jus.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})

export class QuestionnaireComponent implements OnInit {
    // On crée une propriété pour le smoothie en cours
  smoothie: Smoothie = {    //ici c'est un fichier json pour le backend
    title: '',
    ingredients: [
      {
        nom: '',
        quantite: '',
      }
      ],
    features: {
      cost: '',
      prepareTime: '',
    },
    advice: '',
    description: '',
    steps: [
      {
        stepText: '',
      }
      ],
    photo: [
      {
        title: '',
        path: '',
        description: '',
      }
      ]
    };

  private _smoothie: SmoothieCarton = {
    title: ''
  }

  //on cree me formGoup
  smoothieForm: FormGroup;

   //importe le formBuilder
  constructor (
    private fb: FormBuilder, 
    private jusService: JusService) { }

  ngOnInit() {
    //on init le form
    this.buildForm();
  }

  // get smoothies(){
  //   return this._smoothies;
  // }
  // get myForm(){
  //   return this.smoothieForm.controls;
  // }
  // //Fonction d'appel de toutes la collection
  // getAllSmoothies(): any{
  //   //Appel du getter
  //   this.smoothieService.getSmoothies()
  //   //inscription au Observable => gestion asyncrone
  //   .subscribe((listSmoothie) =>{
  //     this.smoothies = listSmoothie;
  //   })
  // }

  get myForm() {
    return this.smoothieForm.controls;
  }

    //build le form
  private buildForm() {
    this.smoothieForm = this.fb.group({
      hideRequired: false,
      floatLabel: 'auto',
      title: ['', Validators.required], //input
    });
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.smoothieForm.invalid) {
      return;
    } else {
      this.smoothie.title = this.myForm.title.value;
      this.addSmoothie(this.smoothie);
      console.log(this.smoothie);
    }
  }

  addSmoothie(smoothie: SmoothieCarton) {
    this.jusService.addSmoothie(smoothie)
      .subscribe( (lastInsertSmoothie) => {
        console.log('smoothie inséré', lastInsertSmoothie);
      });
  }


}
