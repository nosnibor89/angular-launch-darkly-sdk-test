import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LaunchDarklyService } from '../../launchdarkly/launchdarkly.service';
import { FeatureFlagComponent } from '../../launchdarkly/components/feature-flag/feature-flag.component';

@Component({
  selector: 'app-educational-layout-component',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FeatureFlagComponent],
  templateUrl: './educational-layout-component.component.html',
  styleUrl: './educational-layout-component.component.scss',
})
export class EducationalLayoutComponentComponent {
  username: string;
  constructor(
    private readonly auth: AuthService,
    private readonly router: Router,
    public readonly ld: LaunchDarklyService
  ) {
    this.username = this.auth.user()?.username || 'Unknown';
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
