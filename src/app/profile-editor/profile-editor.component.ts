import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
 profilForm = new FormGroup({
   firstName: new FormControl(''),
   lastName: new FormControl(''),
 });
  constructor() { }

  ngOnInit() {
  }

}
