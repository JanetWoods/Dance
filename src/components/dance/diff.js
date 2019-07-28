import moment from 'react-moment'
import { createWriteStream } from 'fs';


const diff = Object.create(null, {

    value: function (a, b) {
        var a = moment(a)
        var b = moment([b])
    return a.diffb;
    }

})


export default diff