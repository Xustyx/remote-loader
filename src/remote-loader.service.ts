import {Inject, Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {RemoteLoaderModuleConfig} from './remote-loader-module-config.model';

@Injectable()
export class RemoteLoaderService {

  private data: Object = null;

  constructor(private http: Http, @Inject('moduleConfig') private config: RemoteLoaderModuleConfig) {
  }

  public getConfig(key: any) {
    return this.data[key];
  }

  public getUrl() {
    return this.config.url;
  }

  public load() {
    return new Promise((resolve, reject) => {
      this.http.get(this.getUrl())
          .map(res => res.json())
          .catch((error: any) => {
            console.error('Error reading ' + this.getUrl() + ' configuration file');
            resolve(error);
            return Observable.throw(error.json().error || 'Server error');
          })
          .subscribe((responseData) => {
            this.data = responseData;
            resolve(true);
          });
    });
  }
}

