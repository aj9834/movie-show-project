import React, { Suspense, lazy } from 'react'
import Navbar from "./Navbar";
import Spinner from "./Spinner";

const Cards = lazy(() => import("./Cards"))

const Home = ({ shows }) => {

    return (
        <div>
            <div className="min-h-screen flex flex-col bg-bgDark2">
                <div>
                    <Navbar />
                </div>
                <div className="bg-bgDark2">

                    <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
                        <Suspense fallback={<Spinner />} >
                            {shows && <Cards shows={shows} />}
                        </Suspense>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Home
