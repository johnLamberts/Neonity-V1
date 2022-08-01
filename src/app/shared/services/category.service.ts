import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Injectable()
export class CategoryService {
  constructor(private afs: AngularFirestore) {}

  loadPosts() {
    return this.afs
      .collection('posts')
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { data, id };
          })
        )
      );
  }
}
