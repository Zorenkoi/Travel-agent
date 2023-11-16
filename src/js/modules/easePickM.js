import { easepick } from '@easepick/bundle';

function easepickM(){
    const picker = new easepick.create({
        element: document.querySelector('#date'),
        css: [
          'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
        ],
    });
}

export default easepickM
