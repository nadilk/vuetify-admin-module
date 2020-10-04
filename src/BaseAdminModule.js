class BaseAdminModule {
    constructor(options){
        this.module = {options};
    }

    init(){
        this.module.routes = this.getRoutes();
        this.module.menuItems = this.getMenuItems();
    }

    getModuleName(){

    }

    getRoutes(){

    }

    getMenuItems(){

    }

    installRoutes(Router){
        const self = this;
        function setRoute(r){
            r.name = `${self.getModuleName()}.${r.name}`;
            r.path = `${self.getModuleName()}/${r.url}`;
            if(r.children)
            {
                r.children.forEach(setRoute);
            }
            return r;
        }
        let { routes } = Router.options;
        let routeData = routes.find(r => r.name === "root");
        routeData.children = [
            ...routeData.children,
            {
                name: self.getModuleName(),
                path: self.getModuleName(),
                children: [
                    ...self.getRoutes().map(setRoute)
                ]
            }
        ];
        Router.addRoutes([routeData]);
    }

    installMenuItems(Store,routePrefix){
        const self = this;
        this.getMenuItems().forEach(m => {
            m.id = m.id === 0 ? 0 : (self.getModuleName() + '_' + m.id);
            m.url = `/${routePrefix}/${self.getModuleName()}/${m.url}`;
            m.parentId = m.parentId === 0 ? 0 : (self.getModuleName() + '_' + m.parentId);
            Store.dispatch('pushMenuItem', m);
        });
    }

    install({App,Vue,Router,Store},{routePrefix}){

        this.init();

        this.installRoutes(Router);
        this.installMenuItems(Store,routePrefix)

    }
}

export default BaseAdminModule;
