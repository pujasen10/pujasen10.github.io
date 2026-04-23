import { Component } from '@angular/core';

interface Step {
  num: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-process',
  standalone: true,
  templateUrl: './process.component.html',
})
export class ProcessComponent {
  steps: Step[] = [
    {
      num: '01',
      title: 'Find Inspiration',
      desc: 'Every piece starts with nature — petals, bell-shaped blooms, trailing vines and the colours of a quiet garden morning.',
    },
    {
      num: '02',
      title: 'Choose the Yarn',
      desc: 'Premium quality yarn in the softest pastels — blush pinks, sage greens, warm creams and gentle lilacs.',
    },
    {
      num: '03',
      title: 'Stitch by Stitch',
      desc: 'Each piece is handcrafted with patience and precision. No shortcuts — just pure craft, creativity and a lot of love.',
    },
    {
      num: '04',
      title: 'The Finishing Touch',
      desc: 'Every piece is blocked, finished and checked — each knot woven in, every detail considered, until it feels just right.',
    },
  ];
}
