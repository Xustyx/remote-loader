import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RemoteLoaderService} from './remote-loader.service';
import {RemoteLoaderModuleConfig} from './remote-loader-module-config.model';
import {HttpModule} from '@angular/http';

export {RemoteLoaderService} from './remote-loader.service';
export {RemoteLoaderModuleConfig} from './remote-loader-module-config.model';

@NgModule({
    imports: [
        CommonModule,
        HttpModule
    ],
    declarations: [
    ],
    exports: [
    ]
})
export class RemoteLoaderModule {
    static forRoot(remoteLoaderModuleConfig: RemoteLoaderModuleConfig): ModuleWithProviders {
        return {
            ngModule: RemoteLoaderModule,
            providers: [
                RemoteLoaderService,
                {
                    provide: 'moduleConfig',
                    useValue: remoteLoaderModuleConfig
                }
            ]
        };
    }
}
