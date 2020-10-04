import CalcsAdminModule from "./modules/calcs";
import DashboardAdminModule from "./modules/dashboard";

const TestModules = [
    new CalcsAdminModule({}),
    new DashboardAdminModule({})
];

export {TestModules};
