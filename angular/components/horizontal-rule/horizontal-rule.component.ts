import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ukho-hr',
  templateUrl: './horizontal-rule.component.html',
  styleUrls: ['./horizontal-rule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HorizontalRuleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
