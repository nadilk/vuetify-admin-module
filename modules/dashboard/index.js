import BaseAdminModule from "../../src/BaseAdminModule";
import routes from "./routes";
import menuItems from "./menuItems";

class DashboardAdminModule extends BaseAdminModule{
    getRoutes() {
        return routes;
    }

    getMenuItems() {
        return menuItems;
    }

    getModuleName() {
        return "dashboard"
    }
}

export default DashboardAdminModule;
