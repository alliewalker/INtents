// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
// import { Observable } from 'rxjs';
// import { map, take } from 'rxjs/operators';
// import { ApiService } from '../services/api.service';

// @Injectable()

// export class AuthGuard implements CanActivate {
//     constructor(
//         private apiService: ApiService,
//         private router: Router
//     ) {}

//     canActivate(
//         next: ActivatedRouteSnapshot,
//         state: RouterStateSnapshot
//     ): Observable<boolean> {
//         return this.apiService.isLogin
//             .pipe(
//                 take(1),
//                 map((isLogIn: boolean) => {
//                     if (!isLogIn){
//                         this.router.navigate(['']);
//                         return false;
//                     }
//                     return true;
//                 })
//             )
//     }
// }