import { from } from 'rxjs';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { distinctUntilChanged } from 'rxjs/operators';

import 'rxjs/add/operator/';
import 'rxjs/add/operator/';

export interface State {
    [key: string]: any
}

const state: State = {};

export class Store {

    private subject = new BehaviorSubject<State>(state);
    private store = this.subject.asObservable().pipe(distinctUntilChanged())

    get value() {
        return this.subject.value;
    }

    select<T>(name: string): Observable<T> {
        return this.store.pipe(pluck(name));
    }

    set(name: string, state: any) {
        this.subject.next({ ...this.value, [name]: state });
    }

}