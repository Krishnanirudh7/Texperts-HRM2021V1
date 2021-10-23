import { Component, OnInit } from '@angular/core';
import{TexpertsHttpService} from '../../../services/texperts-http.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName: any;
  userSession: any;

  constructor(private texpertsHttpService: TexpertsHttpService) { }

  ngOnInit() {
}
}