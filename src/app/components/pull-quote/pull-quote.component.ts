import { Component } from '@angular/core';

@Component({
  selector: 'app-pull-quote',
  standalone: true,
  template: `
    <div class="pull-quote">
      <p class="pq-text">
        "Low calorie addiction 🌿🧶 Just yarn, patience, and a little creativity 🌸"
      </p>
      <p class="pq-source">— The Loopy Looms &nbsp;·&nbsp; &#64;theloopylooms</p>
      <!-- doodle: bottom-left corner leaves -->
      <svg class="doodle" aria-hidden="true"
           style="bottom:0;left:0;width:108px;opacity:.22;"
           viewBox="0 0 110 110" fill="none">
        <path d="M8,105C18,82 38,62 58,50C72,42 90,37 95,22C76,36 52,56 8,105" fill="currentColor" opacity=".7"/>
        <path d="M8,105C28,79 55,58 82,34" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/>
        <path d="M44,68C34,53 30,38 36,27C40,40 43,55 44,68" fill="currentColor" opacity=".55"/>
        <circle cx="90" cy="20" r="3" fill="currentColor" opacity=".5"/>
        <circle cx="104" cy="8" r="2" fill="currentColor" opacity=".35"/>
      </svg>
      <!-- doodle: top-right corner leaves (mirrored) -->
      <svg class="doodle" aria-hidden="true"
           style="top:0;right:0;width:108px;opacity:.22;transform:scale(-1,-1);"
           viewBox="0 0 110 110" fill="none">
        <path d="M8,105C18,82 38,62 58,50C72,42 90,37 95,22C76,36 52,56 8,105" fill="currentColor" opacity=".7"/>
        <path d="M8,105C28,79 55,58 82,34" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/>
        <path d="M44,68C34,53 30,38 36,27C40,40 43,55 44,68" fill="currentColor" opacity=".55"/>
        <circle cx="90" cy="20" r="3" fill="currentColor" opacity=".5"/>
        <circle cx="104" cy="8" r="2" fill="currentColor" opacity=".35"/>
      </svg>
    </div>
  `,
})
export class PullQuoteComponent {}
