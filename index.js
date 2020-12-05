const protobuf = require('protobufjs')
const https = require('https')


protobuf.load(__dirname + '/variations_seed.proto', (err, root) => {
  if (err) throw err
  const VariationsSeed = root.lookupType('variations.VariationsSeed')
  console.error('fetching variations data...')
  const req = https.request('https://clientservices.googleapis.com/chrome-variations/seed')
  req.on('response', res => {
    let buf = Buffer.alloc(0)
    res.on('data', (data) => {
      buf = Buffer.concat([buf, data])
    })
    res.on('end', () => {
      console.error('fetched variations data, parsing...')
      const seed = VariationsSeed.decode(buf)
      //console.log(require('util').inspect(seed, {depth: Infinity}))
      console.log(JSON.stringify(seed, null, 2))
    })
  })
  req.end()
})
