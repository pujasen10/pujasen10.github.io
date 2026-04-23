import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  template: `
    <nav>
      <a href="#" class="logo">The Loopy <span>Looms</span></a>
      <ul class="nav-links">
        <li><a href="#creations">Portfolio</a></li>
        <li><a href="#process">Craft</a></li>
        <li><a href="#about">About</a></li>
        <li>
          <a href="https://www.instagram.com/theloopylooms/" target="_blank" rel="noopener" class="nav-ig">
            Instagram
          </a>
        </li>
      </ul>
    </nav>
  `,
})
export class NavComponent {}
