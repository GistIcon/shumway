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
// Class: Proxy
module Shumway.AVM2.AS.flash.utils {
  import notImplemented = Shumway.Debug.notImplemented;
  export class Proxy extends ASNative {
    static initializer: any = null;
    constructor () {
      false && super();
      notImplemented("Dummy Constructor: public flash.utils.Proxy");
    }
    // Static   JS -> AS Bindings
    // Static   AS -> JS Bindings
    // Instance JS -> AS Bindings
    getProperty: (name: any) => any;
    setProperty: (name: any, value: any) => void;
    callProperty: (name: any) => any;
    hasProperty: (name: any) => boolean;
    deleteProperty: (name: any) => boolean;
    getDescendants: (name: any) => any;
    nextNameIndex: (index: number /*int*/) => number /*int*/;
    nextName: (index: number /*int*/) => string;
    nextValue: (index: number /*int*/) => any;
    // Instance AS -> JS Bindings
    isAttribute(name: any): boolean {
      
      notImplemented("public flash.utils.Proxy::isAttribute"); return;
    }
  }
}