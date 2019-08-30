/**
 * Copyright 2014 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import videojs from 'video.js';
import 'videojs-contrib-ads';
import 'videojs-ima';

var videoOptions = {
  controls: true,
  sources: [{
      src: '/static/Testvideos/bun33s.mp4',
      type: 'video/mp4',
  }]
};

var player = videojs('content_video');

var options = {
  id: 'content_video',
  adTagUrl: 'http://pubads.g.doubleclick.net/gampad/ads?sz=640x480&' +
      'iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&' +
      'impl=s&gdfp_req=1&env=vp&output=xml_vmap1&unviewed_position_start=1&' +
      'cust_params=sample_ar%3Dpremidpostpod%26deployment%3Dgmf-js&cmsid=496&' +
      'vid=short_onecue&correlator='
};

player.ima(imaOptions);
// On mobile devices, you must call initializeAdDisplayContainer as the result
// of a user action (e.g. button click). If you do not make this call, the SDK
// will make it for you, but not as the result of a user action. For more info
// see our examples, all of which are set up to work on mobile devices.
// player.ima.initializeAdDisplayContainer();

var initAdDisplayContainer = function() {
  player.ima.initializeAdDisplayContainer();
  wrapperDiv.removeEventListener(startEvent, initAdDisplayContainer);
}

var wrapperDiv = document.getElementById('content_video');
wrapperDiv.addEventListener(startEvent, initAdDisplayContainer);