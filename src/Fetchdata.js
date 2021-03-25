import React, { useState, useEffect, Component } from "react";
import fog from "./img/weather-icons/fog.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import storm from "./img/weather-icons/storm.svg";
import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import unknown from "./img/weather-icons/unknown.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";

class Fog extends Component {
    render() {
        return (
            <div>
                <img src={fog} alt="fog icon" />
            </div>
        );
    }
}

class Rain extends Component {
    render() {
        return (
            <div>
                <img src={rain} alt="fog rain" />
            </div>
        );
    }
}

class Snow extends Component {
    render() {
        return (
            <div>
                <img src={snow} alt="snow rain" />
            </div>
        );
    }
}

class Storm extends Component {
    render() {
        return (
            <div>
                <img src={storm} alt="storm rain" />
            </div>
        );
    }
}

class Clear extends Component {
    render() {
        return (
            <div>
                <img src={clear} alt="clear icon" />
            </div>
        );
    }
}

class Cloudy extends Component {
    render() {
        return (
            <div>
                <img src={cloudy} alt="cloudy icon" />
            </div>
        );
    }
}

class Unknown extends Component {
    render() {
        return (
            <div>
                <img src={unknown} alt="unknown icon" />
            </div>
        );
    }
}

class Drizzle extends Component {
    render() {
        return (
            <div>
                <img src={drizzle} alt="drizzle icon" />
            </div>
        );
    }
}

class Mostlycloudy extends Component {
    render() {
        return (
            <div>
                <img src={mostlycloudy} alt="mostlycloudy icon" />
            </div>
        );
    }
}

class Partlycloudy extends Component {
    render() {
        return (
            <div>
                <img src={partlycloudy} alt="partlycloudy icon" />
            </div>
        );
    }
}

function Fetch() {
    const key = '9fa465a22990f453259286ee3db08e41';
        const city = 'Tripoli';
    const country = 'LB';

    const [tempMax, setTempMax] = useState('');
    const [tempMin, setTempMin] = useState('');
    const [description, setDescription] = useState('');
    const [main, setMain] = useState('');
    const [pressure, setPressure] = useState('');
    const [humidity, setHumidity] = useState('');

    const [temp1, setTemp1] = useState('');
    const [main1, setMain1] = useState('');
    const [time1, setTime1] = useState('');

    const [temp2, setTemp2] = useState('');
    const [main2, setMain2] = useState('');
    const [time2, setTime2] = useState('');

    const [temp3, setTemp3] = useState('');
    const [main3, setMain3] = useState('');
    const [time3, setTime3] = useState('');

    const [temp4, setTemp4] = useState('');
    const [main4, setMain4] = useState('');
    const [time4, setTime4] = useState('');

    const [temp5, setTemp5] = useState('');
    const [main5, setMain5] = useState('');
    const [time5, setTime5] = useState('');

    const [temp6, setTemp6] = useState('');
    const [main6, setMain6] = useState('');
    const [time6, setTime6] = useState('');

    const [temp7, setTemp7] = useState('');
    const [main7, setMain7] = useState('');
    const [time7, setTime7] = useState('');
    useEffect(() => {
        fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + city + ',' + country + '&cnt=8&units=metric&appid=' + key)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                var i = 0;
                setTempMax(data.list[i].main.temp_max);
                setTempMin(data.list[i].main.temp_min);
                setDescription(data.list[i].weather[0].description);
                setMain(data.list[i].weather[0].main);
                setPressure(data.list[i].main.pressure);
                setHumidity(data.list[i].main.humidity);

                setTemp1(data.list[i + 1].main.temp);
                setMain1(data.list[i + 1].weather[0].main);
                setTime1(data.list[i + 1].dt_txt);

                setTemp2(data.list[i + 2].main.temp);
                setMain2(data.list[i + 2].weather[0].main);
                setTime2(data.list[i + 2].dt_txt);

                setTemp3(data.list[i + 3].main.temp);
                setMain3(data.list[i + 3].weather[0].main);
                setTime3(data.list[i + 3].dt_txt);

                setTemp4(data.list[i + 4].main.temp);
                setMain4(data.list[i + 4].weather[0].main);
                setTime4(data.list[i + 4].dt_txt);

                setTemp5(data.list[i + 5].main.temp);
                setMain5(data.list[i + 5].weather[0].main);
                setTime5(data.list[i + 5].dt_txt);

                setTemp6(data.list[i + 6].main.temp);
                setMain6(data.list[i + 6].weather[0].main);
                setTime6(data.list[i + 6].dt_txt);

                setTemp7(data.list[i + 7].main.temp);
                setMain7(data.list[i + 7].weather[0].main);
                setTime7(data.list[i + 7].dt_txt);
            })
    }, [])

    var arr = [
        [main, description, tempMin, tempMax, humidity, pressure],
        [time1.substring(10, 16), main1, temp1],
        [time2.substring(10, 16), main2, temp2],
        [time3.substring(10, 16), main3, temp3],
        [time4.substring(10, 16), main4, temp4],
        [time5.substring(10, 16), main5, temp5],
        [time6.substring(10, 16), main6, temp6],
        [time7.substring(10, 16), main7, temp7]
    ];

    var f0;
    if (arr[0][0] == "Fog") { f0 = <Fog /> }
    else if (arr[0][0] == "Rain") { f0 = <Rain /> }
    else if (arr[0][0] == "Snow") { f0 = <Snow /> }
    else if (arr[0][0] == "Storm") { f0 = <Storm /> }
    else if (arr[0][0] == "Clear") { f0= <Clear /> }
    else if (arr[0][0] == "Cloudy") { f0 = <Cloudy /> }
    else if (arr[0][0] == "Unknown") { f0 = <Unknown /> }
    else if (arr[0][0] == "Drizzle") { f0 = <Drizzle /> }
    else if (arr[0][0] == "Mostlycloudy") { f0 = <Mostlycloudy /> }
    else if (arr[0][0] == "Partlycloudy") { f0 = <Partlycloudy /> }

    let Items = [];
    for (var j = 1; j <= 7; j++) {
        var f;
        if (arr[j][1] == "Fog") { f = <Fog /> }
        else if (arr[j][1] == "Rain") { f = <Rain /> }
        else if (arr[j][1] == "Snow") { f = <Snow /> }
        else if (arr[j][1] == "Storm") { f = <Storm /> }
        else if (arr[j][1] == "Clear") { f = <Clear /> }
        else if (arr[j][1] == "Cloudy") { f = <Cloudy /> }
        else if (arr[j][1] == "Unknown") { f = <Unknown /> }
        else if (arr[j][1] == "Drizzle") { f = <Drizzle /> }
        else if (arr[j][1] == "Mostlycloudy") { f = <Mostlycloudy /> }
        else if (arr[j][1] == "Partlycloudy") { f = <Partlycloudy /> }
        Items.push(
            <div className="later id">
                <h3>{arr[j][0]}</h3>
                <div className="imlater">
                    {f}
                </div>
                <h3>{arr[j][2]}°C</h3>
            </div>
        )
    }

    return (
        <div className="all">

            <div className="now">
                <div className="imnow">
                    {f0}
                </div>
                <p className="p0"> {arr[0][1]}</p>
                <p className="p1"><span>Temperature &nbsp;</span>{arr[0][2]}{"° to "}{arr[0][3]}°C</p>
                <p className="p2"><span>Humidity  &nbsp;</span>  {arr[0][4]}% <span>  &nbsp;Pressure  &nbsp;</span>  {arr[0][5]}</p>
            </div>

            <div className="laters">
                {Items}
            </div>

        </div>
    );
}
export default Fetch;