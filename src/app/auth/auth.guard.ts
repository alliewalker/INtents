import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from './services/auth.service';

@Injectable()

export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {
        return this.authService.isLogin
            .pipe(
                take(1),
                map((isLogin: boolean) => {
                    if (!isLogin){
                        this.router.navigate(['/auth']);
                        return false;
                    }
                    return true;
                })
            )
    }
}