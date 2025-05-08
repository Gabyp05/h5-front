import { NextResponse } from "next/server";

const roleInitialPaths = {
    client: "/panel_usuario/mi_perfil",
    superadmin: "/panel_admin/crm/leads",
    SAM: "/panel_admin/crm/leads",
};

const roleBasePaths = {
    client: "/panel_usuario",
    superadmin: "/panel_admin",
    SAM: "/panel_admin",
};

export async function middleware(req) {
    const token = req.cookies.get("token")?.value;
    const role = req.cookies.get("role")?.value;
    const url = new URL(req.url);

    const initialPath = roleInitialPaths[role];
    const basePath = roleBasePaths[role];

    if (url.pathname === "/inicio_sesion") {
        if (token && role && initialPath) {
            return NextResponse.redirect(new URL(initialPath, req.url));
        }
        return NextResponse.next();
    }

    if (!token) {
        return NextResponse.redirect(new URL("/inicio_sesion", req.url));
    }

    if (!initialPath || !basePath) {
        return NextResponse.redirect(new URL("/inicio_sesion", req.url));
    }

    if (!url.pathname.startsWith(basePath)) {
        return NextResponse.redirect(new URL(initialPath, req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/panel_usuario/:path*", "/panel_admin/:path*", "/inicio_sesion"],
};
