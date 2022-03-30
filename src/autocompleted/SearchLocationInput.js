let autoComplete;

export const loadScript = (url, callback) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
    console.log('loadScript')
    if (script.readyState) {
        script.onreadystatechange = function() {
            if (script.readyState === "loaded" || script.readyState === "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {
        script.onload = () => callback();
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
};

export const handleScriptLoad = (changeCity, autoCompleteRef) => {
   autoComplete = new window.google.maps.places.Autocomplete(
        autoCompleteRef.current,
        { types: ["(cities)"], componentRestrictions: { country: "ua" } }
    );
    autoComplete.addListener("place_changed", () =>
            handlePlaceSelect(changeCity)
    );
}

async function handlePlaceSelect(changeCity) {
    console.log('handlePlaceSelect')
    const addressObject = autoComplete.getPlace();
    const query = addressObject.formatted_address;
    changeCity(query);
}



