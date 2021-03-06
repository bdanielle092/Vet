import React from "react"
import { Route } from "react-router-dom"
import { ClinicForm } from "./components/clinics/ClinicForm"
import { ClinicProvider } from "./components/clinics/ClinicProvider"
import { ClinicDetail } from "./components/clinics/ClinicsDetail"
import { ClinicList } from "./components/clinics/ClinicsList"

export const ApplicationViews = () => {
    return (
        <>
            <ClinicProvider>
                <Route exact path="/clinics">
                    <ClinicList />
                </Route>
                <Route exact path="/clinics/detail/:clinicId(\d+)">
                    <ClinicDetail />
                </Route>
                <Route path="/clinics/create">
                    <ClinicForm />
                </Route>
            </ClinicProvider>
        </>
    )
}