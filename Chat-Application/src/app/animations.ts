import {
  trigger,
  transition,
  style,
  animate,
  query,
} from '@angular/animations';

export const fader = trigger('faderAnimation', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        inset: 0,
        opacity: 0,
        transform: 'scale(0) translateY(100%)',
      }),
    ]),

    query(':enter', [
      animate(
        '300ms ease',
        style({ opacity: 1, transform: 'scale(1) translateY(0)' })
      ),
    ]),
  ]),
]);
