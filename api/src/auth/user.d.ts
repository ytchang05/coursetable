/**
 * @file User type declarations.
 */

import 'express';
import 'passport';

export {};
declare global {
  namespace Express {
    interface User {
      netId: string;
      evals: boolean;
      profile?: unknown;
      email?: string;
      firstName?: string;
      lastName?: string;
    }
  }
}
