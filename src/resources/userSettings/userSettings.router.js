const { OK } = require('http-status-codes');
const router = require('express').Router({ mergeParams: true });
const userSettingsService = require('./userSettings.service');
const { userSettings } = require('../../utils/validation/schemas');
const { validator } = require('../../utils/validation/validator');

router.get('/', async (req, res) => {
  const setting = await userSettingsService.get(req.params.id);
  res.status(OK).send(setting.toResponse());
});

router.put('/', validator(userSettings, 'body'), async (req, res) => {
  const setting = await userSettingsService.upsert(req.params.id, req.body);
  res.status(OK).send(setting.toResponse());
});

module.exports = router;
