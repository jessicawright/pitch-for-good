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

  return "\n    <h1>Volunteer Sign Up Page</h1>\n        <div class=\"volForm__container\">\n            <div class=\"contact-info__container\">\n                <input type=\"text\" class=\"add__firstName\" placeholder=\"First Name:\">\n                <input type=\"text\" class=\"add__lastName\" placeholder=\"Last Name:\"><br>\n                <input type=\"text\" class=\"add__volUserName\" placeholder=\"Username:\">\n                <input type=\"text\" class=\"add__volPassword\" placeholder=\"Password:\"><br>\n                <input type=\"text\" class=\"add__jobTitle\" placeholder=\"Job Title:\"><br>\n                <input type=\"text\" class=\"add__phoneNum\" placeholder=\"Phone:\">\n                <input type=\"text\" class=\"add__email\" placeholder=\"Email:\">\n            </div>\n            <div class=\"skills__container\">\n                    <ul id=\"skills\">\n                        ".concat(skills.map(function (skill) {
    return "\n                                <li class=\"skill\">     \n                                    <input type=\"checkbox\" class=\"skill__skillName\" id=\"".concat(skill.id, "\" name=\"skillIds\" value=\"").concat(skill.skillId, "\">").concat(skill.skillName, "\n                                </li>\n                            ");
  }).join(''), "\n                    </ul>\n            </div>\n            <div class=\"causes__container\">    \n                <ul id=\"causes\">\n                    ").concat(causes.map(function (cause) {
    return "\n                            <li class=\"cause\">     \n                                <input type=\"checkbox\" class=\"cause__causeName\" id=\"".concat(cause.causeId, "\" name=\"causeIds\" value=\"").concat(cause.causeId, "\">").concat(cause.causeName, "\n                            </li>\n                        ");
  }).join(''), "\n                </ul>\n            </div>\n            <button class=\"js-add-volunteer button\">Volunteer Sign Up!</button>\n        </div>\n        ");

}
},{}],"js/components/Organization.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Organization;

function Organization(organization) {
  return "\n        <h2 class=\"organization__name\">".concat(organization.orgName, "</h2>\n        <h3 class=\"organization__orgMission\">").concat(organization.orgMission, "</h3>\n        <h3 class=\"organization__contactPerson\">").concat(organization.contactPerson, "</h3>\n        <h3 class=\"organization__orgEmail\">").concat(organization.orgEmail, "</h3>\n        <h3 class=\"organization__websiteUrl\">").concat(organization.websiteUrl, "</h3>\n\n        <h3> If you would like to propose a project to this organization, click the button below.</h3>\n        <button class=\"js-get-project-form button\" id=\"").concat(organization.organizationId, "\">Propose project</button>\n            ");

}
},{}],"js/components/Organizations.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Organizations;

function Organizations(volunteer, organizations) {
  return "\n        <h1>Organizations:</h1>\n        <ul class=\"organizations\">\n            ".concat(organizations.map(function (organization) {
    return "\n                    <li class=\"organization\">     \n                        <h2 class=\"js-organization__orgName\" id=\"".concat(organization.organizationId, "\">").concat(organization.orgName, "</h2>\n                        <h3 class=\"organization__orgMission\">").concat(organization.orgMission, "</h3>\n                        <h3 class=\"organization__websiteUrl\">").concat(organization.websiteUrl, "</h3>\n                        <h3> If you would like to propose a project to this organization, click the button below.</h3>\n                        \n                        <input type=\"hidden\" id=\"").concat(volunteer.volunteerId, "\" class=\"volunteerId\">\n                        <button class=\"js-get-project-form button\" id=\"").concat(organization.organizationId, "\">Propose project</button>\n                    </li>\n                    ");
  }).join(''), "             \n                </ul>\n                ");
}
},{}],"js/components/ProjectForm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProjectForm;

function ProjectForm(organization, skills, volunteer) {
  return "\n        <h2>Propose a project idea here!</h2>\n            <div class=\"projectForm__container\">\n            <h3 class=\"organization__orgName\" id=\"".concat(organization.organizationId, "\">Project proposal will be for ").concat(organization.orgName, "</h2>\n            <h3>Project name:\n                <input type=\"text\" class=\"add__projectName\" placeholder=\"Project Name\">\n            </h3>\n            <h3>Description of project goal and plans:\n                <input type=\"text\" class=\"add__projectDescription\" placeholder=\"Project Description\">\n            </h3>   \n            <h3>Estimated duration of project: \n                <input type=\"text\" class=\"add__estimatedDuration\" placeholder=\"Estimated Duration\">\n            </h3>\n                <div class=\"skills__container\">\n                    <h3>Skills involved in project: </h3>\n                    <ul class=\"skills\">\n                        ").concat(skills.map(function (skill) {
    return "\n                                <li class=\"skill\">     \n                                    <input type=\"checkbox\" class=\"js-skill__skillName\" id=\"".concat(skill.skillId, "\" value=\"").concat(skill.skillId, "\">").concat(skill.skillName, "\n                                </li>\n                                    ");
  }).join(''), "             \n                    </ul>\n                </div>  \n                \n                <div class=\"project__submit-parent-volunteer\" id=\"").concat(volunteer.volunteerId, "\">\n                    <button class=\"js-add-project button\" id=\"").concat(organization.organizationId, "\">Submit proposal</button>\n                </div>\n            </div>\n            "); // date thing?
  // volunteer
}
},{}],"js/components/landing.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = landing;

function landing() {
  return "\n\t\t<div class=\"landing\">\n\t\t\t<h1 class=\"landing__title\">Pitch For Good</h1>\n\t\t</div>\n\t\t\t<h3>Pitch For Good provides a platform for highly-skilled professionals to pitch specialized, project-based volunteer ideas to nonprofits they are passionate about.</h3>\n\n\t\t<button class=\"js--enter__volunteer button__big\">I AM A VOLUNTEER</button>\n\t\t<button class=\"js--enter__organization button__big\">I AM A NON-PROFIT</button>\n\n\t\t<footer>\n\t\t\t<h5>Pitch For Good &copy;2019</h5>\n\t\t\t<h6>Photo by Dakota Corbin on <a href=\"https://unsplash.com/\">Unsplash</a></h6>\n\t\t</footer>\n\t";
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

function deleteRequest(location, requestBody, callback) {
  fetch(location, {
    method: "DELETE",
    body: JSON.stringify(requestBody)
  }).then(function (response) {
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
  postRequest: postRequest,
  deleteRequest: deleteRequest
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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Cause;

function Cause(causes) {
  return "\n    <ul id=\"cause\">\n            ".concat(causes.map(function (cause) {
    return "\n            <li class=\"cause\">\n                <h3 class=\"causeName\">".concat(cause.causeName, "</h3>\n            </li>\n        ");
  }).join(''), "\n        </ul>\n\n    ");
}
},{}],"js/components/Project.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Project;

function Project(projects) {
  return "\n    ".concat(projects.map(function (project) {
    return "\n\n        <h2 class=\"project__projectName\" id=\"".concat(project.projectId, "\">").concat(project.projectName, "</h2>\n        ");
  }).join(''), "     \n    ");
}
},{}],"js/components/VolunteerDashboard.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = VolunteerDashboard;

var _Skills = _interopRequireDefault(require("./Skills"));

var _Cause = _interopRequireDefault(require("./Cause"));

var _Project = _interopRequireDefault(require("./Project"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function VolunteerDashboard(volunteer) {

  return "\n    <h1>Welcome, ".concat(volunteer.firstName, "!</h1>\n\n    <div class=\"dashboard__container\">\n        <div class=\"volDashboard__contact\">\n            <h6>Here is your user information:</h6>\n            <ul>\n                <li>First Name: ").concat(volunteer.firstName, "</li>\n                <li>Last Name: ").concat(volunteer.lastName, "</li><br>\n                <li>Username: ").concat(volunteer.volUserName, "</li>\n                <li>Password: ").concat(volunteer.volPassword, "</li><bf>\n                <li>Phone Number: ").concat(volunteer.phoneNum, "</li>\n                <li>Email: ").concat(volunteer.email, "</li><br>\n                <li>Current Job Title: ").concat(volunteer.jobTitle, "</li>\n            </ul>\n        </div>\n        <div class=\"volDashboard__skills\">\n            <h6>These are your skills:</h6>\n            <ul>\n                <li>").concat((0, _Skills.default)(volunteer.skills), "</li>\n            </ul>\n        </div>\n        <div class=\"volDashboard__causes\">\n            <h6>These are the causes you support:</h6>\n            <ul>\n                <li>").concat((0, _Cause.default)(volunteer.causes), "</li>\n            </ul>\n        </div>\n        <div class=\"volDashboard__projects\">\n            <h6>These are the projects you've pitched:</h6>\n            <ul>\n                <li>").concat((0, _Project.default)(volunteer.projects), "</li>\n            </ul>\n        </div>\n    </div>\n    <h2>Click the button below to see organizations to make a proposal to.</h2>\n    <button class=\"js--see-organizations button__big\" id=\"").concat(volunteer.volunteerId, "\">SEE ORGANIZATIONS</button>\n    \n    ");

}
},{"./Skills":"js/components/Skills.js","./Cause":"js/components/Cause.js","./Project":"js/components/Project.js"}],"js/components/OrgForm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OrgForm;

function OrgForm(causes) {
  return "\n    <h1>Organization Sign Up Page</h1>\n        <div class=\"orgForm__container\">\n            <div class=\"contact-info__container\">\n                <input type=\"text\" class=\"add__orgName\" placeholder=\"Organization Name:\">\n                <input type=\"text\" class=\"add__mission\" placeholder=\"Your mission:\"><br>\n                <input type=\"text\" class=\"add__contactPerson\" placeholder=\"Organization contact:\">\n                <input type=\"text\" class=\"add__contactEmail\" placeholder=\"Contact Email:\"><br>\n                <input type=\"text\" class=\"add__orgUrl\" placeholder=\"Website:\"><br>\n            </div>\n                       \n            \n            <ul id=\"causes\">\n                ".concat(causes.map(function (cause) {
    return "\n                    <li class=\"cause\">     \n                        <input type=\"checkbox\" class=\"cause__causeName\" id=\"".concat(cause.causeId, "\" name=\"causeIds\" value=\"").concat(cause.causeId, "\">").concat(cause.causeName, "\n                    </li>\n                ");
  }).join(''), "\n            </ul>\n            \n            <button class=\"js-add-organization button\">Sign Up!</button>\n        ");
}
},{}],"js/components/OrganizationDashboard.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OrganizationDashboard;

var _Cause = _interopRequireDefault(require("./Cause"));

var _Project = _interopRequireDefault(require("./Project"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function OrganizationDashboard(organization) {
  return "\n    <h1>Welcome, ".concat(organization.orgName, "!</h1>\n\n    <h2>Here is your user information:</h2>\n    <ul>\n        <li>Organization: ").concat(organization.orgName, "</li>\n        <li>Mission: ").concat(organization.orgMission, "</li>\n        <li>Contact Person: ").concat(organization.contactPerson, "</li>\n        <li>Contact Email: ").concat(organization.orgEmail, "</li>\n        <li>Website: ").concat(organization.websiteUrl, "</li>\n    </ul>\n\n    <h2>Your organization supports:</h2>\n    <ul>\n        <li>").concat((0, _Cause.default)(organization.causes), "</li>\n    </ul>\n    <h3>Click to search volunteers</h3>\n    <button class=\"js-get-volunteer-search\" id=\"").concat(organization.organizationId, "\">click here</button>\n    ");
}

},{"./Cause":"js/components/Cause.js","./Project":"js/components/Project.js"}],"js/components/Volunteers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Volunteers;

function Volunteers(volunteers) {
  return "\n    <ul class=\"volunteers\">\n    ".concat(volunteers.map(function (volunteer) {
    return "\n            <h2 class=\"volunteer\" id=\"".concat(volunteer.volunteerId, "\">").concat(volunteer.firstName, " ").concat(volunteer.lastName, "</h2>\n            <h3 class =\"volunteer__email\">").concat(volunteer.email, "</h3>\n            ");
  }).join(''), "\n    </ul>\n        ");
}
},{}],"js/components/VolunteerSearch.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = VolunterSearch;

function VolunterSearch(organization, skills) {
  return "\n        <h3>Search for volunteers by a skill here:</h3>\n        <select class=\"\">\n        ".concat(skills.map(function (skill) {
    return "\n                <option class=\"js-dropdown-skill\" id=\"".concat(skill.skillId, "\" value=\"").concat(skill.skillId, "\">").concat(skill.skillName, "</option> \n            ");
  }).join(''), "\n        </select>      \n                \n        <button class=\"js-find-volunteers-by-skill button\" id=\"").concat(organization.organizationId, "\">Find Volunteers</button>\n    ");
}
},{}],"js/components/VolunteerList.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = VolunteerList;

var _Volunteers = _interopRequireDefault(require("./Volunteers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function VolunteerList(organization, skill, volunteers) {
  console.log(organization.organizationId);
  console.log(skill.skillId);
  return "\n    ".concat(volunteers.map(function (volunteer) {
    return "\n        <h2 class=\"volunteer\" id=\"".concat(volunteer.volunteerId, "\">").concat(volunteer.firstName, " ").concat(volunteer.lastName, "</h2>\n        <h3 class =\"volunteer__email\">").concat(volunteer.email, "</h3>\n        ");
  }).join(''), "\n    <ul class=\"volunteers\">\n    \n    <button class=\"js-back-to-dashboard\" id=\"").concat(organization.organizationId, "\">Back to Dashboard</button>\n    ");
}
},{"./Volunteers":"js/components/Volunteers.js"}],"js/app.js":[function(require,module,exports) {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = VolHeader;

function VolHeader(volunteer) {
  return "\n\n<div class=\"nav\">\n    <ul>\n        <li class=\"logo js-landing\">Logo Image HERE</li>\n        <li class=\"title js-landing\">Pitch For Good</li>\n        <li class=\"welcome\">Welcome, ".concat(volunteer.firstName, "!</li>\n        <li><button type=\"button\" class=\"js-log-out logout\">Log Out</button></li>\n        <li><button type=\"button\" class=\"js-delete-account delete\" id=\"").concat(volunteer.volunteerId, "\">Delete Account</button></li>\n    </ul>\n</div>\n");
}
},{}],"js/components/OrgHeader.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OrgHeader;

function OrgHeader() {
  return "\n    \n    <h1>This is the header for organizations.</h1>\n    ";
}
},{}],"js/components/VolLanding.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = VolLanding;

function VolLanding() {
  return "\n    <h1>Returning User Sign In</h1>\n    <form>\n        <span>Username: <input type=\"text\" id=\"username\" class=\"vol-username\"></span><br>\n        <span>Password: <input type=\"text\" id=\"password\" class=\"vol-password\"></span><br>\n        <button class=\"js-vol-signin\">Submit</button>\n    </form>\n\n    <h1>New User?</h1>\n    <button class=\"js--sign-up__volunteer\">Create Account</button>\n    ";
}
},{}],"js/app.js":[function(require,module,exports) {
"use strict";

var _VolForm = _interopRequireDefault(require("./components/VolForm"));

var _Organizations = _interopRequireDefault(require("./components/Organizations"));

var _ProjectForm = _interopRequireDefault(require("./components/ProjectForm"));

var _landing = _interopRequireDefault(require("./components/landing"));

var _apiActions = _interopRequireDefault(require("./utils/api/api-actions"));

var _eventActions = _interopRequireDefault(require("./utils/events/event-actions"));

var _VolunteerDashboard = _interopRequireDefault(require("./components/VolunteerDashboard"));

var _OrgForm = _interopRequireDefault(require("./components/OrgForm"));

var _OrganizationDashboard = _interopRequireDefault(require("./components/OrganizationDashboard"));


var _Volunteers = _interopRequireDefault(require("./components/Volunteers"));

var _VolunteerSearch = _interopRequireDefault(require("./components/VolunteerSearch"));

var _VolunteerList = _interopRequireDefault(require("./components/VolunteerList"));

var _VolHeader = _interopRequireDefault(require("./components/VolHeader"));

var _OrgHeader = _interopRequireDefault(require("./components/OrgHeader"));

var _VolLanding = _interopRequireDefault(require("./components/VolLanding"));


function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

main();

function main() {
  getAppContext().innerHTML = (0, _landing.default)();
  getOrganizations(); // viewSingleOrganization()

  volClickToSignUp();
  createNewVolunteer();
  getProjectForm();
  addProject();
  orgClickToSignUp();
  addOrganization();

  getVolunteerSearchForm();
  getVolunteerListFromForm();
  getBackToOrgDashboard();

  goHome();
  deleteVolAccount();
  (0, _landing.default)();
  volEnter();
  volSignIn();
  (0, _VolLanding.default)();
}

function goHome() {
  _eventActions.default.on(getHeaderContext(), 'click', function () {
    if (event.target.classList.contains('js-log-out')) {
      getAppContext().innerHTML = (0, _landing.default)();
      getHeaderContext().innerHTML = "";
    }
  });

}

function getOrganizations() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('js--see-organizations')) {
      _apiActions.default.getRequest("http://localhost:8080/volunteers/".concat(event.target.id), function (volunteer) {
        _apiActions.default.getRequest('http://localhost:8080/organizations', function (organizations) {
          getAppContext().innerHTML = (0, _Organizations.default)(volunteer, organizations);
        });
      });
    }
  });
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

function volEnter() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('js--enter__volunteer')) {
      getAppContext().innerHTML = (0, _VolLanding.default)();
    }
  });
}

function orgClickToSignUp() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('js--sign-up__organization')) {
      _apiActions.default.getRequest('http://localhost:8080/causes', function (causes) {
        getAppContext().innerHTML = (0, _OrgForm.default)(causes);
      });
    }
  });
}

function createNewVolunteer() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('js-add-volunteer')) {
      var firstName = document.querySelector('.add__firstName').value;
      var lastName = document.querySelector('.add__lastName').value;
      var volUserName = document.querySelector('.add__volUserName').value;
      var volPassword = document.querySelector('.add__volPassword').value;
      var phoneNum = document.querySelector('.add__phoneNum').value;
      var email = document.querySelector('.add__email').value;
      var jobTitle = document.querySelector('.add__jobTitle').value;
      var skills = Array.from(document.querySelectorAll('.skill__skillName')).filter(function (checkbox) {
        return checkbox.checked;
      }).map(function (checkbox) {
        return checkbox.value;
      });
      var causes = Array.from(document.querySelectorAll('.cause__causeName')).filter(function (checkbox) {
        return checkbox.checked;
      }).map(function (checkbox) {
        return checkbox.value;
      });

      _apiActions.default.postRequest('http://localhost:8080/volunteers/add', {
        firstName: firstName,
        lastName: lastName,
        phoneNum: phoneNum,
        email: email,
        jobTitle: jobTitle,
        volUserName: volUserName,
        volPassword: volPassword,
        skills: skills,
        causes: causes
      }, function (volunteer) {
        return volDashboardAndHeader(volunteer);
      });
    }
  });
}

function deleteVolAccount() {
  _eventActions.default.on(getHeaderContext(), 'click', function () {
    if (event.target.classList.contains('js-delete-account')) {
      if (confirm('This action is final! Are you sure you want to delete your account?')) {
        _apiActions.default.deleteRequest("http://localhost:8080/volunteers/delete/".concat(event.target.id), {}, function (volunteers) {
          return getAppContext().innerHTML = (0, _landing.default)();
        }, getHeaderContext().innerHTML = "");
      } else {
        return false;
      }
    }
  });
}

function volDashboardAndHeader(volunteer) {
  getAppContext().innerHTML = (0, _VolunteerDashboard.default)(volunteer);
  getHeaderContext().innerHTML = (0, _VolHeader.default)(volunteer);
}

function getProjectForm() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('js-get-project-form')) {
      // use hidden inputs (see volunteerDashboard) to pull in an id, as opposed to div, then do line below to get different id, in addition to event target id
      // use event.target.parentElement.querySelector().id ... somehow. broke the app
      _apiActions.default.getRequest("http://localhost:8080/organizations/".concat(event.target.id), function (organization) {
        console.log(organization);

        _apiActions.default.getRequest('http://localhost:8080/skills', function (skills) {
          console.log(skills);
          var volunteerId = document.querySelector('.volunteerId').id;

          _apiActions.default.getRequest("http://localhost:8080/volunteers/".concat(volunteerId), function (volunteer) {
            console.log(volunteer);
            getAppContext().innerHTML = (0, _ProjectForm.default)(organization, skills, volunteer);
          });
        });
      });
    }
  });
}

function addProject() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('js-add-project')) {
      var projectName = document.querySelector('.add__projectName').value;
      var projectDescription = document.querySelector('.add__projectDescription').value;
      var estimatedDuration = document.querySelector('.add__estimatedDuration').value;
      var volunteerSubmitId = document.querySelector(".project__submit-parent-volunteer").id;
      var orgSubmitId = document.querySelector('.js-add-project').id;
      var skills = Array.from(document.querySelectorAll('.js-skill__skillName')).filter(function (checkbox) {
        return checkbox.checked;
      }).map(function (checkbox) {
        return checkbox.value;
      });

      _apiActions.default.postRequest("http://localhost:8080/projects/add", {
        projectName: projectName,
        projectDescription: projectDescription,
        estimatedDuration: estimatedDuration,
        volunteerSubmitId: volunteerSubmitId,
        orgSubmitId: orgSubmitId,
        skills: skills
      }, function (volunteer) {
        return getAppContext().innerHTML = (0, _VolunteerDashboard.default)(volunteer);
      });
    }
  });
}

function addOrganization() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('js-add-organization')) {
      var orgName = document.querySelector('.add__orgName').value;
      var mission = document.querySelector('.add__mission').value;
      var contactPerson = document.querySelector('.add__contactPerson').value;
      var contactEmail = document.querySelector(".add__contactEmail").value;
      var orgUrl = document.querySelector('.add__orgUrl').value;
      var causes = Array.from(document.querySelectorAll('.cause__causeName')).filter(function (checkbox) {
        return checkbox.checked;
      }).map(function (checkbox) {
        return checkbox.value;
      });

      _apiActions.default.postRequest("http://localhost:8080/organizations/add", {
        orgName: orgName,
        mission: mission,
        contactPerson: contactPerson,
        contactEmail: contactEmail,
        orgUrl: orgUrl,
        causes: causes
      }, function (organization) {
        return getAppContext().innerHTML = (0, _OrganizationDashboard.default)(organization);
      });
    }
  });
}


function getVolunteerSearchForm() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('js-get-volunteer-search')) {
      _apiActions.default.getRequest("http://localhost:8080/organizations/".concat(event.target.id), function (organization) {
        _apiActions.default.getRequest('http://localhost:8080/skills/', function (skills) {
          getAppContext().innerHTML = (0, _VolunteerSearch.default)(organization, skills);
        });
      });
    }
  });
}

function getVolunteerListFromForm() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('js-find-volunteers-by-skill')) {
      _apiActions.default.getRequest("http://localhost:8080/organizations/".concat(event.target.id), function (organization) {
        var skillId = document.querySelector('.js-dropdown-skill').id;

        _apiActions.default.getRequest("http://localhost:8080/skills/".concat(skillId), function (skill) {
          _apiActions.default.getRequest("http://localhost:8080/skills/".concat(skillId, "/volunteers"), function (volunteers) {
            getAppContext().innerHTML = (0, _VolunteerList.default)(organization, skill, volunteers);
          });
        });

function volSignIn() {
  _eventActions.default.on(getAppContext(), 'click', function (e) {
    if (event.target.classList.contains('js-vol-signin')) {
      e.preventDefault();
      var username = document.querySelector('.vol-username').value;
      var password = document.querySelector('.vol-password').value;

      _apiActions.default.postRequest('http://localhost:8080/volunteers/signin', {
        username: username,
        password: password
      }, function (volunteer) {
        return volDashboardAndHeader(volunteer);

      });
    }
  });
}


function getBackToOrgDashboard() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('js-back-to-dashboard')) {
      _apiActions.default.getRequest("http://localhost:8080/organizations/".concat(event.target.id), function (organization) {
        getAppContext().innerHTML = (0, _OrganizationDashboard.default)(organization);
      });
    }
  });

function getHeaderContext() {
  return document.querySelector("#header");

}

function getAppContext() {
  return document.querySelector("#app");
}

},{"./components/VolForm":"js/components/VolForm.js","./components/Organization":"js/components/Organization.js","./components/Organizations":"js/components/Organizations.js","./components/Project":"js/components/Project.js","./components/ProjectForm":"js/components/ProjectForm.js","./components/landing":"js/components/landing.js","./utils/api/api-actions":"js/utils/api/api-actions.js","./utils/events/event-actions":"js/utils/events/event-actions.js","./components/VolunteerDashboard":"js/components/VolunteerDashboard.js","./components/Skills":"js/components/Skills.js","./components/Cause":"js/components/Cause.js","./components/OrgForm":"js/components/OrgForm.js","./components/OrganizationDashboard":"js/components/OrganizationDashboard.js","./components/Volunteers":"js/components/Volunteers.js","./components/VolunteerSearch":"js/components/VolunteerSearch.js","./components/VolunteerList":"js/components/VolunteerList.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {

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

  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65075" + '/');


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