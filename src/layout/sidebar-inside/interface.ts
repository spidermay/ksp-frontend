export interface RouteInfo {
    id  :any;
    path?:string;
    module :string;
    title:string;
    type:string;
    icontype:string;
    icon?:string;
    children?:ChildrenItems[];
}

export interface ChildrenItems {
    path:string;
    title:string;
    type?:string;
    module?:string;
    shorten:string;
}

export const Routes:RouteInfo[] = [
    {
        id:"employee",
        type:"sub",
        module:"/employee",
        title:"PROFILE.EMPLOYEES",
        icontype:"pe-7s-id",
        children: [
            { shorten:"PLP", path:"list", title:"PROFILE.LIST_EMPLOYEE" },
        ]
    },
    {
        id:"beneficiary",
        type:"sub",
        module:"/beneficiary",
        title:"PROFILE.BENEFICIARIES",
        icontype:"pe-7s-users",
        children: [
            { shorten:"CLC", path:"list", title:"PROFILE.LIST_BENEFICIARY" },
        ]
    },
    // {
    //     id:"support_user",
    //     type:"sub",
    //     module:"/support_user",
    //     title:"PROFILE.USERS",
    //     icontype:"pe-7s-user",
    //     children: [
    //         { module:"user", shorten:"ULU", path:"list", title:"PROFILE.LIST_USER" },
    //         { shorten:"ULS", path:"list", title:"PROFILE.LIST_SUPPORT_USER" },
    //         { module:"user_role", shorten:"ULR", path:"list", title:"PROFILE.LIST_ROLE" },
    //     ]
    // },
];
