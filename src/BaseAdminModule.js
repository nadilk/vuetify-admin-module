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



    install({App,Vue,Router,Store},{routePrefix}){
        const self = this;
        this.init();

        function setRoute(r){
            r.name = `${self.getModuleName()}.${r.name}`;
            r.url = `/${routePrefix}/${self.getModuleName()}/${r.url}`;
            if(r.children)
            {
                r.children.forEach(setRoute);
            }
            return r;
        }
        Router.addRoutes([
            self.getRoutes().map(setRoute)
        ]);

        self.getMenuItems().forEach(m => {
            m.id = m.id === 0 ? 0 : (self.getModuleName() + '_' + m.id);
            m.url = `/${routePrefix}/${self.getModuleName()}/${m.url}`;
            m.parentId = m.parentId === 0 ? 0 : (self.getModuleName() + '_' + m.parentId);
            Store.dispatch('pushMenuItem', m);
        });
    }
}

export default BaseAdminModule;
