import PassThrough from "../../src/PassThrough";
import Ogpo from "./pages/Ogpo";
import Tourism from "./pages/Tourism";

export default [
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
