const { createClient } = require('@astrajs/collections')

const astraClient = await createClient({
  astraDatabase: process.env.ASTRA_DB_ID,
  astraDatabaseRegion: process.env.ASTRA_DB_REGION,
  username: process.env.ASTRA_DB_USERNAME,
  password: process.env.ASTRA_DB_PASSWORD,
})
