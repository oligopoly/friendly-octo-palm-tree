import { Component } from '@angular/core';
import { ObservableMedia, MediaChange } from "@angular/flex-layout";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: 'mu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component..scss']
})
export class AppComponent {
  title = 'mu';
  mobileMode: Observable<boolean>;

  constructor(private media: ObservableMedia)
  {
    this.mobileMode = this.media.asObservable()
      .pipe(map(MediaChange=>{
            console.log(MediaChange.mqAlias);
            return MediaChange.mqAlias!=='xs'? true: false;
          }))
  } //test
}