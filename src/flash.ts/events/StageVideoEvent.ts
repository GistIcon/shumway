/**
 * Copyright 2013 Mozilla Foundation
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations undxr the License.
 */
// Class: StageVideoEvent
module Shumway.AVM2.AS.flash.events {
  import notImplemented = Shumway.Debug.notImplemented;
  export class StageVideoEvent extends flash.events.Event {
    static initializer: any = null;
    constructor (type: string, bubbles: boolean = false, cancelable: boolean = false, status: string = null, colorSpace: string = null) {
      type = "" + type; bubbles = !!bubbles; cancelable = !!cancelable; status = "" + status; colorSpace = "" + colorSpace;
      false && super(undefined, undefined, undefined);
      notImplemented("Dummy Constructor: public flash.events.StageVideoEvent");
    }
    // Static   JS -> AS Bindings
    // Static   AS -> JS Bindings
    // Instance JS -> AS Bindings
    status: string;
    colorSpace: string;
    m_status: string;
    m_colorSpace: string;
    // Instance AS -> JS Bindings
  }
}