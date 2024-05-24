const Logger = require('./logger');

const logger = new Logger();

logger.on('message', data => {
    console.log('Logger:', data);
})

logger.log('POST', '/users/login');
logger.log('GET', '/users/profile');
logger.log('DELETE', '/users/profile/123');