
export class KubernetesAppConfigCtrl {
  constructor() {
    this.appEditCtrl.setPostUpdateHook(this.postUpdate.bind(this));
  }

  postUpdate() {
    if (!this.appModel.enabled) {
      return Promise.resolve();
    }

    return this.appEditCtrl.importDashboards().then(() => {
      return {
        url: "/dashboard/db/summary-dashboard",
        message: "Kubernetes app installed!"
      };
    });
  }
}

KubernetesAppConfigCtrl.templateUrl = 'components/config.html';
