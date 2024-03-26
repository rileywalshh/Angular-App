//Imports required for this component.
import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../services/artists.service';
import { Artist } from '../interfaces/Artist';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/*Decorator used to define component. It holds the HTML tag for the component that will be used in the router, it states the component is standalone, it has imports required for the component to function, it has its template HTML, and its stylesheet.*/
@Component({
  selector: 'app-artist-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})

//The database used to store the list of artists and list of featured artists, as well as a way to store the search id input.
export class ArtistListComponent implements OnInit {
  artists: Artist[] = [];
  featuredArtists: Artist[] = [];
  searchId: string = '';

  //This constructor is used to inject the artistService.
  constructor(private artistService: ArtistService) {}

  //This is used to load the artists when the component is initialised.
  ngOnInit(): void {
    this.artists = this.artistService.getArtists();
    this.updateFeaturedArtists();
  }

  //This method is used to refresh the list of artists.
  loadArtists(): void {
    this.artists = this.artistService.getArtists();
  }

  //This method is used to search for an artists using an Id, when a matching id is found it toggles their featured status to true.
  searchAndFeatureArtist(): void {
    this.artistService.featureArtistById(this.searchId);
    this.updateArtistsAndFeatured();
  }

  //Method used to refresh both artists tables when a new artists is featured.
  updateArtistsAndFeatured(): void {
    this.artists = this.artistService.getArtists();
    this.updateFeaturedArtists();
  }

  //Method used to filter through artist for where featured = true and updates the featured artists.
  updateFeaturedArtists(): void {
    this.featuredArtists = this.artists.filter(artist => artist.isFeatured);
  }
}
