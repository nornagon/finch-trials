#!/usr/bin/env node

const protobuf = require('protobufjs')
const https = require('https')

function fetchVariations() {
  return new Promise((resolve, reject) => {
    protobuf.load(__dirname + '/variations_seed.proto', (err, root) => {
      if (err) return reject(err)
      const VariationsSeed = root.lookupType('variations.VariationsSeed')
      const req = https.request('https://clientservices.googleapis.com/chrome-variations/seed')
      req.on('response', res => {
        let buf = Buffer.alloc(0)
        res.on('data', (data) => {
          buf = Buffer.concat([buf, data])
        })
        res.on('end', () => {
          const seed = VariationsSeed.decode(buf)
          resolve(seed)
        })
      })
      req.on('error', (err) => reject(err))
      req.end()
    })
  })
}

module.exports = fetchVariations

if (!module.parent) {
  fetchVariations().then(seed => {
    console.log(JSON.stringify(seed, null, 2))
  })
}
