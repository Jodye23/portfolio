import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
                    { path: 'nba', loadChildren: () => import('./pages/nba/nba.module').then(m => m.NbaModule) },
                    { path: 'imdb', loadChildren: () => import('./pages/imdb/imdb.module').then(m => m.ImdbModule) },
                    { path: 'anime', loadChildren: () => import('./pages/anime/anime.module').then(m => m.AnimeModule) },
                    { path: 'harry', loadChildren: () => import('./pages/harrypotter/harrypotter.module').then(m => m.HarrypotterModule) },
                    { path: 'books', loadChildren: () => import('./pages/books/books.module').then(m => m.BooksModule) },
                    { path: 'login', loadChildren: () => import('./pages/todo/todo.module').then(m => m.TodoModule) },
                    { path: 'chuck', loadChildren: () => import('./pages/chuck/chuck.module').then(m => m.ChuckModule) },
                    { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) }
                ]
            },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
