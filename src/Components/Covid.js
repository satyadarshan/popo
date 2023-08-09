import React, { useEffect,useState } from "react"
import './App.css';

const Covid = () =>{

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
           const actualdata = await res.json();
           console.log(actualdata.statewise[0]);
           setData(actualData.setwise[0]);

        } catch (error) {
            console.log(error);

        }
    }

    useEffect( () => {
         getCovidData();

    },[]);
    return(
        <>
        <section>
            <h1>LIVE</h1>
            <h2>COVID-19 CORONAVIRUS TRACKER</h2>
            <ul>
                <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"> <span> OUR </span> COUNTRY </p>
                            <P className="card__total card__small"> INDIA </P>
                        </div>

                    </div>
                </li>

                <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"> <span> TOTAL </span> RECOVERED </p>
                            <P className="card__total card__small"> {data.recovered} </P>
                        </div>

                    </div>
                </li>

                <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"> <span> TOTAL </span> CONFIRMED </p>
                            <P className="card__total card__small"> {data.confirmed} </P>
                        </div>

                    </div>
                </li>

                <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"> <span> TOTAL </span> DEATH </p>
                            <P className="card__total card__small"> {data.deaths} </P>
                        </div>

                    </div>
                </li>

                <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"> <span> TOTAL </span> ACTIVE </p>
                            <P className="card__total card__small"> {data.active} </P>
                        </div>

                    </div>
                </li>

                <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"> <span> LAST </span> UPDATE </p>
                            <P className="card__total card__small"> {data.lastupadatetime} </P>
                        </div>

                    </div>
                </li>
            </ul>
            </section>
        </>
    )
}

