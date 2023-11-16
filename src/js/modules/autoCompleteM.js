import autoComplete from "@tarekraafat/autocomplete.js";
import countryList from '../helper/countryList.js'

function autoCompleteM(){
    const autoCompleteJS = new autoComplete({
        placeHolder: ".g Bali, Indonesia",
        data: {
            src: countryList,
            cache: true
        },
        resultItem: {
            highlight: true,
        },
        events: {
            input: {
                selection: (event) => {
                    const selection = event.detail.selection.value;
                    autoCompleteJS.input.value = selection;
                }
            }
        }
    });
}

export default autoCompleteM