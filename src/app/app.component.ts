import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  title = 'Test Shop App';

  private viewChildText = '@ViewChild Works!';
  @ViewChild('myDemoViewChild') private childElement: ElementRef;

  ngAfterViewInit() {
    this.childElement.nativeElement.innerText = this.viewChildText;
  }

}
