// Copyright JS Foundation and other contributors, http://js.foundation
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

function Box(data) {
  this._data = data;
}

var box = new Box('=');

Object.defineProperty(Box.prototype, 'data', {
  get: function () {
    assert(this === box);
    return this._data;
  },
  set: function (data) {
    assert(this === box);
    this._data = data;
  }
});

assert(box.data === '=');
box.data = '+';
assert(box.data === '+');

function test_access(value, proto) {
  "use strict"

  Object.defineProperty(proto, 'test', {
    get: function () { assert (this === value) },
    set: function () { assert (this === value) }
  });

  value.test;
  value.test = undefined;
}

test_access ("str", String.prototype);
test_access (1, Number.prototype);
test_access (true, Boolean.prototype);
