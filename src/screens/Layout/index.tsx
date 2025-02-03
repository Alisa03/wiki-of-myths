import { Suspense, useLayoutEffect } from "react"
import { Outlet } from "react-router-dom"

import { Header } from "~/modules"

import { Loading } from "~/shared/ui"

export const Layout = () => {
    useLayoutEffect(() => {
        window.scrollTo({ top: 0 });
    }, [])

    return <Suspense fallback={<Loading />}>
        <Header />
        <Outlet />
    </Suspense>
}