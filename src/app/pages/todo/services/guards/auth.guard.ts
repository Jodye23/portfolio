import { AuthService } from './auth.service';
import { Injectable, inject } from '@angular/core';

import { ActivatedRouteSnapshot, Router } from '@angular/router';



export const authGuardNew = (next: ActivatedRouteSnapshot, state: ActivatedRouteSnapshot) => {
  const authservice = inject(AuthService);
  const router = inject(Router);

  if (authservice.getUser().username) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};
