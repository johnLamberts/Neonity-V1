import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment.prod';
import { LayoutModule } from './layouts/layout.module';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CommentFormComponent } from './comments/comment-form/comment-form.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { MainPagesModule } from './pages/main-pages.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
@NgModule({
  declarations: [
    AppComponent,
    SingleCategoryComponent,
    SinglePostComponent,
    TermsAndConditionsComponent,
    ContactComponent,
    CommentFormComponent,
    CommentListComponent,
    SubscriptionFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    LayoutModule,
    MainPagesModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
