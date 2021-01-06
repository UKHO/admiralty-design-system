import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let spectator: SpectatorHost<CardComponent>;
  const createHost = createHostFactory({ component: CardComponent, disableAnimations: true });

  const testTitle = 'test title';

  it('should create', () => {
    spectator = createHost('<ukho-card></ukho-card>');
    expect(spectator.component).toBeTruthy();
  });

  it('should render the title in an H6', () => {
    spectator = createHost('<ukho-card [title]="title"></ukho-card>', {
      hostProps: {
        title: testTitle
      }
    });
    const title = spectator.query('h6');
    expect(title).not.toBeNull();
    expect(title.textContent.trim()).toEqual(testTitle);
  });

  it('should not render an H6 if no title is passed', () => {
    spectator = createHost('<ukho-card [title]="title"></ukho-card>', {
      hostProps: {
        title: ''
      }
    });
    const title = spectator.query('h6');
    expect(title).toBeNull();
  });

  it('should support transclusion', () => {
    spectator = createHost('<ukho-card><div id="dummy"></div></ukho-card>');
    const transcludedContent = spectator.query('div > div#dummy');
    expect(transcludedContent).not.toBeNull();
  });
});
