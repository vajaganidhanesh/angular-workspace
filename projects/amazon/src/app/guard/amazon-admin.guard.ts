import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AmazonAdminGuard implements CanActivate {
  public role: string = 'custmor';
  constructor(private router: Router) {}
  canActivate(): boolean {
    if (this.role !== 'customer') {
      this.router.navigate(['login']);
    }
    return true;
  }
}
