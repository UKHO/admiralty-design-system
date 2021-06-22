import { createHostFactory } from '@ngneat/spectator/jest';

import { ColourBlockComponent } from './colour-block.component';

describe('ColourBlockComponent', () => {
  const createHost = createHostFactory(ColourBlockComponent);

  test('should create', () => {
    const spectator = createHost('<ukho-colour-block>Test</ukho-colour-block>');
    expect(spectator).toBeTruthy();
  });

  test('getTextColour returns white-test when colour is admiralty-blue', () => {
    const spectator = createHost('<ukho-colour-block colour="admiralty-blue">Test</ukho-colour-block>');
    const component = spectator.component;
    const colour = component.getTextColour();
    expect(colour).toBe('white-text');
  });

  test('getTextColour returns white-test when colour is teal', () => {
    const spectator = createHost('<ukho-colour-block colour="teal">Test</ukho-colour-block>');
    const component = spectator.component;
    const colour = component.getTextColour();
    expect(colour).toBe('white-text');
  });

  test('getTextColour returns empty string when colour is bright-blue', () => {
    const spectator = createHost('<ukho-colour-block colour="bright-blue">Test</ukho-colour-block>');
    const component = spectator.component;
    const colour = component.getTextColour();
    expect(colour).toBe('');
  });

  test('the class of the div is set as the colour from the input', () => {
    const spectator = createHost('<ukho-colour-block colour="bright-blue">Test</ukho-colour-block>');
    const component = spectator.query('.colourBlock');
    expect(component.classList).toContain('bright-blue');
  });

  test('click action should be visible if clickAction and actionText is passed', () => {
    const spectator = createHost(
      '<ukho-colour-block colour="bright-blue" [clickAction]="clickAction" [actionText]="actionText">Test</ukho-colour-block>',
      {
        hostProps: {
          clickAction: jest.fn(),
          actionText: 'test',
        },
      },
    );
    const component = spectator.query('.clickAction');
    expect(component).toBeTruthy();
  });

  test('clicking on the click action should call the passed in click action', () => {
    const clickAction = jest.fn();
    const spectator = createHost(
      '<ukho-colour-block colour="bright-blue" [clickAction]="clickAction" [actionText]="actionText">Test</ukho-colour-block>',
      {
        hostProps: {
          clickAction,
          actionText: 'test',
        },
      },
    );
    const component = spectator.query('.clickAction');
    spectator.click(component);
    expect(clickAction).toHaveBeenCalledTimes(1);
  });

  test('click action should have the text that is passed in', () => {
    const clickAction = jest.fn();
    const spectator = createHost(
      '<ukho-colour-block colour="bright-blue" [clickAction]="clickAction" [actionText]="actionText">Test</ukho-colour-block>',
      {
        hostProps: {
          clickAction,
          actionText: 'test',
        },
      },
    );
    const component = spectator.query('.clickAction');

    expect(component.textContent).toBe('test');
  });

  test('the title of colour block should match the one passed in', () => {
    const spectator = createHost('<ukho-colour-block colour="bright-blue" [title]="title">Test</ukho-colour-block>', {
      hostProps: {
        title: 'test',
      },
    });
    const component = spectator.query('.colourBlock');

    expect(component.querySelector('h2').textContent).toBe('test');
  });

  test('the content of the colour block should match the content passed', () => {
    const spectator = createHost(
      '<ukho-colour-block colour="bright-blue" [title]="title"><h5>Test</h5></ukho-colour-block>',
      {
        hostProps: {
          title: 'test',
        },
      },
    );
    const component = spectator.query('.colourBlock');
    expect(component.querySelector('h5').textContent).toBeTruthy();
  });
});
