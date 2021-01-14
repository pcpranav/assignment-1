let request = new XMLHttpRequest;
request.open("GET", "https://restcountries.eu/rest/v2/all", true);
request.send();
request.onload = function () {
    let countrydata = JSON.parse(this.response);

    for (i in countrydata)
        console.log(countrydata[i].flag);

} 