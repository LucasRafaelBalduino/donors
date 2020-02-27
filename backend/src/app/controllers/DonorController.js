import Donor from '../models/Donor';

class DonorController {
  async store(req, res) {
    const donor = await Donor.create(req.body);

    return res.json(donor);
  }
}

export default new DonorController();
