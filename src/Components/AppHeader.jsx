import SearchBar from '../Components/Searchbar'
export function AppHeader() {
    return (

        <header>
            <div className="container d-flex justify-content-between align-items-center row m-auto">

                <svg className='col-md-6 col-12 d-flex justify-content-between align-items-center' width="400" height="200" xmlns="http://www.w3.org/2000/svg">

                    <path id="curve" d="M 50,150 Q 200,50 350,150" fill="transparent" stroke="none" />


                    <text fontSize="3rem" fill="#790909" fontWeight="700">
                        <textPath href="#curve" startOffset="50%" textAnchor="middle">
                            BOOLFLIX
                        </textPath>
                    </text>
                </svg>



                <SearchBar />





            </div>
        </header>



    )
}