async function getPage(url) {
    try {
        console.log("hello...")
        const res = await fetch(url, { mode: 'no-cors' });
        if (res && res.ok) {
            const text = await res.text();
            console.log(text);
        }
        else {
            console.log("no....", res);
        }
    } catch (error) {
        console.log("err:", error)
    }
    //let totalCases = text.getElementById("cases");
}

getPage("https://www.theguardian.com/world/2020/oct/04/coronavirus-world-map-which-countries-have-the-most-covid-cases-and-deaths");
// getPage("https://www.worldometers.info/coronavirus/");