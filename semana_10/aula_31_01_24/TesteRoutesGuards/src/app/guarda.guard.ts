import { CanActivateFn } from '@angular/router';

export const guardaGuard: CanActivateFn = (route, state) => {
  return false;
};
