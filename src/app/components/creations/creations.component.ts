import { Component } from '@angular/core';

interface Card {
  img: string;
  alt: string;
  tag: string;
  name: string;
  desc: string;
}

@Component({
  selector: 'app-creations',
  standalone: true,
  templateUrl: './creations.component.html',
})
export class CreationsComponent {
  cards: Card[] = [
    {
      img: 'https://raw.githubusercontent.com/pujasen10/loopylooms/refs/heads/main/images/IMG_6520.jpeg',
      alt: 'Tiny crochet winter hats on milk bottles with amigurumi characters in background',
      tag: 'Amigurumi',
      name: 'Characters & Plushies',
      desc: 'From Totoro to tiny chicks — handstitched characters brought to life with chunky yarn and a lot of personality.',
    },
    {
      img: 'https://raw.githubusercontent.com/pujasen10/loopylooms/refs/heads/main/images/IMG_7128.jpeg',
      alt: 'Crochet duck-in-a-cloud keychain charm held in palm of hand',
      tag: 'Accessories',
      name: 'Bag Charms & Keychains',
      desc: 'Dainty crocheted charms to hang from your bag, keys or anywhere you like — each one small, but made with a whole lot of care.',
    },
    {
      img: 'https://raw.githubusercontent.com/pujasen10/loopylooms/refs/heads/main/images/IMG_8103.jpeg',
      alt: 'Handmade crochet flower coaster in soft blue with scalloped edge and cream bow',
      tag: 'Home Decor',
      name: 'Coasters & Decor',
      desc: 'Flower-shaped coasters and soft home accents that bring a handmade touch to any space — each one a little labour of love.',
    },
  ];
}
