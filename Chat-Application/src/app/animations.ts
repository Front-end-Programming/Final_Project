import {
  trigger,
  transition,
  style,
  animate,
  query,
} from '@angular/animations';

//  sign-in & sign-up
export const fader = trigger('faderAnimation', [
  transition('sign-in <=> sign-up', [
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


// toast message
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


//  add groud & join group
export const uiAnim = trigger('ui', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'scale(0)'
    }),
    animate('200ms ease-out', style({
      opacity: 1,
      transform: 'scale(1)'


    }))
  ]),
  transition(':leave', [
    style({
      opacity: 1

    }),
    animate('200ms ease-out', style({
      opacity: 0
    }))
  ])
]);
