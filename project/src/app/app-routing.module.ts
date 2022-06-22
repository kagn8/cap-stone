import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.guard';

const routes: Routes = [
  { path: '',canActivate: [AuthGuard], loadChildren:  () => import('./home-page/home-page.module').then(m => m.HomePageModule) },
  { path: 'reg-log', loadChildren: () => import('./reg-log/reg-log.module').then(m => m.RegLogModule) }, 
  { path: 'profilo-utente', canActivate: [AuthGuard], loadChildren: () => import('./profilo-utente/profilo-utente.module').then(m => m.ProfiloUtenteModule) },
  { path: 'update-post', canActivate: [AuthGuard], loadChildren: () => import('./update-post/update-post.module').then(m => m.UpdatePostModule) },
  { path: 'private-zone',canActivate: [AuthGuard], loadChildren: () => import('./private-zone/private-zone.module').then(m => m.PrivateZoneModule) },
  { path: 'avviso', canActivate: [AuthGuard], loadChildren: () => import('./avviso/avviso.module').then(m => m.AvvisoModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
