import { AuthRouterModule } from './auth-router.module';

describe('AuthRouterModule', () => {
  let authRouterModule: AuthRouterModule;

  beforeEach(() => {
    authRouterModule = new AuthRouterModule();
  });

  it('should create an instance', () => {
    expect(authRouterModule).toBeTruthy();
  });
});
