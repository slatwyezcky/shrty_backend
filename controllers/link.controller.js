import Link from '../models/Link.model.js';
import { checkAlias, checkURL } from '../utils/index.js';

export default class LinkController {
  static async createLink(req, res) {
    const { url, alias } = req.body;

    if (!checkURL(url)) {
      return res
        .status(401)
        .json({ message: `You should provide correct URL` });
    }

    if (!checkAlias(alias)) {
      return res.status(401).json({
        message: `Alias should consist only of english letters and digits`,
      });
    }

    const duplicateUrl = await Link.findOne({ url });
    if (duplicateUrl) {
      return res.json({ alias: duplicateUrl.alias });
    }
    const duplicateAlias = await Link.findOne({ alias });
    if (duplicateAlias) {
      return res
        .status(409)
        .json({ message: `Alias ${alias} is already taken` });
    }
    const link = await Link.create({
      url,
      alias: alias || Date.now().toString(36),
    });
    res.status(200).json({ alias: link.alias });
  }

  static async getLink(req, res) {
    const { alias } = req.params;
    console.log(alias);
    const link = await Link.findOne({ alias });
    if (!link) {
      return res.status(404).json({ message: "This short URL doesn't exist" });
    }
    link.counter++;
    await link.save();
    return res.status(200).json({ url: link.url });
  }
}
