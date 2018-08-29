let Controller = require('../core/controller');
class mainController extends Controller {
    getCars() {
        console.log(this); // undefined
        //this.response.send('getMain' + this.format);
    }
}

module.exports = mainController;
