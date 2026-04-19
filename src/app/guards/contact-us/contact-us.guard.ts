import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ConfigService } from '../../services/config/config.service';

export const contactUsGuard: CanActivateFn = () => {
  return !!inject(ConfigService).contactForm;
};
