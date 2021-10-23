import { Component, OnInit } from '@angular/core';
import { TexpertsHttpService } from '../../../services/texperts-http.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  currentTranslateLanguage: any;

  constructor(private texpertsHttpService: TexpertsHttpService) { }

  ngOnInit() {

  }

}
