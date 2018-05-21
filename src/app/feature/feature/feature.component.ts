import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';


@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
