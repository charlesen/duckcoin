import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular"; // On rajoute cette ligne
import { TransactionComponent } from './transaction/transaction';
@NgModule({
	declarations: [TransactionComponent],
	imports: [IonicModule], // ...Et celle-ci
	exports: [TransactionComponent]
})
export class ComponentsModule {}
