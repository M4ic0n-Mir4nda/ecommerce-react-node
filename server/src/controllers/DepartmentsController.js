const { getAllDepartmentsServices } = require('../services/DepartmentsServices');

class DepartmentsController {
    static async getAllDeparts(req, res) {
        try {
            const departs = await getAllDepartmentsServices();
            return res.status(200).send(departs);
        } catch (err) {
            return res.status(500).send('ocorreu um erro', err);
        }
    }
}

module.exports = DepartmentsController;