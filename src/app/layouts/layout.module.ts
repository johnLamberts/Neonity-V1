import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoryService } from '../shared/services/category.service';
import { CategoryComponent } from './category-navbar/category-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PostCardComponent } from './post-card/post-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    PostCardComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    PostCardComponent,
  ],

  providers: [CategoryService]
})
export class LayoutModule {}
