import { optionsKnob, text, withKnobs } from '@storybook/addon-knobs';
import { PhaseBannerComponent } from './phase-banner.component';

export default {
  title: 'Phase Banner',
  component: PhaseBannerComponent,
  decorators: [withKnobs],
};

export const phaseBanner = () => ({
  moduleMetadata: {
    declarations: [PhaseBannerComponent],
  },
  props: {
    phase: optionsKnob('Phase', { Alpha: 'alpha', Beta: 'beta' }, 'alpha', { display: 'inline-radio' }),
    link: text('Feedback Link', 'mailto:feedback@example.com'),
  },
  template: `<ukho-phase-banner [phase]="phase" [link]="link"></ukho-phase-banner>`,
});
