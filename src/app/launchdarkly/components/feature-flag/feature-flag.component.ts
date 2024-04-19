import { Component, Input } from '@angular/core';
import { FlagSignal, LaunchDarklyService } from '../../launchdarkly.service';

@Component({
  selector: 'app-feature-flag',
  standalone: true,
  imports: [],
  templateUrl: './feature-flag.component.html',
  styleUrl: './feature-flag.component.scss',
})
export class FeatureFlagComponent {
  @Input({ required: true })
  set flag(value: string) {
    this.flagSignal = this.ld.watch(value);
  }

  flagSignal?: FlagSignal;
  constructor(public readonly ld: LaunchDarklyService) {}
}
