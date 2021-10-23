import { NgModule } from '@angular/core';import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { DefaultModule } from '../../shared-modules/default/default.module';
import { FooterComponent } from './footer/footer.component'

@NgModule({
  declarations: [HomeComponent, HeaderComponent, MenuComponent, FooterComponent],
  imports: [
    DefaultModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
