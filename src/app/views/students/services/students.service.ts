import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import {
    AngularFirestore,
    AngularFirestoreCollection,
    DocumentChangeAction,
    AngularFirestoreDocument
} from 'angularfire2/firestore';


@Injectable()
export class StudentsService {

    private _collection: AngularFirestoreCollection < WriteStudentDto > ;

    constructor(private angularFirestore: AngularFirestore) {}

    private get collection(): AngularFirestoreCollection < WriteStudentDto > {

        if (!this._collection)
            this._collection = this.angularFirestore.collection < WriteStudentDto > ('students');

        return this._collection;
    }

    private getDoc(id: string) {
        return this.angularFirestore.doc < WriteStudentDto > (`students/${id}`);
    }

    getAll(): Observable < ReadStudentDto[] > {
        return this.collection.snapshotChanges()
            .map(actions => actions.map(action => {

                const id = action.payload.doc.id;
                const data = action.payload.doc.data() as WriteStudentDto;

                return {
                    id,
                    ...data
                };

            }));
    }

    add(student: WriteStudentDto) {
        this.collection.add({ ...student
        });
    }

    getById(id: string): Observable < ReadStudentDto > {
        return this.getDoc(id).snapshotChanges()
            .map(action => {

                const id = action.payload.id;
                const data = action.payload.data() as WriteStudentDto;

                return { id, ...data };

            });
    }

    delete(id: string) {
        return this.getDoc(id).delete();
    }

    update(id: string, student: WriteStudentDto) {
        return this.getDoc(id).update(student);
    }

}

export class WriteStudentDto {
    public studentNumber: string;
    public firstName: string;
    public lastName: string;
    public email: string;
    public genre: string;
}

export class ReadStudentDto extends WriteStudentDto {
    public id: string
}
