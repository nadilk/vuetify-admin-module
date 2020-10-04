import BaseAdminModule from "../../src/BaseAdminModule";
import routes from "./routes";
import menuItems from "./menuItems";

class CalcsAdminModule extends BaseAdminModule{
    getRoutes() {
        return routes;
    }

    getMenuItems() {
        return menuItems;
    }

    getModuleName() {
        return "calcs";
    }
}

export default CalcsAdminModule;
