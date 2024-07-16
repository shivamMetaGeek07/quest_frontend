"use client"
import type { Metadata } from "next";
import { useProtectedRoute } from "@/utils/privateRoute";
import { BallTriangle } from "react-loader-spinner";




export default function userLayout ( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> )

{
    // const { isLoading, hasAccess } = useProtectedRoute("user");
    // if (isLoading) {

    //     <div className="flex justify-center h-screen items-center">
    //     <BallTriangle/>
    //     </div>
    //     }
    //     if (hasAccess) {
            // Render children if the role matches
            return <>{children}</>;
        // }
}
