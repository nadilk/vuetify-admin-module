import BaseAdminModule from "../src/BaseAdminModule";
import PassThrough from "../src/PassThrough";
import Ogpo from "./Pages/Ogpo";
import Tourism from "./Pages/Tourism";

class CalcsAdminModule extends BaseAdminModule{
    getRoutes() {
        return [
            {
                path     : "",
                component: PassThrough,
                children : [
                    {
                        name     : "ogpo",
                        path     : "ogpo",
                        component: PassThrough,
                        children : [
                            {
                                name     : "sub",
                                path     : "sub",
                                component: Ogpo,
                            },
                        ]
                    },
                    {
                        name     : "tourism",
                        path     : "tourism",
                        component: Tourism
                    },
                ]
            },
        ];
    }
    getMenuItems() {
        return [
            {
                id        : 1,
                text      : "Расчеты",
                icon      : "",
                url       : "/",
                isExpanded: false,
                parentId  : 0
            },
            {
                id        : 2,
                text      : "Огпо",
                icon      : "",
                url       : "/ogpo",
                isExpanded: false,
                parentId  : 1
            },
            {
                id        : 3,
                text      : "Туризм",
                icon      : "",
                url       : "/tourism",
                isExpanded: false,
                parentId  : 1
            },
        ];
    }
}
