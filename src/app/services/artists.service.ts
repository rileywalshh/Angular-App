//Imports required for service.
import { Injectable } from '@angular/core';
import { Artist } from '../interfaces/Artist'; // Adjust path as needed


//This declares it is at root level and available throughout the app.
@Injectable({
  providedIn: 'root',
})

//Here is the array to store all artists, it first starts out as empty, Also has the artistId which starts at 0 but auto increments.
export class ArtistService {
  private artists: Artist[] = [];
  private artistId = 0;

  constructor() {}

  //Method for adding a new artists to the artist array. the artist will have no Id until after this function.
  addArtist(artist: Omit<Artist, 'id'>): void {
    const newArtist = { ...artist, id: (++this.artistId).toString() };
    this.artists.push(newArtist);
  }

  //This returns the array of artists, which allows components to access it.
  getArtists(): Artist[] {
    return this.artists;
  }

  //This method is used for toggling the featured status of artists.
  featureArtistById(artistId: string): void {
    const index = this.artists.findIndex(artist => artist.id === artistId);
    if (index !== -1) {
      this.artists[index].isFeatured = !this.artists[index].isFeatured;
    }
  }

  //This is where the delete button method would have been.
  // deleteArtist(artistId: string): void {
  //   this.artists = this.artists.filter(artist => artist.id !== artistId);
  // }
}