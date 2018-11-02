import { Component, OnInit } from '@angular/core';
import { NewReleasesService } from '../../services/new-releases/new-releases.service'
import { Results } from '../../interfaces/new-release.interface';
@Component({
  selector: 'app-new-releases-list',
  templateUrl: './new-releases-list.component.html',
  styleUrls: ['./new-releases-list.component.scss']
})
export class NewReleasesListComponent implements OnInit {
  private albums: Results[];
  constructor(private newReleasesService: NewReleasesService ) { }

  ngOnInit() {
    this.newReleasesService.getAlbums().subscribe(data => {
      this.albums = data
    })
  }

}
