//Imports used for this form component.
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ArtistService } from '../services/artists.service';
import { Artist } from '../interfaces/Artist';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
//import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/*Decorator used to define component. It holds the HTML tag for the component that will be used in the router, it states the component is standalone, it has imports required for the component to function, it has its template HTML, and its stylesheet.*/
@Component({
  selector: 'app-artist-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.css']
})

/*ArtistForm component. uses formgroup to collect and validate any data from the form. it states what fields and what validators are required.*/
export class ArtistFormComponent {
  artistForm = this.fb.group({
    name: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    gender: ['', Validators.required],
    contactInfo: ['', Validators.required],
    artworkType: ['', Validators.required],
    exhibitionDate: ['', Validators.required],
    notes: ['']
  });
  
  //This constructor is used to inject the artistService and the formBuilder that is used above, as well as Router.
  constructor(private artistService: ArtistService, private fb: FormBuilder, private router: Router) {}


 /*This method is responsible for submitting the details of the form, it is called when the submit button is pressed. It uses an if statement to check if the form is valid, if so it will map the values taken from the form to an Artist object, omitting the Id as it will be auto incremented.*/
  onSubmit(): void {
    if (this.artistForm.valid) {
      const formValue = this.artistForm.value;
      const newArtist: Omit<Artist, 'id'> = {
        name: formValue.name as string,
        dob: new Date(),
        gender: formValue.gender as 'Female' | 'Male' | 'Unspecified' | 'Anonymous',
        contactInfo: formValue.contactInfo as string,
        artworks: [{
          type: formValue.artworkType as string,
          exhibitionDate: new Date(),
          specialNotes: formValue.notes || ""
        }], 
        //By default artists will not be featured.
        isFeatured: false
      };
      //Uses ArtistService to add the new artist then resets the form.
      this.artistService.addArtist(newArtist);
      this.artistForm.reset();
      
    } else {
      //Else if the if statement found the form was invalid, it will tell the user what information is required.
      this.artistForm.markAllAsTouched();
    }
  }

}
