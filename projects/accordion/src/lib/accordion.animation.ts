import {
  animate,
  state,
  style,
  transition,
  trigger,
  AnimationTriggerMetadata
} from '@angular/animations';

export const bodyExpansion: AnimationTriggerMetadata = trigger('bodyExpansion', [
  state('collapsed', style({ height: '0px', visibility: 'hidden' })),
  state('expanded', style({ height: '*', visibility: 'visible' })),
  transition('expanded <=> collapsed', animate(`{{time}}ms cubic-bezier(0.4,0.0,0.2,1)`), {
    params: { time: '225' }
  })
]);
