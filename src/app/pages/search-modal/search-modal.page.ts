import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.page.html',
  styleUrls: ['./search-modal.page.scss'],
})
export class SearchModalPage implements OnInit {
  spotifySelect: boolean = false;
  youtubeSelect: boolean = false;
  userSearchSelect: boolean = true;
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  goBack() {
    this.modalController.dismiss()
  }

  segmentChanged(event: any) {
    switch (event.target.value) {
      case "spotify":
        this.spotifySelect = true;
        this.youtubeSelect = false;
        this.userSearchSelect = false;
        break;
      case "youtube":
        this.youtubeSelect = true;
        this.spotifySelect = false;
        this.userSearchSelect = false;
        break;
      case "user":
        this.userSearchSelect = true;
        this.youtubeSelect = false;
        this.spotifySelect = false;
        break;
    }
  }

  spotifySelectedCheck(): boolean {
    if (this.spotifySelect == true) return true;
    else return false;
  }
  youtubeSelectedCheck(): boolean {
    if (this.youtubeSelect == true) return true;
    else return false;
  }
  userSelectedCheck(): boolean {
    if (this.userSearchSelect == true && this.youtubeSelect == false) return true;
    else return false;
  }
}
