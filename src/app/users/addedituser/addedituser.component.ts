import { Component, OnInit } from '@angular/core';
import { AppService,User } from 'src/app/app.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-addedituser',
  templateUrl: './addedituser.component.html',
  styleUrls: ['./addedituser.component.css']
})
export class AddedituserComponent implements OnInit {
  
  user: User = { id: 0, name: "", address: "" };

  constructor( public appService: AppService,private router: Router,private route: ActivatedRoute) 
    { 
      
      console.log("route", this.route);
      this.route.paramMap.subscribe(params => {
      const id = Number(params.get("id"));
      console.log("pageId", id);
      this.user = this.appService.getUser(id);
    });
  }

  ngOnInit(): void {
  }
  onCancel() {
    this.router.navigateByUrl("/users");
  }

  onSave() {
    if (this.user.id > 0) {
      this.appService.updateUser(this.user);
    } else {
      this.appService.addUser(this.user);
    }
    this.router.navigateByUrl("/users");
  }

  onDelete() {
    this.appService.deleteUser(this.user.id);
    this.router.navigateByUrl("/users");
  }
}
