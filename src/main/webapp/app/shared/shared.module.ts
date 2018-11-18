import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { Svn2GitSharedLibsModule, Svn2GitSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';
import { ConfigurationService } from 'app/shared/service/configuration-service';
import { JhiAddMappingModalComponent } from 'app/migration/add-mapping.component';

@NgModule({
    imports: [Svn2GitSharedLibsModule, Svn2GitSharedCommonModule],
    declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective, JhiAddMappingModalComponent],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }, ConfigurationService],
    entryComponents: [JhiLoginModalComponent, JhiAddMappingModalComponent],
    exports: [Svn2GitSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Svn2GitSharedModule {}
