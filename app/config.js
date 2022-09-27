let environments = {}

environments.staging = {
    'port': 3000,
    'envName': 'staging' 
}

environments.production = {
    'port' : 5000,
    'envName' : 'production'
}

// Determing which environment was passed as CL argument

var currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : ''

var environmentToExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.staging

module.exports = environmentToExport