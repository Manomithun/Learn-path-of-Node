const { format } = require('date-fns');
const { v4: uuid } = require('uuid');
const fsp = require('fs').promises;
const fs = require('fs');
const path = require('path');

exports.logEvent = async (message) => {
  try {
    const dateTime = `${format(new Date(), 'ddMMyyyy\tHH:mm:ss')}\n${uuid()}`;
    const log = `${dateTime}\n${message}\n\n`;

    const logDir = path.join(__dirname, 'logs');
    if (!fs.existsSync(logDir)) {
      await fsp.mkdir(logDir);
    }

    await fsp.appendFile(path.join(logDir, 'eventFile.txt'), log);
  } catch (err) {
    console.error("Logging failed:", err);
  }
};
