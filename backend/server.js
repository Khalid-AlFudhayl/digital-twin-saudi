const express = require('express')
const cors = require('cors')

const statsRoutes = require('./routes/stats')
const citiesRoutes = require('./routes/cities')
const notificationsRoutes = require('./routes/notifications')

const app = express()
const pool = require('./database/db')

app.use(cors())
app.use(express.json())

app.use('/stats', statsRoutes)
app.use('/cities', citiesRoutes)
app.use('/notifications', notificationsRoutes)

app.get('/', (req, res) => {
  res.json({
    message: 'Baseerah AI Backend Running'
  })
})
app.get('/database-test', async (req, res) => {

  try {

    const result = await pool.query('SELECT NOW()')

    res.json({
      success: true,
      time: result.rows[0]
    })

  } catch (error) {

    res.json({
      success: false,
      error: error.message
    })

  }

})

const PORT = 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})