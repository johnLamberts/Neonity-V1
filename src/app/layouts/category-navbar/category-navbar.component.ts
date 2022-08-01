import { ThisReceiver } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { ErrorObserver } from "rxjs";
import { CategoryService } from "src/app/shared/services/category.service";

@Component({
    selector: 'app-category-navbar',
    templateUrl: './category-navbar.component.html'
})

export class CategoryComponent implements OnInit {

    category: any[] = [];
    
    constructor (private categoryService: CategoryService) {}

    ngOnInit(): void {
        this.categoryService.loadPosts().subscribe({
            next: (category) => {
                console.log(category);
            },
            error: (err: ErrorObserver<Error>) => {
                console.log('err', err);
            }
        })
    }
}