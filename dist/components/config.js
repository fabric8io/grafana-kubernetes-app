"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KubernetesAppConfigCtrl = exports.KubernetesAppConfigCtrl = function () {
  function KubernetesAppConfigCtrl() {
    _classCallCheck(this, KubernetesAppConfigCtrl);

    this.appEditCtrl.setPostUpdateHook(this.postUpdate.bind(this));
  }

  _createClass(KubernetesAppConfigCtrl, [{
    key: "postUpdate",
    value: function postUpdate() {
      if (!this.appModel.enabled) {
        return Promise.resolve();
      }

      return this.appEditCtrl.importDashboards().then(function () {
        return {
          url: "/dashboard/db/summary-dashboard",
          message: "Kubernetes app installed!"
        };
      });
    }
  }]);

  return KubernetesAppConfigCtrl;
}();

KubernetesAppConfigCtrl.templateUrl = 'components/config.html';
//# sourceMappingURL=config.js.map
