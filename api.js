/* eslint-disable */
import axios from 'axios'
import qs from 'qs'
let domain = ''
export const getDomain = () => {
  return domain
}
export const setDomain = ($domain) => {
  domain = $domain
}
export const request = (method, url, body, queryParameters, form, config) => {
  method = method.toLowerCase()
  let keys = Object.keys(queryParameters)
  let queryUrl = url
  if (keys.length > 0) {
    queryUrl = url + '?' + qs.stringify(queryParameters)
  }
  // let queryUrl = url+(keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
  if (body) {
    return axios[method](queryUrl, body, config)
  } else if (method === 'get') {
    return axios[method](queryUrl, {
      params: form
    }, config)
  } else {
    return axios[method](queryUrl, qs.stringify(form), config)
  }
}
/*==========================================================
 *                    
 ==========================================================*/
/**
 * API root. Returns JSON Object of Metadata and available Entities
 * request: getApiV1
 * url: getApiV1URL
 * method: getApiV1_TYPE
 * raw_url: getApiV1_RAW_URL
 */
export const getApiV1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1_RAW_URL = function() {
  return '/api/v1/'
}
export const getApiV1_TYPE = function() {
  return 'get'
}
export const getApiV1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Login to the application
 * request: postApiV1Login
 * url: postApiV1LoginURL
 * method: postApiV1Login_TYPE
 * raw_url: postApiV1Login_RAW_URL
 * @param user - Login Data.
 */
export const postApiV1Login = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/login'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['user'] !== undefined) {
    body = parameters['user']
  }
  if (parameters['user'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: user'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postApiV1Login_RAW_URL = function() {
  return '/api/v1/login'
}
export const postApiV1Login_TYPE = function() {
  return 'post'
}
export const postApiV1LoginURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/login'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Logout of the application
 * request: getApiV1Logout
 * url: getApiV1LogoutURL
 * method: getApiV1Logout_TYPE
 * raw_url: getApiV1Logout_RAW_URL
 */
export const getApiV1Logout = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/logout'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1Logout_RAW_URL = function() {
  return '/api/v1/logout'
}
export const getApiV1Logout_TYPE = function() {
  return 'get'
}
export const getApiV1LogoutURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/logout'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * New User Registration
 * request: postApiV1Register
 * url: postApiV1RegisterURL
 * method: postApiV1Register_TYPE
 * raw_url: postApiV1Register_RAW_URL
 * @param user - Login Data.
 */
export const postApiV1Register = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/register'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['user'] !== undefined) {
    body = parameters['user']
  }
  if (parameters['user'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: user'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postApiV1Register_RAW_URL = function() {
  return '/api/v1/register'
}
export const postApiV1Register_TYPE = function() {
  return 'post'
}
export const postApiV1RegisterURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/register'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Serves an Entities JSONSchema by Name
 * request: getApiV1JsonschemaByName
 * url: getApiV1JsonschemaByNameURL
 * method: getApiV1JsonschemaByName_TYPE
 * raw_url: getApiV1JsonschemaByName_RAW_URL
 * @param name - Schema Name.
 */
export const getApiV1JsonschemaByName = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/jsonschema/{name}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{name}', `${parameters['name']}`)
  if (parameters['name'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: name'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1JsonschemaByName_RAW_URL = function() {
  return '/api/v1/jsonschema/{name}'
}
export const getApiV1JsonschemaByName_TYPE = function() {
  return 'get'
}
export const getApiV1JsonschemaByNameURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/jsonschema/{name}'
  path = path.replace('{name}', `${parameters['name']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns the number of documents of type assetref
 * request: getApiV1AssetrefCount
 * url: getApiV1AssetrefCountURL
 * method: getApiV1AssetrefCount_TYPE
 * raw_url: getApiV1AssetrefCount_RAW_URL
 */
export const getApiV1AssetrefCount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/assetref/count'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1AssetrefCount_RAW_URL = function() {
  return '/api/v1/assetref/count'
}
export const getApiV1AssetrefCount_TYPE = function() {
  return 'get'
}
export const getApiV1AssetrefCountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/assetref/count'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of assetrefs
 * request: getApiV1Assetref
 * url: getApiV1AssetrefURL
 * method: getApiV1Assetref_TYPE
 * raw_url: getApiV1Assetref_RAW_URL
 * @param sort - Key Name to Sort by, preceded by '-' for descending, default: _id
 * @param skip - Number of records to skip from start, default: 0
 * @param limit - Number of records to return, default: 10
 * @param query - MongoDB Query as a well formed JSON String, ie {"name":"Bob"}
 * @param populate - Path to a MongoDB reference to populate, ie [{"path":"customer"},{"path":"products"}]
 */
export const getApiV1Assetref = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/assetref'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1Assetref_RAW_URL = function() {
  return '/api/v1/assetref'
}
export const getApiV1Assetref_TYPE = function() {
  return 'get'
}
export const getApiV1AssetrefURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/assetref'
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Creates a new instance of assetref
 * request: postApiV1Assetref
 * url: postApiV1AssetrefURL
 * method: postApiV1Assetref_TYPE
 * raw_url: postApiV1Assetref_RAW_URL
 * @param assetref - 
 */
export const postApiV1Assetref = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/assetref'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['assetref'] !== undefined) {
    body = parameters['assetref']
  }
  if (parameters['assetref'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: assetref'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postApiV1Assetref_RAW_URL = function() {
  return '/api/v1/assetref'
}
export const postApiV1Assetref_TYPE = function() {
  return 'post'
}
export const postApiV1AssetrefURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/assetref'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the entire contents of collection assetref
 * request: deleteApiV1Assetref
 * url: deleteApiV1AssetrefURL
 * method: deleteApiV1Assetref_TYPE
 * raw_url: deleteApiV1Assetref_RAW_URL
 */
export const deleteApiV1Assetref = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/assetref'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteApiV1Assetref_RAW_URL = function() {
  return '/api/v1/assetref'
}
export const deleteApiV1Assetref_TYPE = function() {
  return 'delete'
}
export const deleteApiV1AssetrefURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/assetref'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of assetrefs
 * request: getApiV1AssetrefById
 * url: getApiV1AssetrefByIdURL
 * method: getApiV1AssetrefById_TYPE
 * raw_url: getApiV1AssetrefById_RAW_URL
 * @param id - MongoDB document _id
 */
export const getApiV1AssetrefById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/assetref/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1AssetrefById_RAW_URL = function() {
  return '/api/v1/assetref/{id}'
}
export const getApiV1AssetrefById_TYPE = function() {
  return 'get'
}
export const getApiV1AssetrefByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/assetref/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Updates the document with the given ID
 * request: postApiV1AssetrefById
 * url: postApiV1AssetrefByIdURL
 * method: postApiV1AssetrefById_TYPE
 * raw_url: postApiV1AssetrefById_RAW_URL
 * @param id - MongoDB document _id
 * @param assetref - 
 */
export const postApiV1AssetrefById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/assetref/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['assetref'] !== undefined) {
    body = parameters['assetref']
  }
  if (parameters['assetref'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: assetref'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postApiV1AssetrefById_RAW_URL = function() {
  return '/api/v1/assetref/{id}'
}
export const postApiV1AssetrefById_TYPE = function() {
  return 'post'
}
export const postApiV1AssetrefByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/assetref/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the document with the given ID
 * request: deleteApiV1AssetrefById
 * url: deleteApiV1AssetrefByIdURL
 * method: deleteApiV1AssetrefById_TYPE
 * raw_url: deleteApiV1AssetrefById_RAW_URL
 * @param id - MongoDB document _id
 */
export const deleteApiV1AssetrefById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/assetref/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteApiV1AssetrefById_RAW_URL = function() {
  return '/api/v1/assetref/{id}'
}
export const deleteApiV1AssetrefById_TYPE = function() {
  return 'delete'
}
export const deleteApiV1AssetrefByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/assetref/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns the number of documents of type authrec
 * request: getApiV1AuthrecCount
 * url: getApiV1AuthrecCountURL
 * method: getApiV1AuthrecCount_TYPE
 * raw_url: getApiV1AuthrecCount_RAW_URL
 */
export const getApiV1AuthrecCount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/authrec/count'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1AuthrecCount_RAW_URL = function() {
  return '/api/v1/authrec/count'
}
export const getApiV1AuthrecCount_TYPE = function() {
  return 'get'
}
export const getApiV1AuthrecCountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/authrec/count'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of authrecs
 * request: getApiV1Authrec
 * url: getApiV1AuthrecURL
 * method: getApiV1Authrec_TYPE
 * raw_url: getApiV1Authrec_RAW_URL
 * @param sort - Key Name to Sort by, preceded by '-' for descending, default: _id
 * @param skip - Number of records to skip from start, default: 0
 * @param limit - Number of records to return, default: 10
 * @param query - MongoDB Query as a well formed JSON String, ie {"name":"Bob"}
 * @param populate - Path to a MongoDB reference to populate, ie [{"path":"customer"},{"path":"products"}]
 */
export const getApiV1Authrec = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/authrec'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1Authrec_RAW_URL = function() {
  return '/api/v1/authrec'
}
export const getApiV1Authrec_TYPE = function() {
  return 'get'
}
export const getApiV1AuthrecURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/authrec'
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Creates a new instance of authrec
 * request: postApiV1Authrec
 * url: postApiV1AuthrecURL
 * method: postApiV1Authrec_TYPE
 * raw_url: postApiV1Authrec_RAW_URL
 * @param authrec - 
 */
export const postApiV1Authrec = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/authrec'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['authrec'] !== undefined) {
    body = parameters['authrec']
  }
  if (parameters['authrec'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: authrec'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postApiV1Authrec_RAW_URL = function() {
  return '/api/v1/authrec'
}
export const postApiV1Authrec_TYPE = function() {
  return 'post'
}
export const postApiV1AuthrecURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/authrec'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the entire contents of collection authrec
 * request: deleteApiV1Authrec
 * url: deleteApiV1AuthrecURL
 * method: deleteApiV1Authrec_TYPE
 * raw_url: deleteApiV1Authrec_RAW_URL
 */
export const deleteApiV1Authrec = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/authrec'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteApiV1Authrec_RAW_URL = function() {
  return '/api/v1/authrec'
}
export const deleteApiV1Authrec_TYPE = function() {
  return 'delete'
}
export const deleteApiV1AuthrecURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/authrec'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of authrecs
 * request: getApiV1AuthrecById
 * url: getApiV1AuthrecByIdURL
 * method: getApiV1AuthrecById_TYPE
 * raw_url: getApiV1AuthrecById_RAW_URL
 * @param id - MongoDB document _id
 */
export const getApiV1AuthrecById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/authrec/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1AuthrecById_RAW_URL = function() {
  return '/api/v1/authrec/{id}'
}
export const getApiV1AuthrecById_TYPE = function() {
  return 'get'
}
export const getApiV1AuthrecByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/authrec/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Updates the document with the given ID
 * request: postApiV1AuthrecById
 * url: postApiV1AuthrecByIdURL
 * method: postApiV1AuthrecById_TYPE
 * raw_url: postApiV1AuthrecById_RAW_URL
 * @param id - MongoDB document _id
 * @param authrec - 
 */
export const postApiV1AuthrecById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/authrec/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['authrec'] !== undefined) {
    body = parameters['authrec']
  }
  if (parameters['authrec'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: authrec'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postApiV1AuthrecById_RAW_URL = function() {
  return '/api/v1/authrec/{id}'
}
export const postApiV1AuthrecById_TYPE = function() {
  return 'post'
}
export const postApiV1AuthrecByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/authrec/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the document with the given ID
 * request: deleteApiV1AuthrecById
 * url: deleteApiV1AuthrecByIdURL
 * method: deleteApiV1AuthrecById_TYPE
 * raw_url: deleteApiV1AuthrecById_RAW_URL
 * @param id - MongoDB document _id
 */
export const deleteApiV1AuthrecById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/authrec/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteApiV1AuthrecById_RAW_URL = function() {
  return '/api/v1/authrec/{id}'
}
export const deleteApiV1AuthrecById_TYPE = function() {
  return 'delete'
}
export const deleteApiV1AuthrecByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/authrec/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns the number of documents of type bibref
 * request: getApiV1BibrefCount
 * url: getApiV1BibrefCountURL
 * method: getApiV1BibrefCount_TYPE
 * raw_url: getApiV1BibrefCount_RAW_URL
 */
export const getApiV1BibrefCount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/bibref/count'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1BibrefCount_RAW_URL = function() {
  return '/api/v1/bibref/count'
}
export const getApiV1BibrefCount_TYPE = function() {
  return 'get'
}
export const getApiV1BibrefCountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/bibref/count'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of bibrefs
 * request: getApiV1Bibref
 * url: getApiV1BibrefURL
 * method: getApiV1Bibref_TYPE
 * raw_url: getApiV1Bibref_RAW_URL
 * @param sort - Key Name to Sort by, preceded by '-' for descending, default: _id
 * @param skip - Number of records to skip from start, default: 0
 * @param limit - Number of records to return, default: 10
 * @param query - MongoDB Query as a well formed JSON String, ie {"name":"Bob"}
 * @param populate - Path to a MongoDB reference to populate, ie [{"path":"customer"},{"path":"products"}]
 */
export const getApiV1Bibref = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/bibref'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1Bibref_RAW_URL = function() {
  return '/api/v1/bibref'
}
export const getApiV1Bibref_TYPE = function() {
  return 'get'
}
export const getApiV1BibrefURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/bibref'
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Creates a new instance of bibref
 * request: postApiV1Bibref
 * url: postApiV1BibrefURL
 * method: postApiV1Bibref_TYPE
 * raw_url: postApiV1Bibref_RAW_URL
 * @param bibref - 
 */
export const postApiV1Bibref = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/bibref'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['bibref'] !== undefined) {
    body = parameters['bibref']
  }
  if (parameters['bibref'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: bibref'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postApiV1Bibref_RAW_URL = function() {
  return '/api/v1/bibref'
}
export const postApiV1Bibref_TYPE = function() {
  return 'post'
}
export const postApiV1BibrefURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/bibref'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the entire contents of collection bibref
 * request: deleteApiV1Bibref
 * url: deleteApiV1BibrefURL
 * method: deleteApiV1Bibref_TYPE
 * raw_url: deleteApiV1Bibref_RAW_URL
 */
export const deleteApiV1Bibref = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/bibref'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteApiV1Bibref_RAW_URL = function() {
  return '/api/v1/bibref'
}
export const deleteApiV1Bibref_TYPE = function() {
  return 'delete'
}
export const deleteApiV1BibrefURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/bibref'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of bibrefs
 * request: getApiV1BibrefById
 * url: getApiV1BibrefByIdURL
 * method: getApiV1BibrefById_TYPE
 * raw_url: getApiV1BibrefById_RAW_URL
 * @param id - MongoDB document _id
 */
export const getApiV1BibrefById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/bibref/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1BibrefById_RAW_URL = function() {
  return '/api/v1/bibref/{id}'
}
export const getApiV1BibrefById_TYPE = function() {
  return 'get'
}
export const getApiV1BibrefByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/bibref/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Updates the document with the given ID
 * request: postApiV1BibrefById
 * url: postApiV1BibrefByIdURL
 * method: postApiV1BibrefById_TYPE
 * raw_url: postApiV1BibrefById_RAW_URL
 * @param id - MongoDB document _id
 * @param bibref - 
 */
export const postApiV1BibrefById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/bibref/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['bibref'] !== undefined) {
    body = parameters['bibref']
  }
  if (parameters['bibref'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: bibref'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postApiV1BibrefById_RAW_URL = function() {
  return '/api/v1/bibref/{id}'
}
export const postApiV1BibrefById_TYPE = function() {
  return 'post'
}
export const postApiV1BibrefByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/bibref/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the document with the given ID
 * request: deleteApiV1BibrefById
 * url: deleteApiV1BibrefByIdURL
 * method: deleteApiV1BibrefById_TYPE
 * raw_url: deleteApiV1BibrefById_RAW_URL
 * @param id - MongoDB document _id
 */
export const deleteApiV1BibrefById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/bibref/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteApiV1BibrefById_RAW_URL = function() {
  return '/api/v1/bibref/{id}'
}
export const deleteApiV1BibrefById_TYPE = function() {
  return 'delete'
}
export const deleteApiV1BibrefByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/bibref/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns the number of documents of type collect
 * request: getApiV1CollectCount
 * url: getApiV1CollectCountURL
 * method: getApiV1CollectCount_TYPE
 * raw_url: getApiV1CollectCount_RAW_URL
 */
export const getApiV1CollectCount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/collect/count'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1CollectCount_RAW_URL = function() {
  return '/api/v1/collect/count'
}
export const getApiV1CollectCount_TYPE = function() {
  return 'get'
}
export const getApiV1CollectCountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/collect/count'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of collects
 * request: getApiV1Collect
 * url: getApiV1CollectURL
 * method: getApiV1Collect_TYPE
 * raw_url: getApiV1Collect_RAW_URL
 * @param sort - Key Name to Sort by, preceded by '-' for descending, default: _id
 * @param skip - Number of records to skip from start, default: 0
 * @param limit - Number of records to return, default: 10
 * @param query - MongoDB Query as a well formed JSON String, ie {"name":"Bob"}
 * @param populate - Path to a MongoDB reference to populate, ie [{"path":"customer"},{"path":"products"}]
 */
export const getApiV1Collect = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/collect'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1Collect_RAW_URL = function() {
  return '/api/v1/collect'
}
export const getApiV1Collect_TYPE = function() {
  return 'get'
}
export const getApiV1CollectURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/collect'
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Creates a new instance of collect
 * request: postApiV1Collect
 * url: postApiV1CollectURL
 * method: postApiV1Collect_TYPE
 * raw_url: postApiV1Collect_RAW_URL
 * @param collect - 
 */
export const postApiV1Collect = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/collect'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['collect'] !== undefined) {
    body = parameters['collect']
  }
  if (parameters['collect'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: collect'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postApiV1Collect_RAW_URL = function() {
  return '/api/v1/collect'
}
export const postApiV1Collect_TYPE = function() {
  return 'post'
}
export const postApiV1CollectURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/collect'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the entire contents of collection collect
 * request: deleteApiV1Collect
 * url: deleteApiV1CollectURL
 * method: deleteApiV1Collect_TYPE
 * raw_url: deleteApiV1Collect_RAW_URL
 */
export const deleteApiV1Collect = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/collect'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteApiV1Collect_RAW_URL = function() {
  return '/api/v1/collect'
}
export const deleteApiV1Collect_TYPE = function() {
  return 'delete'
}
export const deleteApiV1CollectURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/collect'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of collects
 * request: getApiV1CollectById
 * url: getApiV1CollectByIdURL
 * method: getApiV1CollectById_TYPE
 * raw_url: getApiV1CollectById_RAW_URL
 * @param id - MongoDB document _id
 */
export const getApiV1CollectById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/collect/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1CollectById_RAW_URL = function() {
  return '/api/v1/collect/{id}'
}
export const getApiV1CollectById_TYPE = function() {
  return 'get'
}
export const getApiV1CollectByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/collect/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Updates the document with the given ID
 * request: postApiV1CollectById
 * url: postApiV1CollectByIdURL
 * method: postApiV1CollectById_TYPE
 * raw_url: postApiV1CollectById_RAW_URL
 * @param id - MongoDB document _id
 * @param collect - 
 */
export const postApiV1CollectById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/collect/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['collect'] !== undefined) {
    body = parameters['collect']
  }
  if (parameters['collect'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: collect'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postApiV1CollectById_RAW_URL = function() {
  return '/api/v1/collect/{id}'
}
export const postApiV1CollectById_TYPE = function() {
  return 'post'
}
export const postApiV1CollectByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/collect/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the document with the given ID
 * request: deleteApiV1CollectById
 * url: deleteApiV1CollectByIdURL
 * method: deleteApiV1CollectById_TYPE
 * raw_url: deleteApiV1CollectById_RAW_URL
 * @param id - MongoDB document _id
 */
export const deleteApiV1CollectById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/collect/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteApiV1CollectById_RAW_URL = function() {
  return '/api/v1/collect/{id}'
}
export const deleteApiV1CollectById_TYPE = function() {
  return 'delete'
}
export const deleteApiV1CollectByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/collect/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns the number of documents of type corporation
 * request: getApiV1CorporationCount
 * url: getApiV1CorporationCountURL
 * method: getApiV1CorporationCount_TYPE
 * raw_url: getApiV1CorporationCount_RAW_URL
 */
export const getApiV1CorporationCount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/corporation/count'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1CorporationCount_RAW_URL = function() {
  return '/api/v1/corporation/count'
}
export const getApiV1CorporationCount_TYPE = function() {
  return 'get'
}
export const getApiV1CorporationCountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/corporation/count'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of corporations
 * request: getApiV1Corporation
 * url: getApiV1CorporationURL
 * method: getApiV1Corporation_TYPE
 * raw_url: getApiV1Corporation_RAW_URL
 * @param sort - Key Name to Sort by, preceded by '-' for descending, default: _id
 * @param skip - Number of records to skip from start, default: 0
 * @param limit - Number of records to return, default: 10
 * @param query - MongoDB Query as a well formed JSON String, ie {"name":"Bob"}
 * @param populate - Path to a MongoDB reference to populate, ie [{"path":"customer"},{"path":"products"}]
 */
export const getApiV1Corporation = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/corporation'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1Corporation_RAW_URL = function() {
  return '/api/v1/corporation'
}
export const getApiV1Corporation_TYPE = function() {
  return 'get'
}
export const getApiV1CorporationURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/corporation'
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Creates a new instance of corporation
 * request: postApiV1Corporation
 * url: postApiV1CorporationURL
 * method: postApiV1Corporation_TYPE
 * raw_url: postApiV1Corporation_RAW_URL
 * @param corporation - 
 */
export const postApiV1Corporation = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/corporation'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['corporation'] !== undefined) {
    body = parameters['corporation']
  }
  if (parameters['corporation'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: corporation'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postApiV1Corporation_RAW_URL = function() {
  return '/api/v1/corporation'
}
export const postApiV1Corporation_TYPE = function() {
  return 'post'
}
export const postApiV1CorporationURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/corporation'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the entire contents of collection corporation
 * request: deleteApiV1Corporation
 * url: deleteApiV1CorporationURL
 * method: deleteApiV1Corporation_TYPE
 * raw_url: deleteApiV1Corporation_RAW_URL
 */
export const deleteApiV1Corporation = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/corporation'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteApiV1Corporation_RAW_URL = function() {
  return '/api/v1/corporation'
}
export const deleteApiV1Corporation_TYPE = function() {
  return 'delete'
}
export const deleteApiV1CorporationURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/corporation'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of corporations
 * request: getApiV1CorporationById
 * url: getApiV1CorporationByIdURL
 * method: getApiV1CorporationById_TYPE
 * raw_url: getApiV1CorporationById_RAW_URL
 * @param id - MongoDB document _id
 */
export const getApiV1CorporationById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/corporation/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1CorporationById_RAW_URL = function() {
  return '/api/v1/corporation/{id}'
}
export const getApiV1CorporationById_TYPE = function() {
  return 'get'
}
export const getApiV1CorporationByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/corporation/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Updates the document with the given ID
 * request: postApiV1CorporationById
 * url: postApiV1CorporationByIdURL
 * method: postApiV1CorporationById_TYPE
 * raw_url: postApiV1CorporationById_RAW_URL
 * @param id - MongoDB document _id
 * @param corporation - 
 */
export const postApiV1CorporationById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/corporation/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['corporation'] !== undefined) {
    body = parameters['corporation']
  }
  if (parameters['corporation'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: corporation'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postApiV1CorporationById_RAW_URL = function() {
  return '/api/v1/corporation/{id}'
}
export const postApiV1CorporationById_TYPE = function() {
  return 'post'
}
export const postApiV1CorporationByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/corporation/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the document with the given ID
 * request: deleteApiV1CorporationById
 * url: deleteApiV1CorporationByIdURL
 * method: deleteApiV1CorporationById_TYPE
 * raw_url: deleteApiV1CorporationById_RAW_URL
 * @param id - MongoDB document _id
 */
export const deleteApiV1CorporationById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/corporation/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteApiV1CorporationById_RAW_URL = function() {
  return '/api/v1/corporation/{id}'
}
export const deleteApiV1CorporationById_TYPE = function() {
  return 'delete'
}
export const deleteApiV1CorporationByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/corporation/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns the number of documents of type currency
 * request: getApiV1CurrencyCount
 * url: getApiV1CurrencyCountURL
 * method: getApiV1CurrencyCount_TYPE
 * raw_url: getApiV1CurrencyCount_RAW_URL
 */
export const getApiV1CurrencyCount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/currency/count'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1CurrencyCount_RAW_URL = function() {
  return '/api/v1/currency/count'
}
export const getApiV1CurrencyCount_TYPE = function() {
  return 'get'
}
export const getApiV1CurrencyCountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/currency/count'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of currencys
 * request: getApiV1Currency
 * url: getApiV1CurrencyURL
 * method: getApiV1Currency_TYPE
 * raw_url: getApiV1Currency_RAW_URL
 * @param sort - Key Name to Sort by, preceded by '-' for descending, default: _id
 * @param skip - Number of records to skip from start, default: 0
 * @param limit - Number of records to return, default: 10
 * @param query - MongoDB Query as a well formed JSON String, ie {"name":"Bob"}
 * @param populate - Path to a MongoDB reference to populate, ie [{"path":"customer"},{"path":"products"}]
 */
export const getApiV1Currency = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/currency'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1Currency_RAW_URL = function() {
  return '/api/v1/currency'
}
export const getApiV1Currency_TYPE = function() {
  return 'get'
}
export const getApiV1CurrencyURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/currency'
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Creates a new instance of currency
 * request: postApiV1Currency
 * url: postApiV1CurrencyURL
 * method: postApiV1Currency_TYPE
 * raw_url: postApiV1Currency_RAW_URL
 * @param currency - 
 */
export const postApiV1Currency = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/currency'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['currency'] !== undefined) {
    body = parameters['currency']
  }
  if (parameters['currency'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: currency'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postApiV1Currency_RAW_URL = function() {
  return '/api/v1/currency'
}
export const postApiV1Currency_TYPE = function() {
  return 'post'
}
export const postApiV1CurrencyURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/currency'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the entire contents of collection currency
 * request: deleteApiV1Currency
 * url: deleteApiV1CurrencyURL
 * method: deleteApiV1Currency_TYPE
 * raw_url: deleteApiV1Currency_RAW_URL
 */
export const deleteApiV1Currency = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/currency'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteApiV1Currency_RAW_URL = function() {
  return '/api/v1/currency'
}
export const deleteApiV1Currency_TYPE = function() {
  return 'delete'
}
export const deleteApiV1CurrencyURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/currency'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of currencys
 * request: getApiV1CurrencyById
 * url: getApiV1CurrencyByIdURL
 * method: getApiV1CurrencyById_TYPE
 * raw_url: getApiV1CurrencyById_RAW_URL
 * @param id - MongoDB document _id
 */
export const getApiV1CurrencyById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/currency/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1CurrencyById_RAW_URL = function() {
  return '/api/v1/currency/{id}'
}
export const getApiV1CurrencyById_TYPE = function() {
  return 'get'
}
export const getApiV1CurrencyByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/currency/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Updates the document with the given ID
 * request: postApiV1CurrencyById
 * url: postApiV1CurrencyByIdURL
 * method: postApiV1CurrencyById_TYPE
 * raw_url: postApiV1CurrencyById_RAW_URL
 * @param id - MongoDB document _id
 * @param currency - 
 */
export const postApiV1CurrencyById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/currency/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['currency'] !== undefined) {
    body = parameters['currency']
  }
  if (parameters['currency'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: currency'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postApiV1CurrencyById_RAW_URL = function() {
  return '/api/v1/currency/{id}'
}
export const postApiV1CurrencyById_TYPE = function() {
  return 'post'
}
export const postApiV1CurrencyByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/currency/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the document with the given ID
 * request: deleteApiV1CurrencyById
 * url: deleteApiV1CurrencyByIdURL
 * method: deleteApiV1CurrencyById_TYPE
 * raw_url: deleteApiV1CurrencyById_RAW_URL
 * @param id - MongoDB document _id
 */
export const deleteApiV1CurrencyById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/currency/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteApiV1CurrencyById_RAW_URL = function() {
  return '/api/v1/currency/{id}'
}
export const deleteApiV1CurrencyById_TYPE = function() {
  return 'delete'
}
export const deleteApiV1CurrencyByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/currency/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns the number of documents of type descriptor
 * request: getApiV1DescriptorCount
 * url: getApiV1DescriptorCountURL
 * method: getApiV1DescriptorCount_TYPE
 * raw_url: getApiV1DescriptorCount_RAW_URL
 */
export const getApiV1DescriptorCount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/descriptor/count'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1DescriptorCount_RAW_URL = function() {
  return '/api/v1/descriptor/count'
}
export const getApiV1DescriptorCount_TYPE = function() {
  return 'get'
}
export const getApiV1DescriptorCountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/descriptor/count'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of descriptors
 * request: getApiV1Descriptor
 * url: getApiV1DescriptorURL
 * method: getApiV1Descriptor_TYPE
 * raw_url: getApiV1Descriptor_RAW_URL
 * @param sort - Key Name to Sort by, preceded by '-' for descending, default: _id
 * @param skip - Number of records to skip from start, default: 0
 * @param limit - Number of records to return, default: 10
 * @param query - MongoDB Query as a well formed JSON String, ie {"name":"Bob"}
 * @param populate - Path to a MongoDB reference to populate, ie [{"path":"customer"},{"path":"products"}]
 */
export const getApiV1Descriptor = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/descriptor'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1Descriptor_RAW_URL = function() {
  return '/api/v1/descriptor'
}
export const getApiV1Descriptor_TYPE = function() {
  return 'get'
}
export const getApiV1DescriptorURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/descriptor'
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Creates a new instance of descriptor
 * request: postApiV1Descriptor
 * url: postApiV1DescriptorURL
 * method: postApiV1Descriptor_TYPE
 * raw_url: postApiV1Descriptor_RAW_URL
 * @param descriptor - 
 */
export const postApiV1Descriptor = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/descriptor'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['descriptor'] !== undefined) {
    body = parameters['descriptor']
  }
  if (parameters['descriptor'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: descriptor'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postApiV1Descriptor_RAW_URL = function() {
  return '/api/v1/descriptor'
}
export const postApiV1Descriptor_TYPE = function() {
  return 'post'
}
export const postApiV1DescriptorURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/descriptor'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the entire contents of collection descriptor
 * request: deleteApiV1Descriptor
 * url: deleteApiV1DescriptorURL
 * method: deleteApiV1Descriptor_TYPE
 * raw_url: deleteApiV1Descriptor_RAW_URL
 */
export const deleteApiV1Descriptor = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/descriptor'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteApiV1Descriptor_RAW_URL = function() {
  return '/api/v1/descriptor'
}
export const deleteApiV1Descriptor_TYPE = function() {
  return 'delete'
}
export const deleteApiV1DescriptorURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/descriptor'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of descriptors
 * request: getApiV1DescriptorById
 * url: getApiV1DescriptorByIdURL
 * method: getApiV1DescriptorById_TYPE
 * raw_url: getApiV1DescriptorById_RAW_URL
 * @param id - MongoDB document _id
 */
export const getApiV1DescriptorById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/descriptor/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1DescriptorById_RAW_URL = function() {
  return '/api/v1/descriptor/{id}'
}
export const getApiV1DescriptorById_TYPE = function() {
  return 'get'
}
export const getApiV1DescriptorByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/descriptor/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Updates the document with the given ID
 * request: postApiV1DescriptorById
 * url: postApiV1DescriptorByIdURL
 * method: postApiV1DescriptorById_TYPE
 * raw_url: postApiV1DescriptorById_RAW_URL
 * @param id - MongoDB document _id
 * @param descriptor - 
 */
export const postApiV1DescriptorById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/descriptor/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['descriptor'] !== undefined) {
    body = parameters['descriptor']
  }
  if (parameters['descriptor'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: descriptor'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postApiV1DescriptorById_RAW_URL = function() {
  return '/api/v1/descriptor/{id}'
}
export const postApiV1DescriptorById_TYPE = function() {
  return 'post'
}
export const postApiV1DescriptorByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/descriptor/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the document with the given ID
 * request: deleteApiV1DescriptorById
 * url: deleteApiV1DescriptorByIdURL
 * method: deleteApiV1DescriptorById_TYPE
 * raw_url: deleteApiV1DescriptorById_RAW_URL
 * @param id - MongoDB document _id
 */
export const deleteApiV1DescriptorById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/descriptor/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteApiV1DescriptorById_RAW_URL = function() {
  return '/api/v1/descriptor/{id}'
}
export const deleteApiV1DescriptorById_TYPE = function() {
  return 'delete'
}
export const deleteApiV1DescriptorByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/descriptor/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns the number of documents of type entry
 * request: getApiV1EntryCount
 * url: getApiV1EntryCountURL
 * method: getApiV1EntryCount_TYPE
 * raw_url: getApiV1EntryCount_RAW_URL
 */
export const getApiV1EntryCount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/entry/count'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1EntryCount_RAW_URL = function() {
  return '/api/v1/entry/count'
}
export const getApiV1EntryCount_TYPE = function() {
  return 'get'
}
export const getApiV1EntryCountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/entry/count'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of entrys
 * request: getApiV1Entry
 * url: getApiV1EntryURL
 * method: getApiV1Entry_TYPE
 * raw_url: getApiV1Entry_RAW_URL
 * @param sort - Key Name to Sort by, preceded by '-' for descending, default: _id
 * @param skip - Number of records to skip from start, default: 0
 * @param limit - Number of records to return, default: 10
 * @param query - MongoDB Query as a well formed JSON String, ie {"name":"Bob"}
 * @param populate - Path to a MongoDB reference to populate, ie [{"path":"customer"},{"path":"products"}]
 */
export const getApiV1Entry = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/entry'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1Entry_RAW_URL = function() {
  return '/api/v1/entry'
}
export const getApiV1Entry_TYPE = function() {
  return 'get'
}
export const getApiV1EntryURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/entry'
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Creates a new instance of entry
 * request: postApiV1Entry
 * url: postApiV1EntryURL
 * method: postApiV1Entry_TYPE
 * raw_url: postApiV1Entry_RAW_URL
 * @param entry - 
 */
export const postApiV1Entry = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/entry'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['entry'] !== undefined) {
    body = parameters['entry']
  }
  if (parameters['entry'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: entry'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postApiV1Entry_RAW_URL = function() {
  return '/api/v1/entry'
}
export const postApiV1Entry_TYPE = function() {
  return 'post'
}
export const postApiV1EntryURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/entry'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the entire contents of collection entry
 * request: deleteApiV1Entry
 * url: deleteApiV1EntryURL
 * method: deleteApiV1Entry_TYPE
 * raw_url: deleteApiV1Entry_RAW_URL
 */
export const deleteApiV1Entry = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/entry'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteApiV1Entry_RAW_URL = function() {
  return '/api/v1/entry'
}
export const deleteApiV1Entry_TYPE = function() {
  return 'delete'
}
export const deleteApiV1EntryURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/entry'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of entrys
 * request: getApiV1EntryById
 * url: getApiV1EntryByIdURL
 * method: getApiV1EntryById_TYPE
 * raw_url: getApiV1EntryById_RAW_URL
 * @param id - MongoDB document _id
 */
export const getApiV1EntryById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/entry/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1EntryById_RAW_URL = function() {
  return '/api/v1/entry/{id}'
}
export const getApiV1EntryById_TYPE = function() {
  return 'get'
}
export const getApiV1EntryByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/entry/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Updates the document with the given ID
 * request: postApiV1EntryById
 * url: postApiV1EntryByIdURL
 * method: postApiV1EntryById_TYPE
 * raw_url: postApiV1EntryById_RAW_URL
 * @param id - MongoDB document _id
 * @param entry - 
 */
export const postApiV1EntryById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/entry/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['entry'] !== undefined) {
    body = parameters['entry']
  }
  if (parameters['entry'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: entry'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postApiV1EntryById_RAW_URL = function() {
  return '/api/v1/entry/{id}'
}
export const postApiV1EntryById_TYPE = function() {
  return 'post'
}
export const postApiV1EntryByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/entry/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the document with the given ID
 * request: deleteApiV1EntryById
 * url: deleteApiV1EntryByIdURL
 * method: deleteApiV1EntryById_TYPE
 * raw_url: deleteApiV1EntryById_RAW_URL
 * @param id - MongoDB document _id
 */
export const deleteApiV1EntryById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/entry/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteApiV1EntryById_RAW_URL = function() {
  return '/api/v1/entry/{id}'
}
export const deleteApiV1EntryById_TYPE = function() {
  return 'delete'
}
export const deleteApiV1EntryByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/entry/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns the number of documents of type inventory
 * request: getApiV1InventoryCount
 * url: getApiV1InventoryCountURL
 * method: getApiV1InventoryCount_TYPE
 * raw_url: getApiV1InventoryCount_RAW_URL
 */
export const getApiV1InventoryCount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/inventory/count'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1InventoryCount_RAW_URL = function() {
  return '/api/v1/inventory/count'
}
export const getApiV1InventoryCount_TYPE = function() {
  return 'get'
}
export const getApiV1InventoryCountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/inventory/count'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of inventorys
 * request: getApiV1Inventory
 * url: getApiV1InventoryURL
 * method: getApiV1Inventory_TYPE
 * raw_url: getApiV1Inventory_RAW_URL
 * @param sort - Key Name to Sort by, preceded by '-' for descending, default: _id
 * @param skip - Number of records to skip from start, default: 0
 * @param limit - Number of records to return, default: 10
 * @param query - MongoDB Query as a well formed JSON String, ie {"name":"Bob"}
 * @param populate - Path to a MongoDB reference to populate, ie [{"path":"customer"},{"path":"products"}]
 */
export const getApiV1Inventory = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/inventory'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1Inventory_RAW_URL = function() {
  return '/api/v1/inventory'
}
export const getApiV1Inventory_TYPE = function() {
  return 'get'
}
export const getApiV1InventoryURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/inventory'
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Creates a new instance of inventory
 * request: postApiV1Inventory
 * url: postApiV1InventoryURL
 * method: postApiV1Inventory_TYPE
 * raw_url: postApiV1Inventory_RAW_URL
 * @param inventory - 
 */
export const postApiV1Inventory = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/inventory'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['inventory'] !== undefined) {
    body = parameters['inventory']
  }
  if (parameters['inventory'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: inventory'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postApiV1Inventory_RAW_URL = function() {
  return '/api/v1/inventory'
}
export const postApiV1Inventory_TYPE = function() {
  return 'post'
}
export const postApiV1InventoryURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/inventory'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the entire contents of collection inventory
 * request: deleteApiV1Inventory
 * url: deleteApiV1InventoryURL
 * method: deleteApiV1Inventory_TYPE
 * raw_url: deleteApiV1Inventory_RAW_URL
 */
export const deleteApiV1Inventory = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/inventory'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteApiV1Inventory_RAW_URL = function() {
  return '/api/v1/inventory'
}
export const deleteApiV1Inventory_TYPE = function() {
  return 'delete'
}
export const deleteApiV1InventoryURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/inventory'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of inventorys
 * request: getApiV1InventoryById
 * url: getApiV1InventoryByIdURL
 * method: getApiV1InventoryById_TYPE
 * raw_url: getApiV1InventoryById_RAW_URL
 * @param id - MongoDB document _id
 */
export const getApiV1InventoryById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/inventory/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1InventoryById_RAW_URL = function() {
  return '/api/v1/inventory/{id}'
}
export const getApiV1InventoryById_TYPE = function() {
  return 'get'
}
export const getApiV1InventoryByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/inventory/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Updates the document with the given ID
 * request: postApiV1InventoryById
 * url: postApiV1InventoryByIdURL
 * method: postApiV1InventoryById_TYPE
 * raw_url: postApiV1InventoryById_RAW_URL
 * @param id - MongoDB document _id
 * @param inventory - 
 */
export const postApiV1InventoryById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/inventory/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['inventory'] !== undefined) {
    body = parameters['inventory']
  }
  if (parameters['inventory'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: inventory'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postApiV1InventoryById_RAW_URL = function() {
  return '/api/v1/inventory/{id}'
}
export const postApiV1InventoryById_TYPE = function() {
  return 'post'
}
export const postApiV1InventoryByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/inventory/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the document with the given ID
 * request: deleteApiV1InventoryById
 * url: deleteApiV1InventoryByIdURL
 * method: deleteApiV1InventoryById_TYPE
 * raw_url: deleteApiV1InventoryById_RAW_URL
 * @param id - MongoDB document _id
 */
export const deleteApiV1InventoryById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/inventory/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteApiV1InventoryById_RAW_URL = function() {
  return '/api/v1/inventory/{id}'
}
export const deleteApiV1InventoryById_TYPE = function() {
  return 'delete'
}
export const deleteApiV1InventoryByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/inventory/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns the number of documents of type object
 * request: getApiV1ObjectCount
 * url: getApiV1ObjectCountURL
 * method: getApiV1ObjectCount_TYPE
 * raw_url: getApiV1ObjectCount_RAW_URL
 */
export const getApiV1ObjectCount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/object/count'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1ObjectCount_RAW_URL = function() {
  return '/api/v1/object/count'
}
export const getApiV1ObjectCount_TYPE = function() {
  return 'get'
}
export const getApiV1ObjectCountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/object/count'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of objects
 * request: getApiV1Object
 * url: getApiV1ObjectURL
 * method: getApiV1Object_TYPE
 * raw_url: getApiV1Object_RAW_URL
 * @param sort - Key Name to Sort by, preceded by '-' for descending, default: _id
 * @param skip - Number of records to skip from start, default: 0
 * @param limit - Number of records to return, default: 10
 * @param query - MongoDB Query as a well formed JSON String, ie {"name":"Bob"}
 * @param populate - Path to a MongoDB reference to populate, ie [{"path":"customer"},{"path":"products"}]
 */
export const getApiV1Object = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/object'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1Object_RAW_URL = function() {
  return '/api/v1/object'
}
export const getApiV1Object_TYPE = function() {
  return 'get'
}
export const getApiV1ObjectURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/object'
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Creates a new instance of object
 * request: postApiV1Object
 * url: postApiV1ObjectURL
 * method: postApiV1Object_TYPE
 * raw_url: postApiV1Object_RAW_URL
 * @param object - 
 */
export const postApiV1Object = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/object'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['object'] !== undefined) {
    body = parameters['object']
  }
  if (parameters['object'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: object'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postApiV1Object_RAW_URL = function() {
  return '/api/v1/object'
}
export const postApiV1Object_TYPE = function() {
  return 'post'
}
export const postApiV1ObjectURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/object'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the entire contents of collection object
 * request: deleteApiV1Object
 * url: deleteApiV1ObjectURL
 * method: deleteApiV1Object_TYPE
 * raw_url: deleteApiV1Object_RAW_URL
 */
export const deleteApiV1Object = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/object'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteApiV1Object_RAW_URL = function() {
  return '/api/v1/object'
}
export const deleteApiV1Object_TYPE = function() {
  return 'delete'
}
export const deleteApiV1ObjectURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/object'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of objects
 * request: getApiV1ObjectById
 * url: getApiV1ObjectByIdURL
 * method: getApiV1ObjectById_TYPE
 * raw_url: getApiV1ObjectById_RAW_URL
 * @param id - MongoDB document _id
 */
export const getApiV1ObjectById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/object/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1ObjectById_RAW_URL = function() {
  return '/api/v1/object/{id}'
}
export const getApiV1ObjectById_TYPE = function() {
  return 'get'
}
export const getApiV1ObjectByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/object/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Updates the document with the given ID
 * request: postApiV1ObjectById
 * url: postApiV1ObjectByIdURL
 * method: postApiV1ObjectById_TYPE
 * raw_url: postApiV1ObjectById_RAW_URL
 * @param id - MongoDB document _id
 * @param object - 
 */
export const postApiV1ObjectById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/object/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['object'] !== undefined) {
    body = parameters['object']
  }
  if (parameters['object'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: object'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postApiV1ObjectById_RAW_URL = function() {
  return '/api/v1/object/{id}'
}
export const postApiV1ObjectById_TYPE = function() {
  return 'post'
}
export const postApiV1ObjectByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/object/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the document with the given ID
 * request: deleteApiV1ObjectById
 * url: deleteApiV1ObjectByIdURL
 * method: deleteApiV1ObjectById_TYPE
 * raw_url: deleteApiV1ObjectById_RAW_URL
 * @param id - MongoDB document _id
 */
export const deleteApiV1ObjectById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/object/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteApiV1ObjectById_RAW_URL = function() {
  return '/api/v1/object/{id}'
}
export const deleteApiV1ObjectById_TYPE = function() {
  return 'delete'
}
export const deleteApiV1ObjectByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/object/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns the number of documents of type person
 * request: getApiV1PersonCount
 * url: getApiV1PersonCountURL
 * method: getApiV1PersonCount_TYPE
 * raw_url: getApiV1PersonCount_RAW_URL
 */
export const getApiV1PersonCount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/person/count'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1PersonCount_RAW_URL = function() {
  return '/api/v1/person/count'
}
export const getApiV1PersonCount_TYPE = function() {
  return 'get'
}
export const getApiV1PersonCountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/person/count'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of persons
 * request: getApiV1Person
 * url: getApiV1PersonURL
 * method: getApiV1Person_TYPE
 * raw_url: getApiV1Person_RAW_URL
 * @param sort - Key Name to Sort by, preceded by '-' for descending, default: _id
 * @param skip - Number of records to skip from start, default: 0
 * @param limit - Number of records to return, default: 10
 * @param query - MongoDB Query as a well formed JSON String, ie {"name":"Bob"}
 * @param populate - Path to a MongoDB reference to populate, ie [{"path":"customer"},{"path":"products"}]
 */
export const getApiV1Person = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/person'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1Person_RAW_URL = function() {
  return '/api/v1/person'
}
export const getApiV1Person_TYPE = function() {
  return 'get'
}
export const getApiV1PersonURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/person'
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Creates a new instance of person
 * request: postApiV1Person
 * url: postApiV1PersonURL
 * method: postApiV1Person_TYPE
 * raw_url: postApiV1Person_RAW_URL
 * @param person - 
 */
export const postApiV1Person = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/person'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['person'] !== undefined) {
    body = parameters['person']
  }
  if (parameters['person'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: person'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postApiV1Person_RAW_URL = function() {
  return '/api/v1/person'
}
export const postApiV1Person_TYPE = function() {
  return 'post'
}
export const postApiV1PersonURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/person'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the entire contents of collection person
 * request: deleteApiV1Person
 * url: deleteApiV1PersonURL
 * method: deleteApiV1Person_TYPE
 * raw_url: deleteApiV1Person_RAW_URL
 */
export const deleteApiV1Person = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/person'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteApiV1Person_RAW_URL = function() {
  return '/api/v1/person'
}
export const deleteApiV1Person_TYPE = function() {
  return 'delete'
}
export const deleteApiV1PersonURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/person'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of persons
 * request: getApiV1PersonById
 * url: getApiV1PersonByIdURL
 * method: getApiV1PersonById_TYPE
 * raw_url: getApiV1PersonById_RAW_URL
 * @param id - MongoDB document _id
 */
export const getApiV1PersonById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/person/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1PersonById_RAW_URL = function() {
  return '/api/v1/person/{id}'
}
export const getApiV1PersonById_TYPE = function() {
  return 'get'
}
export const getApiV1PersonByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/person/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Updates the document with the given ID
 * request: postApiV1PersonById
 * url: postApiV1PersonByIdURL
 * method: postApiV1PersonById_TYPE
 * raw_url: postApiV1PersonById_RAW_URL
 * @param id - MongoDB document _id
 * @param person - 
 */
export const postApiV1PersonById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/person/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['person'] !== undefined) {
    body = parameters['person']
  }
  if (parameters['person'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: person'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postApiV1PersonById_RAW_URL = function() {
  return '/api/v1/person/{id}'
}
export const postApiV1PersonById_TYPE = function() {
  return 'post'
}
export const postApiV1PersonByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/person/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the document with the given ID
 * request: deleteApiV1PersonById
 * url: deleteApiV1PersonByIdURL
 * method: deleteApiV1PersonById_TYPE
 * raw_url: deleteApiV1PersonById_RAW_URL
 * @param id - MongoDB document _id
 */
export const deleteApiV1PersonById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/person/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteApiV1PersonById_RAW_URL = function() {
  return '/api/v1/person/{id}'
}
export const deleteApiV1PersonById_TYPE = function() {
  return 'delete'
}
export const deleteApiV1PersonByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/person/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns the number of documents of type place
 * request: getApiV1PlaceCount
 * url: getApiV1PlaceCountURL
 * method: getApiV1PlaceCount_TYPE
 * raw_url: getApiV1PlaceCount_RAW_URL
 */
export const getApiV1PlaceCount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/place/count'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1PlaceCount_RAW_URL = function() {
  return '/api/v1/place/count'
}
export const getApiV1PlaceCount_TYPE = function() {
  return 'get'
}
export const getApiV1PlaceCountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/place/count'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of places
 * request: getApiV1Place
 * url: getApiV1PlaceURL
 * method: getApiV1Place_TYPE
 * raw_url: getApiV1Place_RAW_URL
 * @param sort - Key Name to Sort by, preceded by '-' for descending, default: _id
 * @param skip - Number of records to skip from start, default: 0
 * @param limit - Number of records to return, default: 10
 * @param query - MongoDB Query as a well formed JSON String, ie {"name":"Bob"}
 * @param populate - Path to a MongoDB reference to populate, ie [{"path":"customer"},{"path":"products"}]
 */
export const getApiV1Place = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/place'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1Place_RAW_URL = function() {
  return '/api/v1/place'
}
export const getApiV1Place_TYPE = function() {
  return 'get'
}
export const getApiV1PlaceURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/place'
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Creates a new instance of place
 * request: postApiV1Place
 * url: postApiV1PlaceURL
 * method: postApiV1Place_TYPE
 * raw_url: postApiV1Place_RAW_URL
 * @param place - 
 */
export const postApiV1Place = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/place'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['place'] !== undefined) {
    body = parameters['place']
  }
  if (parameters['place'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: place'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postApiV1Place_RAW_URL = function() {
  return '/api/v1/place'
}
export const postApiV1Place_TYPE = function() {
  return 'post'
}
export const postApiV1PlaceURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/place'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the entire contents of collection place
 * request: deleteApiV1Place
 * url: deleteApiV1PlaceURL
 * method: deleteApiV1Place_TYPE
 * raw_url: deleteApiV1Place_RAW_URL
 */
export const deleteApiV1Place = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/place'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteApiV1Place_RAW_URL = function() {
  return '/api/v1/place'
}
export const deleteApiV1Place_TYPE = function() {
  return 'delete'
}
export const deleteApiV1PlaceURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/place'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of places
 * request: getApiV1PlaceById
 * url: getApiV1PlaceByIdURL
 * method: getApiV1PlaceById_TYPE
 * raw_url: getApiV1PlaceById_RAW_URL
 * @param id - MongoDB document _id
 */
export const getApiV1PlaceById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/place/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1PlaceById_RAW_URL = function() {
  return '/api/v1/place/{id}'
}
export const getApiV1PlaceById_TYPE = function() {
  return 'get'
}
export const getApiV1PlaceByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/place/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Updates the document with the given ID
 * request: postApiV1PlaceById
 * url: postApiV1PlaceByIdURL
 * method: postApiV1PlaceById_TYPE
 * raw_url: postApiV1PlaceById_RAW_URL
 * @param id - MongoDB document _id
 * @param place - 
 */
export const postApiV1PlaceById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/place/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['place'] !== undefined) {
    body = parameters['place']
  }
  if (parameters['place'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: place'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postApiV1PlaceById_RAW_URL = function() {
  return '/api/v1/place/{id}'
}
export const postApiV1PlaceById_TYPE = function() {
  return 'post'
}
export const postApiV1PlaceByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/place/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the document with the given ID
 * request: deleteApiV1PlaceById
 * url: deleteApiV1PlaceByIdURL
 * method: deleteApiV1PlaceById_TYPE
 * raw_url: deleteApiV1PlaceById_RAW_URL
 * @param id - MongoDB document _id
 */
export const deleteApiV1PlaceById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/place/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteApiV1PlaceById_RAW_URL = function() {
  return '/api/v1/place/{id}'
}
export const deleteApiV1PlaceById_TYPE = function() {
  return 'delete'
}
export const deleteApiV1PlaceByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/place/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns the number of documents of type proplabel
 * request: getApiV1ProplabelCount
 * url: getApiV1ProplabelCountURL
 * method: getApiV1ProplabelCount_TYPE
 * raw_url: getApiV1ProplabelCount_RAW_URL
 */
export const getApiV1ProplabelCount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/proplabel/count'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1ProplabelCount_RAW_URL = function() {
  return '/api/v1/proplabel/count'
}
export const getApiV1ProplabelCount_TYPE = function() {
  return 'get'
}
export const getApiV1ProplabelCountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/proplabel/count'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of proplabels
 * request: getApiV1Proplabel
 * url: getApiV1ProplabelURL
 * method: getApiV1Proplabel_TYPE
 * raw_url: getApiV1Proplabel_RAW_URL
 * @param sort - Key Name to Sort by, preceded by '-' for descending, default: _id
 * @param skip - Number of records to skip from start, default: 0
 * @param limit - Number of records to return, default: 10
 * @param query - MongoDB Query as a well formed JSON String, ie {"name":"Bob"}
 * @param populate - Path to a MongoDB reference to populate, ie [{"path":"customer"},{"path":"products"}]
 */
export const getApiV1Proplabel = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/proplabel'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1Proplabel_RAW_URL = function() {
  return '/api/v1/proplabel'
}
export const getApiV1Proplabel_TYPE = function() {
  return 'get'
}
export const getApiV1ProplabelURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/proplabel'
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Creates a new instance of proplabel
 * request: postApiV1Proplabel
 * url: postApiV1ProplabelURL
 * method: postApiV1Proplabel_TYPE
 * raw_url: postApiV1Proplabel_RAW_URL
 * @param proplabel - 
 */
export const postApiV1Proplabel = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/proplabel'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['proplabel'] !== undefined) {
    body = parameters['proplabel']
  }
  if (parameters['proplabel'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: proplabel'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postApiV1Proplabel_RAW_URL = function() {
  return '/api/v1/proplabel'
}
export const postApiV1Proplabel_TYPE = function() {
  return 'post'
}
export const postApiV1ProplabelURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/proplabel'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the entire contents of collection proplabel
 * request: deleteApiV1Proplabel
 * url: deleteApiV1ProplabelURL
 * method: deleteApiV1Proplabel_TYPE
 * raw_url: deleteApiV1Proplabel_RAW_URL
 */
export const deleteApiV1Proplabel = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/proplabel'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteApiV1Proplabel_RAW_URL = function() {
  return '/api/v1/proplabel'
}
export const deleteApiV1Proplabel_TYPE = function() {
  return 'delete'
}
export const deleteApiV1ProplabelURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/proplabel'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of proplabels
 * request: getApiV1ProplabelById
 * url: getApiV1ProplabelByIdURL
 * method: getApiV1ProplabelById_TYPE
 * raw_url: getApiV1ProplabelById_RAW_URL
 * @param id - MongoDB document _id
 */
export const getApiV1ProplabelById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/proplabel/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1ProplabelById_RAW_URL = function() {
  return '/api/v1/proplabel/{id}'
}
export const getApiV1ProplabelById_TYPE = function() {
  return 'get'
}
export const getApiV1ProplabelByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/proplabel/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Updates the document with the given ID
 * request: postApiV1ProplabelById
 * url: postApiV1ProplabelByIdURL
 * method: postApiV1ProplabelById_TYPE
 * raw_url: postApiV1ProplabelById_RAW_URL
 * @param id - MongoDB document _id
 * @param proplabel - 
 */
export const postApiV1ProplabelById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/proplabel/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['proplabel'] !== undefined) {
    body = parameters['proplabel']
  }
  if (parameters['proplabel'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: proplabel'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postApiV1ProplabelById_RAW_URL = function() {
  return '/api/v1/proplabel/{id}'
}
export const postApiV1ProplabelById_TYPE = function() {
  return 'post'
}
export const postApiV1ProplabelByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/proplabel/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the document with the given ID
 * request: deleteApiV1ProplabelById
 * url: deleteApiV1ProplabelByIdURL
 * method: deleteApiV1ProplabelById_TYPE
 * raw_url: deleteApiV1ProplabelById_RAW_URL
 * @param id - MongoDB document _id
 */
export const deleteApiV1ProplabelById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/proplabel/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteApiV1ProplabelById_RAW_URL = function() {
  return '/api/v1/proplabel/{id}'
}
export const deleteApiV1ProplabelById_TYPE = function() {
  return 'delete'
}
export const deleteApiV1ProplabelByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/proplabel/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns the number of documents of type transaction
 * request: getApiV1TransactionCount
 * url: getApiV1TransactionCountURL
 * method: getApiV1TransactionCount_TYPE
 * raw_url: getApiV1TransactionCount_RAW_URL
 */
export const getApiV1TransactionCount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/transaction/count'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1TransactionCount_RAW_URL = function() {
  return '/api/v1/transaction/count'
}
export const getApiV1TransactionCount_TYPE = function() {
  return 'get'
}
export const getApiV1TransactionCountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/transaction/count'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of transactions
 * request: getApiV1Transaction
 * url: getApiV1TransactionURL
 * method: getApiV1Transaction_TYPE
 * raw_url: getApiV1Transaction_RAW_URL
 * @param sort - Key Name to Sort by, preceded by '-' for descending, default: _id
 * @param skip - Number of records to skip from start, default: 0
 * @param limit - Number of records to return, default: 10
 * @param query - MongoDB Query as a well formed JSON String, ie {"name":"Bob"}
 * @param populate - Path to a MongoDB reference to populate, ie [{"path":"customer"},{"path":"products"}]
 */
export const getApiV1Transaction = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/transaction'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1Transaction_RAW_URL = function() {
  return '/api/v1/transaction'
}
export const getApiV1Transaction_TYPE = function() {
  return 'get'
}
export const getApiV1TransactionURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/transaction'
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Creates a new instance of transaction
 * request: postApiV1Transaction
 * url: postApiV1TransactionURL
 * method: postApiV1Transaction_TYPE
 * raw_url: postApiV1Transaction_RAW_URL
 * @param transaction - 
 */
export const postApiV1Transaction = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/transaction'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['transaction'] !== undefined) {
    body = parameters['transaction']
  }
  if (parameters['transaction'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: transaction'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postApiV1Transaction_RAW_URL = function() {
  return '/api/v1/transaction'
}
export const postApiV1Transaction_TYPE = function() {
  return 'post'
}
export const postApiV1TransactionURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/transaction'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the entire contents of collection transaction
 * request: deleteApiV1Transaction
 * url: deleteApiV1TransactionURL
 * method: deleteApiV1Transaction_TYPE
 * raw_url: deleteApiV1Transaction_RAW_URL
 */
export const deleteApiV1Transaction = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/transaction'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteApiV1Transaction_RAW_URL = function() {
  return '/api/v1/transaction'
}
export const deleteApiV1Transaction_TYPE = function() {
  return 'delete'
}
export const deleteApiV1TransactionURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/transaction'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of transactions
 * request: getApiV1TransactionById
 * url: getApiV1TransactionByIdURL
 * method: getApiV1TransactionById_TYPE
 * raw_url: getApiV1TransactionById_RAW_URL
 * @param id - MongoDB document _id
 */
export const getApiV1TransactionById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/transaction/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1TransactionById_RAW_URL = function() {
  return '/api/v1/transaction/{id}'
}
export const getApiV1TransactionById_TYPE = function() {
  return 'get'
}
export const getApiV1TransactionByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/transaction/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Updates the document with the given ID
 * request: postApiV1TransactionById
 * url: postApiV1TransactionByIdURL
 * method: postApiV1TransactionById_TYPE
 * raw_url: postApiV1TransactionById_RAW_URL
 * @param id - MongoDB document _id
 * @param transaction - 
 */
export const postApiV1TransactionById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/transaction/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['transaction'] !== undefined) {
    body = parameters['transaction']
  }
  if (parameters['transaction'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: transaction'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postApiV1TransactionById_RAW_URL = function() {
  return '/api/v1/transaction/{id}'
}
export const postApiV1TransactionById_TYPE = function() {
  return 'post'
}
export const postApiV1TransactionByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/transaction/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the document with the given ID
 * request: deleteApiV1TransactionById
 * url: deleteApiV1TransactionByIdURL
 * method: deleteApiV1TransactionById_TYPE
 * raw_url: deleteApiV1TransactionById_RAW_URL
 * @param id - MongoDB document _id
 */
export const deleteApiV1TransactionById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/transaction/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteApiV1TransactionById_RAW_URL = function() {
  return '/api/v1/transaction/{id}'
}
export const deleteApiV1TransactionById_TYPE = function() {
  return 'delete'
}
export const deleteApiV1TransactionByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/transaction/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns the number of documents of type unit
 * request: getApiV1UnitCount
 * url: getApiV1UnitCountURL
 * method: getApiV1UnitCount_TYPE
 * raw_url: getApiV1UnitCount_RAW_URL
 */
export const getApiV1UnitCount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/unit/count'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1UnitCount_RAW_URL = function() {
  return '/api/v1/unit/count'
}
export const getApiV1UnitCount_TYPE = function() {
  return 'get'
}
export const getApiV1UnitCountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/unit/count'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of units
 * request: getApiV1Unit
 * url: getApiV1UnitURL
 * method: getApiV1Unit_TYPE
 * raw_url: getApiV1Unit_RAW_URL
 * @param sort - Key Name to Sort by, preceded by '-' for descending, default: _id
 * @param skip - Number of records to skip from start, default: 0
 * @param limit - Number of records to return, default: 10
 * @param query - MongoDB Query as a well formed JSON String, ie {"name":"Bob"}
 * @param populate - Path to a MongoDB reference to populate, ie [{"path":"customer"},{"path":"products"}]
 */
export const getApiV1Unit = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/unit'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1Unit_RAW_URL = function() {
  return '/api/v1/unit'
}
export const getApiV1Unit_TYPE = function() {
  return 'get'
}
export const getApiV1UnitURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/unit'
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Creates a new instance of unit
 * request: postApiV1Unit
 * url: postApiV1UnitURL
 * method: postApiV1Unit_TYPE
 * raw_url: postApiV1Unit_RAW_URL
 * @param unit - 
 */
export const postApiV1Unit = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/unit'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['unit'] !== undefined) {
    body = parameters['unit']
  }
  if (parameters['unit'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: unit'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postApiV1Unit_RAW_URL = function() {
  return '/api/v1/unit'
}
export const postApiV1Unit_TYPE = function() {
  return 'post'
}
export const postApiV1UnitURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/unit'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the entire contents of collection unit
 * request: deleteApiV1Unit
 * url: deleteApiV1UnitURL
 * method: deleteApiV1Unit_TYPE
 * raw_url: deleteApiV1Unit_RAW_URL
 */
export const deleteApiV1Unit = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/unit'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteApiV1Unit_RAW_URL = function() {
  return '/api/v1/unit'
}
export const deleteApiV1Unit_TYPE = function() {
  return 'delete'
}
export const deleteApiV1UnitURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/unit'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of units
 * request: getApiV1UnitById
 * url: getApiV1UnitByIdURL
 * method: getApiV1UnitById_TYPE
 * raw_url: getApiV1UnitById_RAW_URL
 * @param id - MongoDB document _id
 */
export const getApiV1UnitById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/unit/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getApiV1UnitById_RAW_URL = function() {
  return '/api/v1/unit/{id}'
}
export const getApiV1UnitById_TYPE = function() {
  return 'get'
}
export const getApiV1UnitByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/unit/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Updates the document with the given ID
 * request: postApiV1UnitById
 * url: postApiV1UnitByIdURL
 * method: postApiV1UnitById_TYPE
 * raw_url: postApiV1UnitById_RAW_URL
 * @param id - MongoDB document _id
 * @param unit - 
 */
export const postApiV1UnitById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/unit/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['unit'] !== undefined) {
    body = parameters['unit']
  }
  if (parameters['unit'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: unit'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postApiV1UnitById_RAW_URL = function() {
  return '/api/v1/unit/{id}'
}
export const postApiV1UnitById_TYPE = function() {
  return 'post'
}
export const postApiV1UnitByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/unit/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the document with the given ID
 * request: deleteApiV1UnitById
 * url: deleteApiV1UnitByIdURL
 * method: deleteApiV1UnitById_TYPE
 * raw_url: deleteApiV1UnitById_RAW_URL
 * @param id - MongoDB document _id
 */
export const deleteApiV1UnitById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/v1/unit/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteApiV1UnitById_RAW_URL = function() {
  return '/api/v1/unit/{id}'
}
export const deleteApiV1UnitById_TYPE = function() {
  return 'delete'
}
export const deleteApiV1UnitByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/v1/unit/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}