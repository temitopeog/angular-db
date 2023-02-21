import { Injectable } from '@angular/core';
import { SplitService } from '@splitsoftware/splitio-angular';
import { take } from 'rxjs';
import { environment } from 'src/environments/environment';

// Inject service
@Injectable({providedIn: 'root'})

export class SplitioService {
splitReady = false;
sharedClientReady= false;

// Documentation can be found here: https://help.split.io/hc/en-us/articles/6495326064397

constructor(private splitService: SplitService){}
// Instantiate the Service
initPlugin() {
  // Create the config for the plugin.
  const sdkConfig = {
    core: {
      authorizationKey: environment.splitApikey, //Split APIKEY from the console
      key: 'key' // initial key
    }
  };
  // init method returns an observable for sdk readiness
  this.splitService.init(sdkConfig).subscribe(() => {
    this.splitReady = true
  });
}

// Initializing the SDK configuration on startup
initClient(key: string) {
  this.splitService.initClient(key).pipe(take(1)).subscribe(() => {
    this.sharedClientReady = true;
  })
}

// SDK on ready initialization
sdkReady(){
  return this.splitService.sdkReady$;
}

// Automatically update the SDK on changes of Split Console
sdkUpdate(){
  return this.splitService.sdkUpdate$;
}

// Get Treatment with Configuration
getTreatmentWithConfig(key: string, splitName: string){
  return this.splitService.getTreatmentWithConfig(key, splitName);
}

// Get Treatment without Configuration 
getTreatmentOnly(key: string, splitName: string){
  return this.splitService.getTreatment(key, splitName);
}

}
