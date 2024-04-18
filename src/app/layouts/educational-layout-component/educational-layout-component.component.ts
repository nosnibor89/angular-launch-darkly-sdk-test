import { Component, Input } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FlagSignal, LaunchDarklyService } from '../../launchdarkly/launchdarkly.service';

@Component({
  selector: 'app-educational-layout-component',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './educational-layout-component.component.html',
  styleUrl: './educational-layout-component.component.scss',
})
export class EducationalLayoutComponentComponent {
  shouldShowHighSchoolLink: FlagSignal;
  username: string;
  constructor(
    private readonly auth: AuthService,
    private readonly router: Router,
    private readonly ld: LaunchDarklyService
  ) {
    this.shouldShowHighSchoolLink = this.ld.watch('feature-use-entra-id-auth');
    this.username = this.auth.user()?.username || 'Unknown';
  }

  @Input()
  set program(value: string) {
    console.log(`program value in layout: ${value}`);
    // this.componentTree = this.builder.build(value as Pages);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
