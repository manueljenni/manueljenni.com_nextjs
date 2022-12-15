import React from 'react'

export default function SideProjects() {
    return (
        <>
            <div className="rounded-lg p-4 ring-1 ring-neutral-300">
                <div className="flex h-full flex-col justify-between space-y-3">
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <p className="text-2xl font-medium">Freelancely</p>
                            <div className="flex space-x-3">
                                <p className="rounded bg-blue-200 py-1 px-2 text-sm uppercase">
                                    Web
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="text-base font-medium">Bookkepping for freelancers</p>
                            <p className="text-base">
                                Keep track of your billable hours, invoices, payments
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3 pt-2 text-xs uppercase">
                        <p className="rounded bg-blue-200 py-1 px-2 text-blue-800">NextJS</p>
                        <p className="rounded bg-green-200 py-1 px-2 text-green-800">
                            Spring Boot
                        </p>
                    </div>
                </div>
            </div>
            <div className="rounded-lg p-4 ring-1 ring-neutral-300">
                <div className="flex h-full flex-col justify-between space-y-3">
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <p className="text-2xl font-medium">MyNomadTravels</p>
                            <div className="flex space-x-3">
                                <p className="rounded bg-blue-200 py-1 px-2 text-sm uppercase">
                                    Web
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="text-base font-medium">Travel planner</p>
                            <p className="text-base">
                                Track your upcoming trips, flights & hotel stays.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3 pt-2 text-xs uppercase">
                        <p className="rounded bg-blue-200 py-1 px-2 text-blue-800">NextJS</p>
                        <p className="rounded bg-green-200 py-1 px-2 text-green-800">
                            Spring Boot
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
