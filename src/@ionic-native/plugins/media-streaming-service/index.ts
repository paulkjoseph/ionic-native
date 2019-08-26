import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

export interface MediaStream {
  uri: string;
  identifier: string;
  title: string;
  description: string;
  cover: string;
}

@Plugin({
  pluginName: 'MediaStreamingService',
  plugin: 'cordova-plugin-media-streaming-service',
  pluginRef: 'cordova.plugins.mediaStreamingService',
  repo: 'https://github.com/paulkjoseph/cordova-plugin-media-streaming-service',
  platforms: ['Android']
})
@Injectable()
export class MediaStreamingService extends IonicNativePlugin {

  @Cordova()
  start(channelId: string, channelName: string, notificationId: string, mediaStreams: MediaStream[], selectedIndex: string): Promise<any> {
    return;
  }

  @Cordova()
  play(selectedIndex: string): Promise<any> {
    return;
  }

  @Cordova()
  pause(): Promise<any> {
    return;
  }

  @Cordova()
  stop(): Promise<any> {
    return;
  }

}
