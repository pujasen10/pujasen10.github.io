import { Component } from '@angular/core';

@Component({
  selector: 'app-botanical-divider',
  standalone: true,
  template: `
    <div class="botanical-divider" aria-hidden="true">
      <svg width="340" height="44" viewBox="0 0 340 44" fill="none">
        <line x1="20" y1="22" x2="138" y2="22" stroke="#8aa898" stroke-width="1" opacity=".35"/>
        <line x1="202" y1="22" x2="320" y2="22" stroke="#8aa898" stroke-width="1" opacity=".35"/>
        <path d="M165,21L170,13L175,21L170,29Z" fill="#8aa898" opacity=".5"/>
        <path d="M148,22C142,15 133,13 129,17C134,20 141,21 148,22" fill="#8aa898" opacity=".45"/>
        <path d="M192,22C198,15 207,13 211,17C206,20 199,21 192,22" fill="#8aa898" opacity=".45"/>
        <path d="M121,22C115,16 107,14 104,18C109,20 115,21 121,22" fill="#8aa898" opacity=".35"/>
        <path d="M219,22C225,16 233,14 236,18C231,20 225,21 219,22" fill="#8aa898" opacity=".35"/>
        <circle cx="88" cy="22" r="2.5" fill="#8aa898" opacity=".28"/>
        <circle cx="252" cy="22" r="2.5" fill="#8aa898" opacity=".28"/>
        <circle cx="62" cy="22" r="1.6" fill="#8aa898" opacity=".2"/>
        <circle cx="278" cy="22" r="1.6" fill="#8aa898" opacity=".2"/>
      </svg>
    </div>
  `,
})
export class BotanicalDividerComponent {}
