import { Component, OnInit } from '@angular/core';

interface Demo {
  optionalProp?: {
    requiredProp: {
      value: string;
    };
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  test: Demo = {
    optionalProp: {
      requiredProp: {
        value: '',
      },
    },
  };

  ngOnInit() {
    console.log(this.test.optionalProp?.requiredProp.value);
  }
}
