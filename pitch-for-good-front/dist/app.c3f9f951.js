// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/components/VolForm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = VolForm;

function VolForm(causes, skills) {
  return "\n        <div class=\"grid-container>\n            <div class=\"contact-info>\n                <input type=\"text\" class=\"add__firstName\" placeholder=\"First Name:\">\n                <input type=\"text\" class=\"add__lastName\" placeholder=\"Last Name:\">\n                <input type=\"text\" class=\"add__volUsername\" placeholder=\"Username:\">\n                <input type=\"text\" class=\"add__volPassword\" placeholder=\"Password:\">\n                <input type=\"text\" class=\"add__jobTitle\" placeholder=\"Job Title:\">\n                <input type=\"text\" class=\"add__phoneNum\" placeholder=\"Phone:\">\n                <input type=\"text\" class=\"add__email\" placeholder=\"Email:\">\n            </div>\n            </div>\n            \n            <ul id=\"skills\">\n            ".concat(skills.map(function (skill) {
    return "\n            <li class=\"skill\">     \n            <input type=\"checkbox\" class=\"skill__skillName\" id=\"".concat(skill.id, "\" name=\"skillIds\" value=\"").concat(skill.skillId, "\">").concat(skill.skillName, "\n            </li>\n            ");
  }).join(''), "\n        </ul>\n        \n        <ul id=\"skills\">\n            ").concat(causes.map(function (cause) {
    return "\n                <li class=\"cause\">     \n                <input type=\"checkbox\" class=\"cause__causeName\" id=\"".concat(cause.causeId, "\" name=\"causeIds\" value=\"").concat(cause.causeId, "\">").concat(cause.causeName, "\n                </li>\n                ");
  }).join(''), "\n            </ul>\n            \n            <button class=\"js-add-volunteer button\">Sign Up!</button>\n        ");
}
},{}],"js/components/Organization.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Organization;

function Organization(organizations) {
  return "\n        <h3> If you would like to propose a project to this organization, click the button below.</h3>\n        <button class=\"js-get-project-form button\">Propose project</button>\n            ";
}
},{}],"js/components/ProjectForm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProjectForm;

function ProjectForm(projects) {
  return "\n        <div class=\"projectForm__container>\n            <h2>Propose a project idea here!</h2>\n                <h3>Project name: <input type=\"text\" class=\"add__projectName\" placeholder=\"Project Name\"></h3>\n                <h3>Description of project goal and plans: <input type=\"text\" class=\"add__projectDescription\" placeholder=\"Project Description\">\n                <h3>Estimated duration of project: <input type=\"text\" class=\"add__estimatedDuration\" placeholder=\"Estimated Duration\"></h3>\n                <div class=\"skills__container\">\n                    <h3>Skills involved in project: </h3>\n                    <ul class=\"skills\">\n                        ".concat(skills.map(function (skill) {
    return "\n                                <li class=\"skill\">     \n                                    <input type=\"checkbox\" class=\"add__skills skill__skillName\" id=\"".concat(skill.id, "\" value=\"").concat(skill.skillName, "\">\n                                </li>\n                                    ");
  }).join(''), "             \n                    </ul>\n                </div>  \n                \n                <button class=\"js-add-project button\" id=\"").concat(organization.id, ">Submit proposal</button>\n        </div>\n            "); // date thing?
  // volunteer
}
},{}],"js/components/landing.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = landing;

function landing() {
  return "\n\n<div class=\"landing\">\n\t<h1 class=\"landing__title\">Pitch For Good</h1>\n</div>\n<h2>Pitch For Good provides a platform for highly-skilled professionals to pitch specialized, project-based volunteer ideas to nonprofits they care about.</h2>\n\n<button class=\"js--sign-up__volunteer button__big\">I AM A VOLUNTEER</button>\n<button class=\"js--sign-up__volunteer button__big\">I AM A NON-PROFIT</button>\n\n<footer>\n\t<h3>Pitch For Good &copy;2019</h3>\n\t<h3>Photo by Dakota Corbin on <a href=\"https://unsplash.com/\">Unsplash</a></h3>\n</footer>\n\n";
}
},{}],"js/utils/api/api-actions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function getRequest(location, callback) {
  fetch(location).then(function (response) {
    return response.json();
  }).then(function (data) {
    return callback(data);
  }).catch(function (err) {
    return console.log(err);
  });
}

function postRequest(location, requestBody, callback) {
  fetch(location, {
    method: "POST",
    body: JSON.stringify(requestBody)
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return callback(data);
  }).catch(function (err) {
    return console.log(err);
  });
}

var _default = {
  getRequest: getRequest,
  postRequest: postRequest
};
exports.default = _default;
},{}],"js/utils/events/event-actions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function on(element, eventType, callback) {
  element.addEventListener(eventType, function (event) {
    return callback(event);
  });
}

var _default = {
  on: on
};
exports.default = _default;
},{}],"js/components/Skills.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Skills;

function Skills(skills) {
  return "\n    <ul id=\"skill\">\n            ".concat(skills.map(function (skill) {
    return "\n            <li class=\"skill\">\n                <h3 class=\"skillName\">".concat(skill.skillName, "</h3>\n            </li>\n        ");
  }).join(''), "\n        </ul>\n\n    ");
}
},{}],"js/components/Cause.js":[function(require,module,exports) {

},{}],"js/components/VolunteerDashboard.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = VolunteerDashboard;

var _Skills = _interopRequireDefault(require("./Skills"));

var _Cause = _interopRequireDefault(require("./Cause"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function VolunteerDashboard(volunteer) {
  return "\n    <h1>Welcome, ".concat(volunteer.firstName, "!</h1>\n\n    <h2>Here is your user information:</h2>\n    <ul>\n        <li>First Name: ").concat(volunteer.firstName, "</li>\n        <li>Last Name: ").concat(volunteer.lastName, "</li>\n        <li>Username: ").concat(volunteer.volUserName, "</li>\n        <li>Password: ").concat(volunteer.volPassword, "</li>\n        <li>Phone Number: ").concat(volunteer.phoneNum, "</li>\n        <li>Email: ").concat(volunteer.email, "</li>\n        <li>Current Job Title: ").concat(volunteer.jobTitle, "</li>\n    </ul>\n\n    <h2>These are your skills:</h2>\n    <ul>\n        <li>").concat((0, _Skills.default)(volunteer.skills), "</li>\n    </ul>\n\n    <h2>These are the causes you support:</h2>\n    <ul>\n        <li>").concat((0, _Cause.default)(volunteer.causes), "</li>\n    </ul>\n    \n    ");
}
},{"./Skills":"js/components/Skills.js","./Cause":"js/components/Cause.js"}],"js/app.js":[function(require,module,exports) {
"use strict";

var _VolForm = _interopRequireDefault(require("./components/VolForm"));

var _Organization = _interopRequireDefault(require("./components/Organization"));

var _ProjectForm = _interopRequireDefault(require("./components/ProjectForm"));

var _landing = _interopRequireDefault(require("./components/landing"));

var _apiActions = _interopRequireDefault(require("./utils/api/api-actions"));

var _eventActions = _interopRequireDefault(require("./utils/events/event-actions"));

var _VolunteerDashboard = _interopRequireDefault(require("./components/VolunteerDashboard"));

var _Skills = _interopRequireDefault(require("./components/Skills"));

var _Cause = _interopRequireDefault(require("./components/Cause"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

main();

function main() {
  getAppContext().innerHTML = (0, _landing.default)();
  volClickToSignUp();
  createNewVolunteer();
  getProjectForm(); // addProject()
}

function volClickToSignUp() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('js--sign-up__volunteer')) {
      _apiActions.default.getRequest('http://localhost:8080/causes', function (causes) {
        _apiActions.default.getRequest('http://localhost:8080/skills', function (skills) {
          getAppContext().innerHTML = (0, _VolForm.default)(causes, skills);
        });
      });
    }
  });
}

function createNewVolunteer() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('js-add-volunteer')) {
      var firstName = document.querySelector('.add__firstName').value;
      var lastName = document.querySelector('.add__lastName').value;
      var phoneNum = document.querySelector('.add__phoneNum').value;
      var email = document.querySelector('.add__email').value;
      var jobTitle = document.querySelector('.add__jobTitle').value; // const skills = document.querySelector('.skill__skillName').value
      // const causes = document.querySelector('.cause__causeName').value

      _apiActions.default.postRequest('http://localhost:8080/volunteers/add', {
        firstName: firstName,
        lastName: lastName,
        phoneNum: phoneNum,
        email: email,
        jobTitle: jobTitle // skills : skills,
        // causes : causes

      }, function (volunteer) {
        return getAppContext().innerHTML = (0, _VolunteerDashboard.default)(volunteer);
      });
    }
  });
}

function getProjectForm() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('js-get-project-form')) {
      _apiActions.default.getRequest('http://localhost:8080/projects', function (projects) {
        getAppContext().innerHTML = (0, _ProjectForm.default)(projects);
      });
    }
  });
}

function addProject() {
  _eventActions.default.on(getAppcontext(), 'click', function () {
    if (event.target.classList.contains('js-add-project')) {
      var projectName = document.querySelector('.add__projectName').value;
      var projectDescription = document.querySelector('.add__projectDescription').value;
      var estimatedDuration = document.querySelector('.add__estimatedDuration').value;
      var skills = document.querySelector('.add__skills').value;

      _apiActions.default.postRequest("http://localhost:8080/projects/add/".concat(event.target.id), {
        projectName: projectName,
        projectDescription: projectDescription,
        estimatedDuration: estimatedDuration,
        skills: skills
      }, function (project) {
        return getAppContext().innerHTML = Project(project);
      });
    }
  });
}

function getAppContext() {
  return document.querySelector("#app");
}
},{"./components/VolForm":"js/components/VolForm.js","./components/Organization":"js/components/Organization.js","./components/ProjectForm":"js/components/ProjectForm.js","./components/landing":"js/components/landing.js","./utils/api/api-actions":"js/utils/api/api-actions.js","./utils/events/event-actions":"js/utils/events/event-actions.js","./components/VolunteerDashboard":"js/components/VolunteerDashboard.js","./components/Skills":"js/components/Skills.js","./components/Cause":"js/components/Cause.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63829" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/app.js"], null)
//# sourceMappingURL=/app.c3f9f951.js.map