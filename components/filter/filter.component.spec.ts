import { By } from '@angular/platform-browser';
import { createHostFactory } from '@ngneat/spectator';
import { MockComponent } from 'ng-mocks';

import { FilterComponent } from './filter.component';
import { FilterGroup } from './filter.types';

import { ButtonComponent } from '../button/button.module';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { ExpansionComponent } from '../expansion/expansion.module';

describe('FilterComponent', () => {
  const createHost = createHostFactory({
    component: FilterComponent,
    declarations: [
      FilterComponent,
      MockComponent(ButtonComponent),
      MockComponent(CheckboxComponent),
      MockComponent(ExpansionComponent),
    ],
  });

  const mockGroups: FilterGroup[] = [
    {
      title: 'Product',
      items: [
        {
          title: 'AVCS',
        },
        {
          title: 'ADP',
        },
      ],
    },
    {
      title: 'Media type',
      items: [
        {
          title: 'DVD',
        },
        {
          title: 'CD',
        },
        {
          title: 'BASE',
        },
        {
          title: 'ZIP',
        },
      ],
    },
    {
      title: 'Week number',
      items: [
        {
          title: 'Week 39',
        },
        {
          title: 'Week 40',
        },
      ],
    },
    {
      title: 'Year',
      items: [
        {
          title: '2022',
        },
        {
          title: '2021',
        },
        {
          title: '2020',
        },
      ],
    },
  ];

  it('should create', () => {
    const spectator = createHost('<ukho-filter></ukho-filter>');
    expect(spectator.component).toBeTruthy();
  });

  it('should render the groups', () => {
    const spectator = createHost('<ukho-filter [groups]="groups"></ukho-filter>', {
      hostProps: {
        groups: mockGroups,
      },
    });

    const expansionElements = spectator.queryAll('ukho-expansion');
    expect(expansionElements.length).toBe(4);
    const itemElements = spectator.queryAll('ukho-checkbox');
    expect(itemElements.length).toBe(11);
  });

  it('should render the groups with inital expansion and selection values set', () => {
    const groups: FilterGroup[] = [
      {
        ...mockGroups[0],
        items: [{ ...mockGroups[0].items[0], selected: true }, ...mockGroups[0].items.slice(1)],
        expanded: true,
      },
      ...mockGroups.slice(1),
    ];
    const spectator = createHost('<ukho-filter [groups]="groups"></ukho-filter>', {
      hostProps: {
        groups,
      },
    });

    const expansionEl = spectator.fixture.debugElement.queryAll(By.directive(ExpansionComponent));
    expect(expansionEl).toBeTruthy();

    const expansionEl1: ExpansionComponent = expansionEl[0].componentInstance;
    expect(expansionEl1.initialExpanded).toBeTruthy;

    const expansionEl2: ExpansionComponent = expansionEl[1].componentInstance;
    expect(expansionEl2.initialExpanded).toBeFalsy;

    const checkboxEl = spectator.fixture.debugElement.queryAll(By.directive(CheckboxComponent));
    expect(checkboxEl).toBeTruthy();

    const checkbox1: CheckboxComponent = checkboxEl[0].componentInstance;
    expect(checkbox1.checked).toBeTruthy;

    const checkbox2: CheckboxComponent = checkboxEl[1].componentInstance;
    expect(checkbox2.checked).toBeFalsy;
  });

  describe('onExpansionChange', () => {
    it('should expand the first group', () => {
      const spectator = createHost('<ukho-filter [groups]="groups"></ukho-filter>', {
        hostProps: {
          groups: mockGroups,
        },
      });

      spectator.component.onExpansionChange(mockGroups[0]);

      expect(spectator.component.groups).toEqual([{ ...mockGroups[0], expanded: true }, ...mockGroups.slice(1)]);
    });

    it('should expand the second group', () => {
      const spectator = createHost('<ukho-filter [groups]="groups"></ukho-filter>', {
        hostProps: {
          groups: mockGroups,
        },
      });

      spectator.component.onExpansionChange(mockGroups[1]);

      expect(spectator.component.groups).toEqual([
        ...mockGroups.slice(0, 1),
        { ...mockGroups[1], expanded: true },
        ...mockGroups.slice(2),
      ]);
    });

    it('should collapse the first group', () => {
      const groups: FilterGroup[] = [{ ...mockGroups[0], expanded: true }, ...mockGroups.slice(1)];
      const spectator = createHost('<ukho-filter [groups]="groups"></ukho-filter>', {
        hostProps: {
          groups,
        },
      });

      spectator.component.onExpansionChange(groups[0]);

      expect(spectator.component.groups).toEqual(mockGroups);
    });
  });

  describe('onCheckboxChange', () => {
    it('should select the first item in the first group', () => {
      const spectator = createHost('<ukho-filter [groups]="groups"></ukho-filter>', {
        hostProps: {
          groups: mockGroups,
        },
      });

      spectator.component.onCheckboxChange(mockGroups[0], mockGroups[0].items[0]);

      expect(spectator.component.groups).toEqual([
        { ...mockGroups[0], items: [{ ...mockGroups[0].items[0], selected: true }, ...mockGroups[0].items.slice(1)] },
        ...mockGroups.slice(1),
      ]);
    });

    it('should unselect the first item in the first group', () => {
      const groups: FilterGroup[] = [
        { ...mockGroups[0], items: [{ ...mockGroups[0].items[0], selected: true }, ...mockGroups[0].items.slice(1)] },
        ...mockGroups.slice(1),
      ];
      const spectator = createHost('<ukho-filter [groups]="groups"></ukho-filter>', {
        hostProps: {
          groups,
        },
      });

      spectator.component.onCheckboxChange(groups[0], groups[0].items[0]);

      expect(spectator.component.groups).toEqual(mockGroups);
    });
  });

  describe('onClear', () => {
    it('should clear all selections but retain expansions', () => {
      const groups: FilterGroup[] = [
        {
          ...mockGroups[0],
          expanded: true,
          items: [
            { ...mockGroups[0].items[0], selected: true },
            { ...mockGroups[0].items[1], selected: true },
            ...mockGroups[0].items.slice(2),
          ],
        },
        {
          ...mockGroups[1],
          items: [
            ...mockGroups[1].items.slice(0, 1),
            { ...mockGroups[1].items[1], selected: true },
            ...mockGroups[1].items.slice(2),
          ],
        },
        ...mockGroups.slice(2),
      ];
      const spectator = createHost('<ukho-filter [groups]="groups"></ukho-filter>', {
        hostProps: {
          groups,
        },
      });

      expect(spectator.component.groups).toEqual(groups);

      spectator.component.onClear();

      expect(spectator.component.groups).toEqual([{ ...mockGroups[0], expanded: true }, ...mockGroups.slice(1)]);
    });
  });

  describe('onClear', () => {
    it('should emit an event with the current filters', () => {
      const groups: FilterGroup[] = [
        {
          ...mockGroups[0],
          expanded: true,
          items: [
            { ...mockGroups[0].items[0], selected: true },
            { ...mockGroups[0].items[1], selected: true },
            ...mockGroups[0].items.slice(2),
          ],
        },
        {
          ...mockGroups[1],
          items: [
            ...mockGroups[1].items.slice(0, 1),
            { ...mockGroups[1].items[1], selected: true },
            ...mockGroups[1].items.slice(2),
          ],
        },
        ...mockGroups.slice(2),
      ];
      const spectator = createHost('<ukho-filter [groups]="groups"></ukho-filter>', {
        hostProps: {
          groups,
        },
      });
      const filtersChangeSpy = jest.spyOn(spectator.component.filtersChange, 'emit');

      expect(spectator.component.groups).toEqual(groups);
      expect(filtersChangeSpy).not.toBeCalled();

      spectator.component.onApply();
      expect(filtersChangeSpy).toBeCalledTimes(1);
      expect(filtersChangeSpy).toBeCalledWith(groups);
    });
  });

  it('should create compenent with expected structure', () => {
    const spectator = createHost('<ukho-filter [groups]="groups"></ukho-filter>', {
      hostProps: {
        groups: mockGroups,
      },
    });

    expect(spectator.fixture).toMatchSnapshot();
  });
});
