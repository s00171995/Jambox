import { Component, OnInit } from "@angular/core";
import { DatabaseService } from "../../services/database/database.service";
import { IPost } from "../../interfaces/post-interface";
import { FirebaseAuthService } from "../../services/firebaseAuth/firebase-auth.service";
import { IUser } from "../../interfaces/user-interface";
import { IFollow } from "../../interfaces/follow.interface";
import { FollowService } from "../../services/follow/follow.service";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.scss"]
})
export class PostListComponent implements OnInit {
  posts: IPost[] = [];
  user: IUser;
  following: IFollow[];
  showSpinner: boolean = false;

  constructor(private databaseService: DatabaseService, private auth: FirebaseAuthService, private followingService: FollowService) { }

  ngOnInit() {
    this.showSpinner = true;


    this.getFollowing()

   //this.databaseService.getPosts().subscribe(data => this.posts = data)
    
   this.databaseService.getCurrentUser(this.auth.getCurrentUserID()).subscribe(data => {
      this.user = data
    });
  }

  getFollowing() {
    this.followingService.getFollowedUsers().subscribe(data => {
      this.following = data
      console.log("following", this.following)
      this.showSpinner = false
        this.getPosts(this.following)
    })
  }

  getPosts(following: IFollow[]) {
    
      this.followingService.getFollowedUserPosts(following).subscribe(data => {
        this.posts = data
        console.log("posts", this.posts)
      })
  }
}