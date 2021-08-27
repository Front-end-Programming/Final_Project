import {
  trigger,
  transition,
  style,
  animate,
  query,
} from '@angular/animations';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';

export const fader = trigger('faderAnimation', [
  transition('* <=> *', [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          inset: 0,
          opacity: 0,
          transform: 'scale(0) translateY(100%)',
        }),
      ],
      { optional: true }
    ),

    query(
      ':enter',
      [
        animate(
          '300ms ease',
          style({ opacity: 1, transform: 'scale(1) translateY(0)' })
        ),
      ],
      { optional: true }
    ),
  ]),
]);

export const slideIn = trigger('toast', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(100%)',
    }),

    animate(
      '300ms ease-out',
      style({
        opacity: 1,
        transform: 'translateX(0%)',
      })
    ),
  ]),

  transition(':leave', [
    style({
      opacity: 1,
      transform: 'translateX(0%)',
    }),
    animate(
      '300ms ease-out',
      style({
        opacity: 0,
        transform: 'translateX(100%)',
      })
    ),
  ]),
]);

export const uiAnim = trigger('ui', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'scale(0)'
    }),
    animate('300ms ease-out', style({
      opacity: 1,
      transform: 'scale(1)'


    }))
  ]),
  transition(':leave', [
    style({
      opacity: 1

    }),
    animate('300ms ease-out', style({
      opacity: 0
    }))
  ])
]);
