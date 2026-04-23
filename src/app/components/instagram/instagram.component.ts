import { Component } from '@angular/core';

interface Photo {
  src: string;
}

@Component({
  selector: 'app-instagram',
  standalone: true,
  templateUrl: './instagram.component.html',
})
export class InstagramComponent {
  readonly igUrl = 'https://www.instagram.com/theloopylooms/';

  photos: Photo[] = [
    { src: 'https://raw.githubusercontent.com/pujasen10/loopylooms/refs/heads/main/images/IMG_6628.jpeg' },
    { src: 'https://raw.githubusercontent.com/pujasen10/loopylooms/refs/heads/main/images/IMG_6883.jpeg' },
    { src: 'https://raw.githubusercontent.com/pujasen10/loopylooms/refs/heads/main/images/IMG_6902.jpeg' },
    { src: 'https://raw.githubusercontent.com/pujasen10/loopylooms/refs/heads/main/images/IMG_6919.jpeg' },
    { src: 'https://raw.githubusercontent.com/pujasen10/loopylooms/refs/heads/main/images/IMG_7170.jpeg' },
    { src: 'https://raw.githubusercontent.com/pujasen10/loopylooms/refs/heads/main/images/IMG_1111.jpeg' },
    { src: 'https://raw.githubusercontent.com/pujasen10/loopylooms/refs/heads/main/images/IMG_6998.jpeg' },
    { src: 'https://raw.githubusercontent.com/pujasen10/loopylooms/refs/heads/main/images/IMG_7363.jpeg' },
  ];
}
