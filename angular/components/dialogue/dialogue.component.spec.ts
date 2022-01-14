import { createHostFactory } from '@ngneat/spectator/jest';

import { DialogueComponent } from './dialogue.component';

describe('DialogueComponent', () => {
  const createHost = createHostFactory({ component: DialogueComponent });
  it('should create', () => {
    const spectator = createHost(
      '<ukho-dialogue><h3>Basic Title</h3><div>Some content in the dialogue</div></ukho-dialogue>'
    );
    expect(spectator.component).toBeTruthy();
  });
});
