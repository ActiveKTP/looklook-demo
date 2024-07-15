import { Routes } from '@angular/router';

const Routing: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'builder',
    loadChildren: () =>
      import('./builder/builder.module').then((m) => m.BuilderModule),
  },
  {
    path: 'crafted/pages/profile',
    loadChildren: () =>
      import('../modules/profile/profile.module').then((m) => m.ProfileModule),
    // data: { layout: 'light-sidebar' },
  },
  {
    path: 'crafted/account',
    loadChildren: () =>
      import('../modules/account/account.module').then((m) => m.AccountModule),
    // data: { layout: 'dark-header' },
  },
  {
    path: 'crafted/pages/wizards',
    loadChildren: () =>
      import('../modules/wizards/wizards.module').then((m) => m.WizardsModule),
    // data: { layout: 'light-header' },
  },
  {
    path: 'crafted/widgets',
    loadChildren: () =>
      import('../modules/widgets-examples/widgets-examples.module').then(
        (m) => m.WidgetsExamplesModule
      ),
    // data: { layout: 'light-header' },
  },
  {
    path: 'apps/chat',
    loadChildren: () =>
      import('../modules/apps/chat/chat.module').then((m) => m.ChatModule),
    // data: { layout: 'light-sidebar' },
  },
  {
    path: 'apps/user-managements',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'apps/user-management-roles',
    loadChildren: () => import('./role/role.module').then((m) => m.RoleModule),
  },
  {
    path: 'apps/user-management-permissions',
    loadChildren: () =>
      import('./permission/permission.module').then((m) => m.PermissionModule),
  },
  {
    path: 'apps/owner-managements',
    loadChildren: () => import('./owner-management/owner/owner.module').then((m) => m.OwnerModule),
  },
  {
    path: 'apps/owner-management-subscriptions',
    loadChildren: () => import('./owner-management/subscription/subscription.module').then((m) => m.SubscriptionModule),
  },
  {
    path: 'apps/owner-management-activity',
    loadChildren: () =>
      import('./owner-management/activity/activity.module').then((m) => m.ActivityModule),
  },
  {
    path: 'apps/place-managements',
    loadChildren: () =>
      import('./place-management/place/place.module').then(
        (m) => m.PlaceModule
      ),
  },
  {
    path: 'apps/place-management-categories',
    loadChildren: () =>
      import('./place-management/category/category.module').then(
        (m) => m.CategoryModule
      ),
  },
  {
    path: 'apps/place-management-tags',
    loadChildren: () =>
      import('./place-management/tag/tag.module').then((m) => m.TagModule),
  },
  {
    path: 'apps/pet-managements',
    loadChildren: () =>
      import('./pet-management/pet/pet.module').then((m) => m.PetModule),
  },
  {
    path: 'apps/pet-management-breeds',
    loadChildren: () =>
      import('./pet-management/breed/breed.module').then((m) => m.BreedModule),
  },
  {
    path: 'apps/pet-management-colors',
    loadChildren: () =>
      import('./pet-management/color/color.module').then((m) => m.ColorModule),
  },
  {
    path: 'apps/pet-management-tags',
    loadChildren: () =>
      import('./pet-management/tag/tag.module').then((m) => m.TagModule),
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

export { Routing };
