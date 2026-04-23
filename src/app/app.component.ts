import { Component } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { BotanicalDividerComponent } from './components/botanical-divider/botanical-divider.component';
import { CreationsComponent } from './components/creations/creations.component';
import { ProcessComponent } from './components/process/process.component';
import { AboutComponent } from './components/about/about.component';
import { PullQuoteComponent } from './components/pull-quote/pull-quote.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent,
    HeroComponent,
    BotanicalDividerComponent,
    CreationsComponent,
    ProcessComponent,
    AboutComponent,
    PullQuoteComponent,
    InstagramComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}
